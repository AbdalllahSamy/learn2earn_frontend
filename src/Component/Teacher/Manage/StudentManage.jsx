import React, { useEffect, useState } from "react";
import filterIcon from "../../../assets/Teacher/common/filterIcon.svg";
import addIcon from "../../../assets/Teacher/common/addIcon.svg";
import deleteIcon from "../../../assets/Teacher/common/deleteIcon.svg";
import TeacherTable from "./TeacherTable";
import AddStudentCard from "../common/AddStudentCard";
import toast, { Toaster } from "react-hot-toast";
export default function StudentManage() {
  const [addStudentPortal, setAddStudentPortal] = useState(false);
  const [canOpenDeletePortal, setCanOpenDeletePortal] = useState(false);
  const [deleteStudentsPortal, setDeleteStudentsPortal] = useState(false);

  const toggleDeletePortal = (param = false) => {
    if (param && param.type === "success") {
      toast.success(param.message, {
        position: "top-right",
        duration: 4000,
        style: {
          backgroundColor: "#00FF0A",
          color: "white",
        },
        iconTheme: {
          primary: "white",
          secondary: "#00FF0A",
        },
      });
    }
    if (param && param.type === "error") {
      toast.error(param.message, {
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
      });
    }
    setDeleteStudentsPortal((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      setAddStudentPortal(false);
      setDeleteStudentsPortal(false);
    };
  }, []);

  function handleClosePortal(param = false) {
    if (param && param.type === "success") {
      toast.success(param.message, {
        position: "top-right",
        duration: 4000,
        style: {
          backgroundColor: "#00FF0A",
          color: "white",
        },
        iconTheme: {
          primary: "white",
          secondary: "#00FF0A",
        },
      });
    }
    if (param && param.type === "error") {
      toast.error(param.message, {
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
      });
    }
    setAddStudentPortal(false);
  }

  function checkSelectedUsers(param) {
    console.log(param);
    if (param) {
      setCanOpenDeletePortal(true);
    } else setCanOpenDeletePortal(false);
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex flex-col w-full py-[0.5em]">
        <div className="flex flex-col sm:flex-row mb-[1em] items-center justify-between w-full">
          <h3 className="my-[0.5em] font-black">Students</h3>

          <div className="flex items-center gap-[10px]">
            <button className="bg-[#F4F4F4] text-[#ABABAB] font-[500] flex items-center px-[2em] rounded-full gap-[10px] text-[1.2rem] py-[0.3em]">
              <img src={filterIcon} alt="filter-icon" />
              Filter
            </button>
            <button
              onClick={() => {
                setAddStudentPortal((prev) => !prev);
              }}
            >
              <img src={addIcon} alt="add-icon" />
            </button>
            <button
              onClick={() => {
                canOpenDeletePortal && setDeleteStudentsPortal((prev) => !prev);
              }}
            >
              <img
                src={deleteIcon}
                className="button-shadow rounded-full"
                alt="delete-icon"
              />
            </button>
          </div>
        </div>
        <TeacherTable
          renderDeletePortalBool={deleteStudentsPortal}
          checkSelectedUsers={checkSelectedUsers}
          toggleDeletePortal={toggleDeletePortal}
        />
        {addStudentPortal && (
          <AddStudentCard handleClosePortal={handleClosePortal} />
        )}
      </div>
    </>
  );
}
