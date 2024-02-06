import React from "react";
import { Outlet } from "react-router-dom";
import { useCheckValidation } from "../../hooks/useCheckValidation";
import MainSideBar from "../Admin/MainSideBar";
export default function StudentLayoutPage() {
  useCheckValidation("student");
  return (
    <div className="main-layout">
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
}
