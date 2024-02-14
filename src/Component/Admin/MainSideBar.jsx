import React, { useContext, useEffect, useState } from "react";
import { navBarContext } from "../../context/openNavBar";

export default function MainSideBar({ children }) {
  const openNav = useContext(navBarContext).openNav;
  const setOpenNavFunc = useContext(navBarContext).setOpenNav;
  const [customState, setCustomState] = useState(false);

  useEffect(() => {
    if (openNav) {
      // do nothing
    }
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
        openNav ? "w-[100vw] p-[2em]" : "hidden-sidebar w-[240px]"
      } p-[1em] sidebar top-auto res-height `}
    >
      {children}
    </div>
  );
}
