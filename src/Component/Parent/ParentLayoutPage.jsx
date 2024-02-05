import React from "react";
import { Outlet } from "react-router-dom";
import { useCheckValidation } from "../../hooks/useCheckValidation";
export default function ParentLayoutPage() {
  useCheckValidation("parent");
  return (
    <div className="mt-[5em]">
      <h1>Parent Layout here</h1>
      <Outlet />
    </div>
  );
}
