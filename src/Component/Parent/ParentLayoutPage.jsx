import React from "react";
import { Outlet } from "react-router-dom";
import { useCheckValidation } from "../../hooks/useCheckValidation";
export default function ParentLayoutPage() {
  useCheckValidation("parent");
  return (
    <div>
      <h1>Parent Layout here</h1>
      <Outlet />
    </div>
  );
}
