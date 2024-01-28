import React from "react";
import { ThreeCircles } from "react-loader-spinner";
export default function Loading() {
  return (
    // classes temp for now until I did the main layout structure.
    <div className="h-[100vh]">
      <ThreeCircles />
    </div>
  );
}
