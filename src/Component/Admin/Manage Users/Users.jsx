import React from "react";
import Table from "./Table";
import styles from "../Admin-common.module.css";
import SearchComponent from "../../Layout/SearchComponent";
import { FaPlus } from "react-icons/fa";

export default function Users() {
  return (
    <div
      className={`bg-white ${styles["push-left"]} flex-grow sidebar ${styles["curve-shape"]} button-shadow`}
    >
      <div className="flex items-center justify-between p-[1em]">
        <h3>Users</h3>
        <div className="flex items-center md:gap-[20px] md:px-[2em]">
          <SearchComponent />
          <button className="button-shadow flex items-center gap-[5px] rounded px-[1em] py-[0.2em]">
            <FaPlus/> New
          </button>
          {/* <button className="button-shadow rounded px-[1em] py-[0.2em]">
            Filter
          </button> */}
        </div>
      </div>
      <Table />
    </div>
  );
}
