import React, { useEffect, useState } from "react";
import GroupItem from "./GroupItem";
import axios from "../../../../api/axios";
import Loading from "../../../Custom Components/Loading";
import filterIcon from "../../../../assets/Teacher/common/filterIcon.svg";
import SearchComponent from "../../../Layout/SearchComponent";
import setAddGroupPortal from "../../common/AddGroupCard";
import { TiPlusOutline } from "react-icons/ti";
import SecondarySearchComponent from "../../../Layout/SecondarySearchComponent";
import AddGroupCard from "../../common/AddGroupCard";
import { Toaster } from "react-hot-toast";

export default function StudentGroups() {
  const [groupsData, setGroupsData] = useState(null);
  const [addGroupPortal, setAddGroupPortal] = useState(false);
  const handleDeleteGroup = (deletedCode) => {
    const updatedGroupsData = groupsData.filter(
      (group) => group.code !== deletedCode
    );
    setGroupsData(updatedGroupsData);
  };

  async function handleClosePortalAddGroup() {
    setAddGroupPortal(false);
  }

  const handleGroupAdded = async () => {
    const newData = await fetchData();
    setGroupsData(newData.data.data);
  };

  async function fetchData() {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData.accessToken;
    return axios.get("/teacher/group/manage", {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    });
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        setGroupsData(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); //discuss dependency array rendering the toaster twice with mina

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

  return (
    <>
      <div>
        <Toaster />
      </div>
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
              onGroupAdded={handleGroupAdded}
            />
          )}
        </div>
      </div>
    </>
  );
}
