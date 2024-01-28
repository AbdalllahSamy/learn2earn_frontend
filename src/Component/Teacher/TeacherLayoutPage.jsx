import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useCheckValidation } from "../../hooks/useCheckValidation";
import useChangeTitle from "../../hooks/useChangeTitle";

export default function TeacherLayoutPage() {
  useCheckValidation("teacher");

  return (
    <div>
      <h1>Teacher layout here</h1>
      <Outlet />
    </div>
  );
}
