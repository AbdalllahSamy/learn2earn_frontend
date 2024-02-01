import React from "react";
import { PulseLoader } from "react-spinners";
export default function Loading({ color = "white", size = 10 }) {
  return (
    <div className="flex items-center justify-center">
      <PulseLoader size={size} color={color} />
    </div>
  );
}
