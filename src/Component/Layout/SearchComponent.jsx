import React from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchComponent() {
  return (
      <div className="bg-white hidden md:flex h-fit md:w-[300px] input-border py-[0.6em] px-[0.5em] flex gap-[10px] items-center rounded-full ">
        <CiSearch size={20} />
        <input type="text" placeholder="Search..." className="w-full h-full" />
      </div>
  );
}
