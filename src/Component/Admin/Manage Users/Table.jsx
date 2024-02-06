import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import styles from "../Admin-common.module.css";
import { FaSort } from "react-icons/fa";
import AdminCard from "../common/AdminCard";
import stylesTable from "./table.module.css";
const data = Array.from({ length: 30 }, () => ({
  name: faker.internet.userName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  coins: faker.number.int({ min: 100, max: 1000 }),
  userType: ["User", "Admin", "Parent", "Teacher"][
    Math.floor(Math.random() * 4)
  ],
  active: faker.datatype.boolean() ? "Yes" : "No",
  verify: faker.datatype.boolean() ? "Yes" : "No",
  premium: faker.datatype.boolean() ? "Yes" : "No",
  joined: faker.date.past().getFullYear(),
}));

export default function Table() {
  // Generate an array of 30 rows of fake data

  const [sortField, setSortField] = useState(null);
  const [sortedData, setSortedData] = useState([...data]);
  const [showPortal, setShowPortal] = useState(null);

  function closePortal() {
    setShowPortal(false);
  }

  useEffect(() => {
    const sortArray = (type) => {
      const sortProperty = type;
      if (
        sortField === "active" ||
        sortField === "verify" ||
        sortField === "premium"
      ) {
        const sorted = [...sortedData].sort((a, b) => {
          if (a[sortProperty] === "Yes") {
            return 1;
          }
          if (a[sortProperty] === "No") {
            return -1;
          }
          return 0;
        });

        // Assuming you have a state variable to store the sorted data
        setSortedData(sorted);
      } else {
        const sorted = [...sortedData].sort((a, b) => {
          if (a[sortProperty] < b[sortProperty]) {
            return -1;
          }
          if (a[sortProperty] > b[sortProperty]) {
            return 1;
          }
          return 0;
        });
        setSortedData(sorted);
      }
    };

    if (sortField) {
      sortArray(sortField);
    }
    // You may change this to the appropriate property to sort initially
  }, [data, sortField]);

  return (
    <>
      <table
        className={`table-auto ${stylesTable["res-table"]} text-xs min-w-[80vw] max-w-[90vw] md:min-w-[100%] md:max-w-[100%] button-shadow rounded-lg mx-auto block md:inline-table overflow-x-scroll`}
      >
        <thead>
          <tr>
            <th className="px-[2em] font-[500] ">Name</th>
            <th className="p-2 font-[500] header-color">Email</th>
            <th className="p-2 font-[500] header-color">Phone</th>
            <th
              onClick={() => {
                setSortField("coins");
              }}
              className="p-2 font-[500] header-color cursor-pointer"
            >
              <div className="flex items-center">
                Coins <FaSort />
              </div>
            </th>
            <th
              onClick={() => {
                setSortField("userType");
              }}
              className="p-2 font-[500] cursor-pointer header-color"
            >
              <div className="flex items-center">
                Type <FaSort />
              </div>
            </th>
            <th
              onClick={() => {
                setSortField("active");
              }}
              className="p-2 font-[500] header-color cursor-pointer"
            >
              <div className="flex items-center">
                Active <FaSort />
              </div>
            </th>
            <th
              onClick={() => {
                setSortField("verify");
              }}
              className="p-2 font-[500] header-color cursor-pointer"
            >
              <div className="flex items-center">
                Verify <FaSort />
              </div>
            </th>
            <th
              onClick={() => {
                setSortField("premium");
              }}
              className="p-2 font-[500] header-color cursor-pointer"
            >
              <div className="flex items-center">
                Premium <FaSort />
              </div>
            </th>
            <th
              onClick={() => {
                setSortField("joined");
              }}
              className="p-2 font-[500] header-color cursor-pointer"
            >
              <div className="flex items-center">
                Joined <FaSort />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              <td className="px-[2em]">{row.name}</td>
              <td className="p-2">{row.email}</td>
              <td className="p-2">{row.phone}</td>
              <td className="p-2">{row.coins}</td>
              <td className="p-2">{row.userType}</td>
              <td className="p-2">
                <button
                  onClick={() => {
                    setShowPortal({
                      type: "active",
                      default: row.active === "No" ? 1 : 0,
                      show: true,
                    });
                  }}
                  className={`${
                    row.active === "Yes"
                      ? styles["active-button"]
                      : styles["de-active-button"]
                  }`}
                >
                  {row.active}
                </button>
              </td>
              <td className="p-2">
                <button
                  onClick={() => {
                    setShowPortal({
                      type: "verify",
                      default: row.verify === "No" ? 1 : 0,
                      show: true,
                    });
                  }}
                  className={`${
                    row.verify === "Yes"
                      ? styles["active-button"]
                      : styles["de-active-button"]
                  }`}
                >
                  {row.verify}
                </button>
              </td>
              <td className="p-2">
                <button
                  onClick={() => {
                    setShowPortal({
                      type: "premium",
                      default: row.premium === "No" ? 1 : 0,
                      show: true,
                    });
                  }}
                  className={`${
                    row.premium === "Yes"
                      ? styles["active-button"]
                      : styles["de-active-button"]
                  }`}
                >
                  {row.premium}
                </button>
              </td>
              <td className="px-[2em]">{row.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPortal && showPortal.show && (
        <AdminCard
          type={showPortal.type}
          defaultState={showPortal.default}
          closePortal={closePortal}
        />
      )}
    </>
  );
}
