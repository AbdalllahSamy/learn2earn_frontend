import React, { useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import premiumSvg from "../../../assets/Teacher/common/bgTeacherPremium.svg";
import crownSvg from "../../../assets/Teacher/common/crown.svg";
import axios from "../../../api/axios";
import defaultAvatarMale from "../../../assets/defualtAvatarMale.jpg";
import defaultAvatarFemale from "../../../assets/defaultAvatarFemale.jpg";
import Loading from "../../Custom Components/Loading";
import DeleteStudentCard from "../common/DeleteStudentCard";
export default function TeacherTable({
  renderDeletePortalBool,
  toggleDeletePortal,
  checkSelectedUsers,
}) {
  const [students, setStudents] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [realTimeRefresh, setRealTimeRefresh] = useState(false);

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("auth"));
    const token = authData.accessToken;
    // Fetch data from the API
    axios
      .get("/teacher/student/manage", {
        headers: {
          Authorization: `Bearer ${token} `,
        },
      })
      .then((res) => {
        console.log(res);
        setStudents(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    checkSelectedUsers(selectedUsers.length);
    if (realTimeRefresh) {
      // Assuming students is an array of objects with an 'id' property
      setStudents((prevStudents) =>
        prevStudents.filter((student) => !selectedUsers.includes(student.id))
      );
      setSelectedUsers([]);
      setRealTimeRefresh(false);
    }
  }, [realTimeRefresh, selectedUsers]);

  if (!students || students.length === 0) {
    return (
      <div className="res-height flex items-start py-[5em] justify-center">
        <Loading color="#2b4cc4" size={20} />
      </div>
    );
  }

  return (
    <div className="rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="text-white">
              <th className="py-2 px-4 border-b bg-[#2b4cc4] font-[500]">
                Name
              </th>
              <th className="py-2 px-4 border-b bg-[#2b4cc4] font-[500]">
                Email
              </th>
              <th className="py-2 px-4 border-b bg-[#2b4cc4] font-[500]">
                Phone
              </th>
              <th className="py-2 px-4 border-b bg-[#2b4cc4] font-[500]">
                Age
              </th>
              <th className="py-2 px-4 border-b bg-[#2b4cc4] font-[500]">
                Quizzes
              </th>
              <th className="py-2 px-4 border-b bg-[#2b4cc4] font-[500]">
                Answers
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.code}
                style={
                  student.premium
                    ? {
                        backgroundImage: `url(${premiumSvg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }
                    : { background: "white" }
                }
              >
                <td className="py-2 px-4 border-b font-[500]">
                  <div className="flex items-center gap-[20px]">
                    <input
                      onChange={() => {
                        setSelectedUsers((prev) => {
                          if (prev.includes(student.id)) {
                            return prev.filter((id) => id !== student.id);
                          }
                          return [...prev, student.id];
                        });
                      }}
                      type="checkbox"
                      name="select-box"
                      id="select-box"
                    />
                    <div className="relative flex gap-[10px]">
                      <div className="flex items-center">
                        <img
                          className="w-8 h-8 z-[1] min-w-[32px] min-h-[32px] max-w-[32px] max-h-[32px] rounded-full mr-2"
                          width={30}
                          height={30}
                          src={
                            student.profile_picture_url
                              ? student.profile_picture_url
                              : student.gender === "male"
                              ? defaultAvatarMale
                              : defaultAvatarFemale
                          }
                          alt="User"
                        />
                        {student.premium !== 0 && (
                          <img
                            className="absolute top-[-14px] left-[-10px]"
                            width={30}
                            height={30}
                            src={crownSvg}
                            alt="crown-svg"
                          />
                        )}
                      </div>
                    </div>
                    <span>{student.name}</span>
                  </div>
                </td>
                <td className="py-2 px-4 border-b font-[500]">
                  {student.email}
                </td>
                <td className="py-2 px-4 border-b font-[500]">
                  {student.phone}
                </td>
                <td className="py-2 px-4 border-b font-[500]">{student.age}</td>
                <td className="py-2 px-4 border-b font-[500]">
                  {student.quizzes}
                </td>
                <td className="py-2 px-4 border-b font-[500]">
                  {student.answers}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {renderDeletePortalBool && (
        <DeleteStudentCard
          ids={selectedUsers}
          handleClosePortal={toggleDeletePortal}
          realTimeRefresh={setRealTimeRefresh}
        />
      )}
    </div>
  );
}
