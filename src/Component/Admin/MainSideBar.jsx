import React, { useContext, useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { GiChest } from "react-icons/gi";
import { IoPlanet } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { HiCurrencyDollar } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { MdManageHistory } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { RiUserStarFill } from "react-icons/ri";
import { NavLink, Navigate } from "react-router-dom";
import DropDown from "../../Common/DropDown";
import { navBarContext } from "../../context/openNavBar";

export default function MainSideBar() {
  const openNav = useContext(navBarContext).openNav;
  const setOpenNavFunc = useContext(navBarContext).setOpenNav;
  const [customState, setCustomState] = useState(false);

  // Define the helper function
  function getClassName(isActive) {
    return `no-underline ${isActive ? "text-[#2A7BE4]" : "text-[#5d6e82]"}`;
  }

  useEffect(() => {
    console.log(openNav);
    if (openNav) console.log("nav should open");
  }, [openNav]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1080) {
        setOpenNavFunc(false);
      }
    });
  }, []);

  //
  return (
    <div
      className={`fixed bg-[#edf2f9f5] ${
        openNav ? "w-[100vw] p-[2em]" : "hidden-sidebar"
      } p-[1em] sidebar top-auto res-height `}
    >
      <NavLink className={({ isActive }) => getClassName(isActive)} to="." end>
        <li className={`flex gap-[10px]`}>
          <MdDashboard size={25} />
          {!customState && "Dashboard"}
        </li>
      </NavLink>

      {/* App */}
      <div className={`title-bar flex items-center py-[1em] gap-[5px]`}>
        {!customState && <p className="mb-[0] opacity-[0.7]">App</p>}
        <div className="h-[1.5px] w-full opacity-[0.3] bg-[#5d6e82] "></div>
      </div>

      <ul className="p-0 flex flex-col gap-[15px]">
        <DropDown
          title={"Manage Users"}
          IconItem={MdManageAccounts}
          items={[
            {
              title: "Users",
              link: "manage-users/users",
              Icon: RiUserStarFill,
            },
          ]}
          showIconState={customState}
        />
        <li className="flex gap-[10px]">
          <MdWorkspacePremium size={25} />
          {!customState && "Premiums"}
        </li>
        <li className="flex gap-[10px]">
          <GiChest size={25} />
          {!customState && "Lucky’s"}
        </li>
      </ul>

      <ul className="p-0 flex flex-col gap-[15px]">
        <DropDown
          title={"Manage Users"}
          IconItem={MdManageAccounts}
          items={[
            {
              title: "Users",
              link: "manage-users/users",
              Icon: RiUserStarFill,
            },
          ]}
          showIconState={customState}
        />
        <li className="flex gap-[10px]">
          <MdWorkspacePremium size={25} />
          {!customState && "Premiums"}
        </li>
        <li className="flex gap-[10px]">
          <GiChest size={25} />
          {!customState && "Lucky’s"}
        </li>
      </ul>

      <ul className="p-0 flex flex-col gap-[15px]">
        <DropDown
          title={"Manage Users"}
          IconItem={MdManageAccounts}
          items={[
            {
              title: "Users",
              link: "manage-users/users",
              Icon: RiUserStarFill,
            },
          ]}
          showIconState={customState}
        />
        <li className="flex gap-[10px]">
          <MdWorkspacePremium size={25} />
          {!customState && "Premiums"}
        </li>
        <li className="flex gap-[10px]">
          <GiChest size={25} />
          {!customState && "Lucky’s"}
        </li>
      </ul>

      <ul className="p-0 flex flex-col gap-[15px]">
        <DropDown
          title={"Manage Users"}
          IconItem={MdManageAccounts}
          items={[
            {
              title: "Users",
              link: "manage-users/users",
              Icon: RiUserStarFill,
            },
          ]}
          showIconState={customState}
        />
        <li className="flex gap-[10px]">
          <MdWorkspacePremium size={25} />
          {!customState && "Premiums"}
        </li>
        <li className="flex gap-[10px]">
          <GiChest size={25} />
          {!customState && "Lucky’s"}
        </li>
      </ul>

      

      {/* Pages */}
      <div className={`title-bar flex items-center py-[1em] gap-[5px]`}>
        {!customState && <p className="mb-[0] opacity-[0.7]">Pages</p>}
        <div className="h-[1.5px] w-full opacity-[0.3] bg-[#5d6e82] "></div>
      </div>

      <ul className="p-0 flex flex-col gap-[15px]">
        <li className="flex gap-[10px]">
          <IoPlanet size={25} />
          {!customState && "Landing Page"}
        </li>
        <li className="flex gap-[10px]">
          <RiTeamFill size={25} />
          {!customState && "Team"}
        </li>
        <li className="flex gap-[10px]">
          <HiCurrencyDollar size={25} />
          {!customState && "Pricing"}
        </li>
        <li className="flex gap-[10px]">
          <IoCall size={25} />
          {!customState && "Contact"}
        </li>
      </ul>

      {/* Admins */}

      <div className={`title-bar flex items-center py-[1em] gap-[5px]`}>
        {!customState && <p className="mb-[0] opacity-[0.7]">Admins</p>}
        <div className="h-[1.5px] w-full opacity-[0.3] bg-[#5d6e82] "></div>
      </div>

      <ul className="p-0 flex flex-col gap-[15px]">
        <li className="flex gap-[10px]">
          <MdManageAccounts size={25} />
          {!customState && "Manage Admins"}
        </li>
        <li className="flex gap-[10px]">
          <MdManageHistory size={25} />
          {!customState && "Show Activity"}
        </li>
        <li className="flex gap-[10px]">
          <IoIosRocket size={25} />
          {!customState && "App Wallets"}
        </li>
      </ul>
    </div>
  );
}
