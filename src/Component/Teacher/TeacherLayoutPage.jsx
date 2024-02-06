import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useCheckValidation } from "../../hooks/useCheckValidation";

export default function TeacherLayoutPage() {
  useCheckValidation("teacher");

  return (
    <div className="main-layout">
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
}
