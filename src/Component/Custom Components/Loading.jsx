import React from "react";
import { PulseLoader } from "react-spinners";
export default function Loading({ color = "white", size = 10, className = "" }) {
  const classExtra = 'flex items-center justify-center ' + className;
  return (
    <div className={classExtra}>
      <PulseLoader size={size} color={color} />
    </div>
  );
}
