import React, { useEffect, useState } from "react";
import filterIcon from "../../../assets/Teacher/common/filterIcon.svg";
import addIcon from "../../../assets/Teacher/common/addIcon.svg";
import deleteIcon from "../../../assets/Teacher/common/deleteIcon.svg";
import TeacherTable from "./TeacherTable";
import AddStudentCard from "../common/AddStudentCard";
import toast, { Toaster } from "react-hot-toast";
import DeleteStudentCard from "../common/DeleteStudentCard";
import ToolTip from "../../Custom Components/Tooltip";
export default function StudentManage() {
  const [addStudentPortal, setAddStudentPortal] = useState(false);
  const [deleteStudentsPortal, setDeleteStudentsPortal] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  function trackSelectedUsers(selectedUsers) {
    setSelectedUsers(selectedUsers);
  }

  function handleClickDeleteIcon() {
    if (selectedUsers.length > 0) {
      setDeleteStudentsPortal(true);
    }
  }

  function handleClosePortalDelete(param = false) {
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
    setDeleteStudentsPortal(false);
  }

  function handleClosePortalAdd(param = false) {
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
            <ToolTip title="Add Students">
              <button
                onClick={() => {
                  setAddStudentPortal((prev) => !prev);
                }}
              >
                <img src={addIcon} alt="add-icon" />
              </button>
            </ToolTip>
            <ToolTip title="Delete Students">
              <button onClick={handleClickDeleteIcon}>
                <img
                  src={deleteIcon}
                  className="button-shadow rounded-full"
                  alt="delete-icon"
                />
              </button>
            </ToolTip>
          </div>
        </div>
        <TeacherTable
          refresh={refresh}
          trackSelectedUsers={trackSelectedUsers}
          setRefresh={setRefresh}
        />
        {addStudentPortal && (
          <AddStudentCard handleClosePortal={handleClosePortalAdd} />
        )}
        {deleteStudentsPortal && (
          <DeleteStudentCard
            handleClosePortal={handleClosePortalDelete}
            ids={selectedUsers}
            setRefresh={setRefresh}
          />
        )}
      </div>
    </>
  );
}
