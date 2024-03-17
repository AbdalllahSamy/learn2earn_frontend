import React, { useState } from "react";
import DeleteGroupCard from "../../common/DeleteGroupCard";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { TbPencilPlus } from "react-icons/tb";
import axios from "../../../../api/axios";

export default function GroupItem({
  name = "Learn2Earn",
  maxStudents = 20,
  numOfStudents = 18,
  code = 1,
}) {
  const [deleteGroupPortal, setDeleteGroupPortal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [groupName, setGroupName] = useState(name);
  const [maxStudentsNum, setMaxStudentsNum] = useState(maxStudents);
  const [numberOfStudents, setNumOfStudents] = useState(numOfStudents);
  const [groupCode, setGroupCode] = useState(code);

  function handleClosePortalDeleteGroup(param = false) {
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
    setDeleteGroupPortal(false);
  }

  function toggleEditGroupItem() {
    setEditMode((prev) => !prev);
    console.log("done");
  }

  function itemUpdate() {
    setEditMode(false);
    axios.post("/teacher/group/manage", {});
  }

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex flex-col md:flex-row items-center mb-[1em] gap-[20px] p-[1em] md:p-[2em] bg-[#F4F4F4] rounded-3xl">
        <div className="w-full flex flex-col gap-[20px]">
          <div className="flex w-full max-w-[800px] justify-between">
            <h1 className="text-[1rem] md:text-[1.2rem]">Group name:</h1>
            <h1 className="text-[1rem] md:text-[1.2rem] text-[#777777]">
              {editMode ? (
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                />
              ) : (
                groupName
              )}
            </h1>
          </div>
          <div className="flex w-full max-w-[800px] justify-between">
            <h1 className="text-[1rem] md:text-[1.2rem]">
              Maximum num of students:
            </h1>
            <h1 className="text-[1rem] md:text-[1.2rem] text-[#777777]">
              {editMode ? (
                <input
                  type="number"
                  value={maxStudentsNum}
                  onChange={(e) => setMaxStudentsNum(e.target.value)}
                />
              ) : (
                maxStudentsNum
              )}
            </h1>
          </div>
          <div className="flex w-full max-w-[800px] justify-between">
            <h1 className="text-[1rem] md:text-[1.2rem]">Num of students:</h1>
            <h1 className="text-[1rem] md:text-[1.2rem] text-[#777777]">
              {numberOfStudents}/{maxStudentsNum}
            </h1>
          </div>
          <div className="flex w-full max-w-[800px] justify-between">
            <h1 className="text-[1rem] md:text-[1.2rem]">Code :</h1>
            <h1 className="text-[1rem] md:text-[1.2rem] text-[#777777]">
              {groupCode}
            </h1>
          </div>
        </div>
        <div className="flex items-center mt-auto gap-[10px]">
          {editMode ? (
            <>
              <button
                onClick={() => {
                  itemUpdate();
                }}
                className="flex align-bottom-imp mt-auto text-white rounded-full px-[2.5em] py-[0.5em] bg-[#2B4CC4]"
              >
                Done
              </button>
            </>
          ) : (
            <>
              <div className="bg-[#E0E0E0] rounded-full w-[42px] h-[41px] flex items-center justify-center">
                <button onClick={() => toggleEditGroupItem()}>
                  <TbPencilPlus
                    size={26}
                    color="#2B4CC4"
                    className="mb-[2px]"
                  />
                </button>
              </div>
              <button className="flex align-bottom-imp mt-auto rounded-full text-[#2B4CC4] bg-white px-[2.5em] py-[0.5em] ">
                Join
              </button>
              <button
                onClick={() => {
                  setDeleteGroupPortal((prev) => !prev);
                }}
                className="flex align-bottom-imp mt-auto text-white rounded-full px-[2.5em] py-[0.5em] bg-[#2B4CC4]"
              >
                Delete
              </button>
            </>
          )}

          {deleteGroupPortal && (
            <DeleteGroupCard
              handleClosePortal={handleClosePortalDeleteGroup}
              code={code}
            />
          )}
        </div>
      </div>
    </>
  );
}
