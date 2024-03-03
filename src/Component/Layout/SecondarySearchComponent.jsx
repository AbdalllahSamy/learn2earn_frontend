import React from "react";
import { CiSearch } from "react-icons/ci";
const SecondarySearchComponent = () => {
  const searchBarColor = "bg-[#F4F4F4]";

  return (
    <div
      className={`${searchBarColor} flex rounded-[20px] h-[40px] px-4 w-[234px] flex-row justify-between items-center`}
    >
      <CiSearch color="grey" size={25} />

      <input
        type="text"
        className={`w-full ${searchBarColor} p-2 font-[500] `}
        placeholder="Search..."
      />
    </div>
  );
};

export default SecondarySearchComponent;
