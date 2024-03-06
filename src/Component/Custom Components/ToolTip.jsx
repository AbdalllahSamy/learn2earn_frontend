import React, { useState } from "react";

const Tooltip = ({ children, title }) => {
  const [hovered, setHovered] = useState(false);

  {
    /* color yet to be chosen */
  }
  // const toolTipColor = "bg-[#214269] ";
  const toolTipColor = "bg-black";
  return (
    <div
      className="flex items-center group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span
        className={`text-white shadow-xl border border-black absolute hidden group-hover:block top-12 right-0 ${
          hovered ? "opacity-100" : "opacity-0"
        } ${toolTipColor} rounded-xl p-1.5 whitespace-nowrap transition-opacity ease-in-out duration-500`}
      >
        {title}
      </span>
    </div>
  );
};

export default Tooltip;
