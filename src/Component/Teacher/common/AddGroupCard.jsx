import { useState } from "react";
import { createPortal } from "react-dom";
import Loading from "../../Custom Components/Loading";
import axios from "../../../api/axios";
import toast from "react-hot-toast";
export default function AddGroupCard({ handleClosePortal, onGroupAdded }) {
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [studentNum, setStudentNum] = useState(3);

  const handleParentClick = () => {
    // Do something when clicked on the parent
    handleClosePortal(false);
  };

  const handleChildClick = (event) => {
    event.stopPropagation(); // Prevent the event from reaching the parent
    // Do something when clicked on a child
    if (!name.match(/^[a-zA-Z ]+$/) || name.length > 30) {
      toast.error(
        "Your Group Name has to be less than 30 characters with no numbers.",
        {
          position: "top-right",
          duration: 4000,
          style: {
            backgroundColor: "#FF0000",
            color: "white",
          },
          iconTheme: {
            primary: "white",
            secondary: "#FF0000",
          },
        }
      );
      return;
    }
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData.accessToken;
    setSubmitting(true);
    axios
      .post(
        "/teacher/group/manage",
        { name: name, students: studentNum },
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          duration: 4000,
          style: {
            backgroundColor: "#00FF0A",
            color: "white",
            boxShadow: "none",
          },
          iconTheme: {
            primary: "white",
            secondary: "#00FF0A",
          },
        });
        // Execute the callback function to notify parent component
        onGroupAdded();
        handleClosePortal();
      })
      .catch((error) => {
        handleClosePortal({
          type: "error",
          message: error.response.data.message,
        });
        console.error("Error fetching data:", error);
      })
      .finally(() => setSubmitting(false));
  };

  const preventParentClick = (event) => {
    event.stopPropagation(); // Prevent the event from reaching the parent
  };

  return createPortal(
    <div
      onClick={handleParentClick}
      className="h-[100vh] backdrop-blur-sm z-[5555] fixed text-white w-[100vw]"
    >
      <div
        className="bg-[#F4F4F4] flex flex-col gap-[20px] md:py-[3em] md:px-[2em] py-[1em] px-[0.5em] text-center full-center-fixed w-[95%] md:w-[500px] overflow-hidden text-black button-shadow relative rounded-lg md:rounded-[40px] "
        onClick={preventParentClick}
      >
        <h3 className="text-[1.5em] font-[600] w-[90%] md:max-w-[80%] mx-auto">
          Group Details
        </h3>
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <div>
            Group Name:
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Group Name"
              className="p-2 mx-2 rounded-2xl w-64 border-slate-600 border-1"
            />
          </div>
          <div>
            Number of students:
            <input
              value={studentNum}
              onChange={(e) => setStudentNum(e.target.value)}
              type="number"
              placeholder="Group Name"
              min={3}
              className="p-2 mx-2 rounded-2xl w-16 text-center border-slate-600 border-1"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse w-[100%] md:max-w-[90%] justify-around items-center mx-auto">
          {submitting ? (
            <div className="bg-blue-600  text-white w-[45%] p-[0.5em] px-[1em] md:px-[2.5em] rounded-full text-[1.05rem] font-[500] mt-[1em] button-shadow">
              <Loading className="py-[0.5em]" />
            </div>
          ) : (
            <button
              className="bg-blue-600  text-white w-[45%] p-[0.5em] px-[1em] md:px-[2.5em] rounded-full text-[1.05rem] font-[500] mt-[1em] button-shadow"
              onClick={handleChildClick}
            >
              Add
            </button>
          )}

          <button
            onClick={handleParentClick}
            className="bg-transparent w-[45%] text-[#2B4CC4] border-[#2B4CC4] border-solid border-[2px] p-[0.5em] px-[1em] md:px-[2.5em] rounded-full text-[1.05rem] font-[500] mt-[1em]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-card")
  );
}
