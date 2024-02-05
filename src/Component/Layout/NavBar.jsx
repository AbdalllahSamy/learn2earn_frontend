import React, { useContext } from "react";
import { PiListBold } from "react-icons/pi";
import logo from "../../assets/Learn2Earn.svg";
import SearchComponent from "./SearchComponent";
import { ShowIcons } from "../../context/ShowIconsOnly";

export default function NavBar({ children }) {
  const toggleShowIconsOnly = useContext(ShowIcons).toggleShowIconsOnly;
  return (
    <div className="navbar-color fixed pr-[1em] w-full flex items-center justify-between">
      <div className="flex items-center gap-[40px]">
        <div className="logo flex items-center gap-[20px]">
          <PiListBold className="cursor-pointer" onClick={()=>{toggleShowIconsOnly()}} size={25} />
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
