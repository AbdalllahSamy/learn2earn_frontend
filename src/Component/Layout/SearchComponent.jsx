import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchComponent() {
  return (
    <div className="bg-white search-component h-fit md:w-[300px] input-border  gap-[10px] overflow-hidden items-center rounded-full">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-full py-[0.6em] px-[1em]"
      />
      <button>
        <CiSearch
          color="white"
          className="bg-[#2B4CC4] h-full w-[85px] rounded-full px-[2em] py-[0.5em]"
          size={25}
        />
      </button>
    </div>
  );
}
