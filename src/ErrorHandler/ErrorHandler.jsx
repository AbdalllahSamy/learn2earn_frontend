import React from "react";
import { useRouteError } from "react-router-dom";
export default function ErrorHandler() {
  console.log("rendered");
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-[2rem] text-center font-black">
      {error ? <h1 className="text-[2rem]">{error.message}</h1> : "Lost"}
    </div>
  );
}
