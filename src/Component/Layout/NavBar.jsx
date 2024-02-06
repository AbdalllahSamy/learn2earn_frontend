import React, { useContext, useState } from "react";
import { PiListBold } from "react-icons/pi";
import logo from "../../assets/Learn2Earn.svg";
import SearchComponent from "./SearchComponent";
import { navBarContext } from "../../context/openNavBar";

export default function NavBar({ children }) {
  const openNavBarState = useContext(navBarContext).setOpenNav;
  return (
    <div className="fixed custom-container flex items-center justify-between bg-[#edf2f9f5] w-full">
      <div className="flex items-center gap-[40px]">
        <div className="logo flex items-center gap-[20px]">
          <PiListBold
            onClick={() => openNavBarState((prev) => !prev)}
            className="cursor-pointer drop-down-icon"
            size={25}
          />
          <div className="flex gap-[10px] items-center">
            <img src={logo} alt="Learn2Earn" width={25} height={25} />
            <div style={{ lineHeight: "8px" }} className="flex flex-col h-fit">
              <h1 className="text-[1.2rem] font-[800] m-0 text-[#2E83FF]">
                LEARN2EARN
              </h1>
              <p className="text-[0.8rem] mb-0 italic text-[#024FA9] font-black">
                EDUCATION PLATFORM
              </p>
            </div>
          </div>
        </div>
        <SearchComponent />
      </div>
      {children}
    </div>
  );
}
