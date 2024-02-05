import React from "react";
import { Outlet } from "react-router-dom";
import { useCheckValidation } from "../../hooks/useCheckValidation";
export default function StudentLayoutPage() {
  useCheckValidation("student");
  return (
    <div className="mt-[5em]">
      <h1>Student Layout here</h1>
      <Outlet />
    </div>
  );
}
