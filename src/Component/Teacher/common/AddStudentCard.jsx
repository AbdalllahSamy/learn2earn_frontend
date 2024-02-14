import React, { useState } from "react";
import { createPortal } from "react-dom";
import axios from "../../../api/axios";
import toast, { Toaster } from "react-hot-toast";

export default function AddStudentCard({ handleClosePortal }) {
  const [studentCode, setStudentCode] = useState("");

  const handleParentClick = () => {
    // Do something when clicked on the parent
    handleClosePortal(false);
  };

  const handleChildClick = (event) => {
    event.stopPropagation(); // Prevent the event from reaching the parent
    // Do something when clicked on a child
    if (!studentCode) return;

    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData.accessToken;

    axios
      .post(
        "/teacher/student/manage",
        { code: studentCode },
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      )
      .then((res) => {
        // Assuming the response data should be stored in userData state
        handleClosePortal({
          type: "success",
          message: res.data.message
        });
      })
      .catch((error) => {
        handleClosePortal({
          type: "error",
          message: error.response.data.message,
        });
        console.error("Error fetching data:", error);
      });
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
        className="bg-[#F4F4F4] flex flex-col gap-[20px] md:py-[3em] md:px-[2em] py-[1em] px-[0.5em] text-center full-center-fixed w-[95%] md:w-[500px] overflow-hidden text-black button-shadow relative rouned-lg md:rounded-[40px] "
        onClick={preventParentClick}
      >
        <h3 className="text-[1.5em] font-[600] w-[90%] md:max-w-[80%] mx-auto">
          Please enter student code that you want to add{" "}
        </h3>

        <input
          value={studentCode}
          onChange={(e) => setStudentCode(e.target.value)}
          className="w-[90%] md:max-w-[80%] mx-auto bg-[#e6e6e6] rounded-lg p-[1em] mt-[1em] border-none"
          type="text"
          placeholder="Enter Student Code"
        />
        <div className="flex flex-row-reverse w-[100%] md:max-w-[90%] justify-around items-center mx-auto">
          <button
            disabled={!studentCode}
            onClick={handleChildClick}
            className="bg-[#2B4CC4] w-[45%] text-white p-[0.5em] px-[1em] md:px-[2.5em] rounded-full text-[1.05rem] font-[500] mt-[1em] button-shadow"
          >
            Submit
          </button>
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
