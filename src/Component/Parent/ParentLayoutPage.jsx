import React from "react";
import { Outlet } from "react-router-dom";
import { useCheckValidation } from "../../hooks/useCheckValidation";
export default function ParentLayoutPage() {
  useCheckValidation("parent");
  return (
    <div className="main-layout">
      <div className="flex">
        <Outlet />
      </div>
    </div>
  );
}
