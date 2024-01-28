import React from "react";
import { Outlet } from "react-router-dom";
import { useCheckValidation } from "../../hooks/useCheckValidation";

export default function AdminLayoutPage() {
  useCheckValidation("admin");
  return (
    <div>
      <h1>Admin layout here</h1>
      <Outlet />
    </div>
  );
}
