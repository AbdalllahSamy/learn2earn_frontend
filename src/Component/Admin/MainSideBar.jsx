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

import { useLocation } from "react-router-dom";
import DropDown from "../../Common/DropDown";
import { ShowIcons } from "../../context/ShowIconsOnly";

export default function MainSideBar() {
  const showIconState = useContext(ShowIcons).showIconsOnly;
  const toggleShowState = useContext(ShowIcons).toggleHover;
  const onHover = useContext(ShowIcons).hovered;
  const location = useLocation();
  const [currentPath, setCurrentPath] = React.useState(location.pathname);

  const [customState, setCustomState] = useState(showIconState);

  useEffect(() => {
    if (!onHover)
    setCustomState(showIconState);
  }, [showIconState]);

  useEffect(() => {
    if (onHover) {
      setCustomState(false);
    } else {
      if (showIconState) {
        setCustomState(true);
      }
    }
  }, [onHover]);

  const padding = "h-[40px]";

  React.useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <div
      onMouseEnter={() => toggleShowState()}
      onMouseLeave={() => toggleShowState()}
      style={{ width: customState ? "80px" : "230px" }}
      className={`siderbar ${!onHover && showIconState ? "close-transition" : ""} py-[1em] px-[1.5em] top-[6em] min-h-[86vh] max-h-[86vh] overflow-y-scroll fixed`}
    >
      <li
        className={`${
          currentPath === "/admin" ? "text-[#2A7BE4]" : ""
        } flex gap-[10px]`}
      >
        <MdDashboard size={25} />
        {!customState && "Dashboard"}
      </li>

      {/* App */}
      <div className={`title-bar flex items-center ${padding} gap-[5px]`}>
        {!customState && <p className="mb-[0] opacity-[0.7]">App</p>}
        <div className="h-[1.5px] w-full opacity-[0.3] bg-[#5d6e82] "></div>
      </div>

      <ul className="p-0 flex flex-col gap-[15px]">
        <DropDown
          title={"Manage Users"}
          IconItem={MdManageAccounts}
          items={[{ title: "Users", link: "", Icon: RiUserStarFill }]}
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
      <div className={`title-bar flex items-center ${padding} gap-[5px]`}>
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

      <div className={`title-bar flex items-center ${padding} gap-[5px]`}>
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
