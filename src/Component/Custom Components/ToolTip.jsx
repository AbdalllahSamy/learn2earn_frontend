import React from "react";

const Tooltip = ({ children, title }) => {
  return (
    <div className="flex items-center group relative">
      {children}
      {/* the group-hover property does not work when trying to set opacity, must look over later */}
      <span className="absolute hidden group-hover:block top-12 right-0 opacity-100 group-hover:opacity-0 bg-[#edf2f9f5] rounded-xl p-1.5 whitespace-nowrap transition-opacity ease-in-out duration-300">
        {title}
      </span>
    </div>
  );
};

export default Tooltip;
