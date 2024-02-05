import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useCheckValidation } from "../../hooks/useCheckValidation";
import MainSideBar from "./MainSideBar";
import { ShowIcons } from "../../context/ShowIconsOnly";
export default function AdminLayoutPage() {
  const showIcon = useContext(ShowIcons).showIconsOnly;
  useCheckValidation("admin");

  return (
    <div className="content-transition">
      <MainSideBar />
      <div
        style={{ marginLeft: showIcon ? "90px" : "230px" }}
        className={`mt-[5em] ${showIcon && " content-transition"}`}
      >
        <Outlet />
      </div>
    </div>
  );
}
