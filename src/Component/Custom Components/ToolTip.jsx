import React, { useState } from "react";

const Tooltip = ({ children, title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <span
        className={`absolute hidden group-hover:block top-12 right-0 ${
          hovered ? "opacity-100" : "opacity-0"
        } bg-[#edf2f9f5] rounded-xl p-1.5 whitespace-nowrap transition-opacity ease-in-out duration-500`}
      >
        {title}
      </span>
    </div>
  );
};

export default Tooltip;
