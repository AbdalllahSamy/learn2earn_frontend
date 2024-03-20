import React, { useEffect, useState } from "react";
import GroupItem from "./GroupItem";
import axios from "../../../../api/axios";
import Loading from "../../../Custom Components/Loading";
import filterIcon from "../../../../assets/Teacher/common/filterIcon.svg";
import SearchComponent from "../../../Layout/SearchComponent";
import setAddGroupPortal from "../../common/AddGroupCard";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { TiPlusOutline } from "react-icons/ti";
import SecondarySearchComponent from "../../../Layout/SecondarySearchComponent";
import AddGroupCard from "../../common/AddGroupCard";

export default function StudentGroups() {
  const [groupsData, setGroupsData] = useState(null);
  const [addGroupPortal, setAddGroupPortal] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const handleDeleteGroup = (deletedCode) => {
    const updatedGroupsData = groupsData.filter(
      (group) => group.code !== deletedCode
    );
    setGroupsData(updatedGroupsData);
  };

  function handleClosePortalAddGroup(param = false) {
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
    setAddGroupPortal(false);
  }

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData.accessToken;
    console.log("running");
    axios
      .get("/teacher/group/manage", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => {
        setGroupsData(res.data.data);
        console.log(res);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [isAdded]); //discuss dependency array rendering the toaster twice with mina

  if (!groupsData) {
    return <Loading className="w-full" color="#2B4CC4" />;
  }
  if (groupsData.length === 0) {
    return (
      <div className="text-center text-[2rem]">
        You have not created any groups yet
      </div>
    );
  }

  console.log(groupsData);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-[1em]">
        <button className="bg-[#F4F4F4] text-[#ABABAB] font-[500] flex items-center px-[2em] rounded-full gap-[10px] text-[1.2rem] py-[0.3em]">
          <img src={filterIcon} alt="filter-icon" />
          Filter
        </button>
        <div className="flex items-center gap-[10px]">
          <div
            onClick={() => {
              setAddGroupPortal((prev) => !prev);
            }}
            className="p-[0.5em] cursor-pointer rounded-full bg-[#F4F4F4]"
          >
            <TiPlusOutline size={24} color="#2B4CC4" />
          </div>
          <SecondarySearchComponent />
        </div>
      </div>
      {groupsData.map((item, index) => {
        return (
          <div key={item.code} className="flex flex-col w-full">
            <GroupItem
              maxStudents={item.max_students}
              numOfStudents={item.sum_students}
              code={item.code}
              name={item.name}
              key={item.code}
              handleDeleteGroup={handleDeleteGroup}
            />
          </div>
        );
      })}
      <div>
        {addGroupPortal && (
          <AddGroupCard
            handleClosePortal={handleClosePortalAddGroup}
            setIsAdded={setIsAdded}
          />
        )}
      </div>
    </div>
  );
}
