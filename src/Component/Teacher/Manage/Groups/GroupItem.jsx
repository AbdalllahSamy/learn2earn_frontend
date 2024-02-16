import React, { useState } from "react";
import DeleteGroupCard from "../../common/DeleteGroupCard";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
    
export default function GroupItem({
  name = "Learn2Earn",
  maxStudents = 20,
  numOfStudents = 18,
  code = 1,
}) {
  const [deleteGroupPortal, setDeleteGroupPortal] = useState(false);

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

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[20px] p-[1em] md:p-[2em] bg-[#F4F4F4] rounded-3xl">
        <div className="w-full flex flex-col gap-[20px]">
          <div className="flex w-full max-w-[800px] justify-between">
            <h1 className="text-[1rem] md:text-[1.2rem]">Group name:</h1>
            <h1 className="text-[1rem] md:text-[1.2rem] text-[#777777]">
              {name}
            </h1>
          </div>
          <div className="flex w-full max-w-[800px] justify-between">
            <h1 className="text-[1rem] md:text-[1.2rem]">
              Maximum num of students::
            </h1>
            <h1 className="text-[1rem] md:text-[1.2rem] text-[#777777]">
              {maxStudents}
            </h1>
          </div>
          <div className="flex w-full max-w-[800px] justify-between">
            <h1 className="text-[1rem] md:text-[1.2rem]">Num of students:</h1>
            <h1 className="text-[1rem] md:text-[1.2rem] text-[#777777]">
              {numOfStudents}/{maxStudents}
            </h1>
          </div>
          <div className="flex w-full max-w-[800px] justify-between">
            <h1 className="text-[1rem] md:text-[1.2rem]">Code :</h1>
            <h1 className="text-[1rem] md:text-[1.2rem] text-[#777777]">
              {code}
            </h1>
          </div>
        </div>
        <div className="flex items-center mt-auto gap-[10px]">
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
