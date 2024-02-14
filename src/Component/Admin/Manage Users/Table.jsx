import React, { useEffect, useState } from "react";
import styles from "../Admin-common.module.css";
import { FaSort } from "react-icons/fa";
import AdminCard from "../common/AdminCard";
import stylesTable from "./table.module.css";
import toast, { Toaster } from "react-hot-toast";
export default function Table({ data }) {
  // Generate an array of 30 rows of fake data

  const [updatedUser, setUpdatedUser] = useState(null);
  if (!data) {
    return (
      <div className="res-height px-[1em]">
        <h1>No Data To Show</h1>
      </div>
    );
  }

  useEffect(() => {
    if (updatedUser) {
      toast.success("user updated successfully", {
        position: "top-right",
        duration: 4000,
        style: {
          backgroundColor: "#00FF0A",
          color: "white",
        },
        iconTheme: {
          primary: "white",
          secondary: "#00FF0A",
        },
      });

      const newData = sortedData.map((item) => {
        if (item.id === updatedUser.id) {
          item = updatedUser.data;
        }
        return item;
      });
      setSortedData([...newData]);
      setUpdatedUser(null);
    }
  }, [updatedUser]);

  useEffect(() => {
    if (data) setSortedData([...data]);
  }, [data]);

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
        sortField === "is_active" ||
        sortField === "verified_acc" ||
        sortField === "premium"
      ) {
        const sorted = [...sortedData].sort((a, b) => {
          if (a[sortProperty] === 1) {
            return 1;
          }
          if (a[sortProperty] === 0) {
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
      <div>
        <Toaster position="top-right" />
      </div>
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
                setSortField("is_active");
              }}
              className="p-2 font-[500] header-color cursor-pointer"
            >
              <div className="flex items-center">
                Active <FaSort />
              </div>
            </th>
            <th
              onClick={() => {
                setSortField("verified_acc");
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
            <tr key={row.id}>
              <td className="px-[2em]">{row.name}</td>
              <td className="p-2">{row.email}</td>
              <td className="p-2">{row.phone}</td>
              <td className="p-2">{row.coins}</td>
              <td className="p-2">{row.type_user}</td>
              <td className="p-2">
                <button
                  onClick={() => {
                    setShowPortal({
                      type: "active",
                      default: row.is_active === 0 ? 1 : 0,
                      show: true,
                      id: row.id,
                    });
                  }}
                  className={`${
                    row.is_active === 1
                      ? styles["active-button"]
                      : styles["de-active-button"]
                  }`}
                >
                  {row.is_active === 1 ? "Yes" : "No"}
                </button>
              </td>
              <td className="p-2">
                <button
                  onClick={() => {
                    setShowPortal({
                      type: "verify",
                      default: row.verified_acc === 0 ? 1 : 0,
                      show: true,
                      id: row.id,
                    });
                  }}
                  className={`${
                    row.verified_acc === 1
                      ? styles["active-button"]
                      : styles["de-active-button"]
                  }`}
                >
                  {row.verified_acc === 1 ? "Yes" : "No"}
                </button>
              </td>
              <td className="p-2">
                <button
                  onClick={() => {
                    setShowPortal({
                      type: "premium",
                      default: row.premium === 0 ? 1 : 0,
                      show: true,
                      id: row.id,
                    });
                  }}
                  className={`${
                    row.premium === 1
                      ? styles["active-button"]
                      : styles["de-active-button"]
                  }`}
                >
                  {row.premium === 1 ? "Yes" : "No"}
                </button>
              </td>
              <td className="px-[2em]">{row.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPortal && showPortal.show && (
        <AdminCard
          type={showPortal.type}
          defaultState={showPortal.default}
          closePortal={closePortal}
          id={showPortal.id}
          realTimeUpdate={setUpdatedUser}
        />
      )}
    </>
  );
}
