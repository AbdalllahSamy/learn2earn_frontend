import React, { useState } from "react";
import MainSideBar from "../../Admin/MainSideBar";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { FaCalendar } from "react-icons/fa6";
import { PiExamFill } from "react-icons/pi";
import { BsAwardFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import DropDown from "../../../Common/DropDown";
import { PiStudentFill } from "react-icons/pi";

export default function TeacherSideBar() {
  const [customState] = useState(false);
  // Define the helper function
  function getClassName(isActive) {
    return `no-underline ${isActive ? "text-[#2A7BE4]" : "text-[#5d6e82]"}`;
  }

  return (
    <MainSideBar>
      <ul className="flex flex-col gap-[15px] p-0">
        <NavLink
          className={({ isActive }) => getClassName(isActive)}
          to="."
          end
        >
          <li className={`flex gap-[10px]`}>
            <MdDashboard size={25} />
            {!customState && "Dashboard"}
          </li>
        </NavLink>

        <DropDown
          title={"Student"}
          IconItem={PiStudentFill}
          items={[
            {
              title: "Manage",
              link: "manage",
              Icon: null,
            },
            {
              title: "Groups",
              link: "groups",
              Icon: null,
            },
          ]}
          showIconState={customState}
        />

        <NavLink
          className={({ isActive }) => getClassName(isActive)}
          to="/events"
          end
        >
          <li className={`flex gap-[10px]`}>
            <MdEmojiEvents size={25} />
            {!customState && "Events"}
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => getClassName(isActive)}
          to="/schedule"
          end
        >
          <li className={`flex gap-[10px]`}>
            <FaCalendar size={20} />
            {!customState && "Schedule"}
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) => getClassName(isActive)}
          to="/exams"
          end
        >
          <li className={`flex gap-[10px]`}>
            <PiExamFill size={25} />
            {!customState && "Exams"}
          </li>
        </NavLink>
      </ul>

      {/* Pages */}
      <div className={`title-bar flex items-center py-[1em] gap-[5px]`}>
        {!customState && <p className="mb-[0] opacity-[0.7]">Premium</p>}
        <div className="h-[1.5px] w-full opacity-[0.3] bg-[#5d6e82] "></div>
      </div>

      <ul className="p-0 flex flex-col gap-[15px]">
        <NavLink
          className={({ isActive }) => getClassName(isActive)}
          to="/lucky"
          end
        >
          <li className={`flex gap-[10px]`}>
            <BsAwardFill size={25} />
            {!customState && "Lucky"}
          </li>
        </NavLink>

        <NavLink
          className={({ isActive }) => getClassName(isActive)}
          to="/groups"
          end
        >
          <li className={`flex gap-[10px]`}>
            <MdGroups size={25} />
            {!customState && "Groups"}
          </li>
        </NavLink>
      </ul>
      
    </MainSideBar>
  );
}
