import React from "react";
import studentAvatar1 from "../assets/Landing/student-avatar-1.png";
import studentAvatar2 from "../assets/Landing/student-avatar-2.png";
import studentAvatar3 from "../assets/Landing/student-avatar-3.png";
import shape2 from "../assets/Landing/shape2.gif";
import styles from "./style.module.css";
import stuentCover from "../assets/Landing/student-cover.jpg";
export default function TopStudents() {
  return (
    <section
      style={{ paddingTop: "3em" }}
      className="overflow-hidden container-landing mt-[2em] sidebar relative z-[4] bg-[#edf2f8] flex justify-between"
    >
      <div className="flex flex-col w-full ">
        <h1 className="text-center mx-auto">
          Best Three{" "}
          <span className="text-[#7882FF] underline font-black">Students</span>
        </h1>
        <p className="text-[1.3rem] py-[2em] text-center">
          Here at Learn2Earn we take pride in our high-achieving students and
          encourage them to keep going
        </p>

        <div className="cards-container flex justify-center items-center gap-[2em] flex-wrap">
          <div className="student-card bg-white w-full lg:w-[48%] xl:w-[30%] rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src={stuentCover}
                alt=""
                className="h-[200px] rounded-2xl w-full"
              />

              <img
                src={studentAvatar1}
                width={100}
                height={100}
                className="rounded-full h-[100px] img-profile-res absolute horizontal-center bottom-[-30px]"
                alt=""
              />
            </div>
            <div className="pt-[2em] text-center">
              <div className="px-[1em]">
                <h1 className="font-bold">Ahmed Ali</h1>
                <p className="text-green-500 text-[1.2rem] font-[500]">
                  The Second
                </p>
                <div className="subs flex items-center justify-center flex-wrap gap-[10px]">
                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    3 Quizzes
                  </p>
                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    100 Lucky
                  </p>

                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    120 Answers
                  </p>

                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    1100 Coin
                  </p>
                </div>
                <div className="bio">
                  <p className="text-[1.2rem] my-[1em] text-center">
                    Ahmed Ali is a dedicated and high-achieving student at
                    Learn2Earn.
                  </p>
                </div>
              </div>
              <div style={{ borderTop: "2px solid #9499a0" }}>
                <button className="py-[1em] hover:bg-[#B173F9] hover:text-white w-full rounded-b-lg transition duration-300">
                  VIEW PROFILE
                </button>
              </div>
            </div>
          </div>
          <div className="student-card bg-white w-full lg:w-[48%] xl:w-[30%] rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src={stuentCover}
                alt=""
                className="h-[200px] rounded-2xl w-full"
              />

              <img
                src={studentAvatar2}
                width={100}
                height={100}
                className="rounded-full h-[100px] img-profile-res absolute horizontal-center bottom-[-30px]"
                alt=""
              />
            </div>
            <div className="pt-[2em] text-center">
              <div className="px-[1em]">
                <h1 className="font-bold">Sara Soliman</h1>
                <p className="text-green-500 text-[1.2rem] font-[500]">
                  The First
                </p>
                <div className="subs flex items-center justify-center flex-wrap gap-[10px]">
                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    5 Quizzes
                  </p>
                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    150 Lucky
                  </p>

                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    150 Answers
                  </p>

                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    1500 Coin
                  </p>
                </div>
                <div className="bio">
                  <p className="text-[1.2rem] my-[1em] text-center">
                    Sara Soliman is a dedicated and high-achieving student at
                    Learn2Earn.
                  </p>
                </div>
              </div>
              <div style={{ borderTop: "2px solid #9499a0" }}>
                <button className="py-[1em] hover:bg-[#B173F9] hover:text-white w-full rounded-b-lg transition duration-300">
                  VIEW PROFILE
                </button>
              </div>
            </div>
          </div>
          <div className="student-card bg-white w-full lg:w-[48%] xl:w-[30%] rounded-2xl overflow-hidden">
            <div className="relative">
              <img
                src={stuentCover}
                alt=""
                className="h-[200px] rounded-2xl w-full"
              />

              <img
                src={studentAvatar3}
                width={100}
                height={100}
                className="rounded-full h-[100px] img-profile-res absolute horizontal-center bottom-[-30px]"
                alt=""
              />
            </div>
            <div className="pt-[2em] text-center">
              <div className="px-[1em]">
                <h1 className="font-bold">Khaled Osama</h1>
                <p className="text-green-500 text-[1.2rem] font-[500]">
                  The Thrid
                </p>
                <div className="subs flex items-center justify-center flex-wrap gap-[10px]">
                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    4 Quizzes
                  </p>
                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    80 Lucky
                  </p>

                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    110 Answers
                  </p>

                  <p
                    style={{ margin: 0 }}
                    className="border-custom font-bold w-fit rounded-full px-[0.5em]"
                  >
                    900 Coin
                  </p>
                </div>
                <div className="bio">
                  <p className="text-[1.2rem] my-[1em] text-center">
                    Khaled is a dedicated and high-achieving student at
                    Learn2Earn.
                  </p>
                </div>
              </div>
              <div style={{ borderTop: "2px solid #9499a0" }}>
                <button className="py-[1em] hover:bg-[#B173F9] hover:text-white w-full rounded-b-lg transition duration-300">
                  VIEW PROFILE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img
        src={shape2}
        className="absolute bottom right-[-100px] bottom-[200px] w-[300px] h-[300px] opacity-[0.6]"
        alt=""
      />
      <div className="w-full flex flex-col items-center gap-[50px]">
        <h1>
          Empower your education Journey with us{" "}
          <span className="text-[#7882FF] underline">
            Our Top Student this Month
          </span>{" "}
        </h1>
        <div className="flex flex-col lg:flex-row-reverse items-start gap-[30px] justify-center">
          <div className="card-top-student mt-[5em] flex flex-col items-center relative w-[30%]">
            <p className="text-[1.2rem] text-center">
              Enjoy seamless collaboration tools designed to enhance
              communication and interaction between educators and students.
            </p>
            <div className="w-fit">
              <div className="overflow-hidden relative bg-red-400 py-[20em] px-[12em] rounded-[200px]">
                <img
                  src={studentAvatar3}
                  className="h-full left-0 object-cover top-0 w-full absolute max-w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card-top-student flex flex-col items-center relative w-[30%]">
            <div className="w-fit">
              <div className="overflow-hidden relative bg-red-400 py-[20em] px-[12em] rounded-[200px]">
                <img
                  src={studentAvatar2}
                  className="h-full left-0 object-cover top-0 w-full absolute max-w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card-top-student mt-[5em] flex flex-col items-center relative w-[30%]">
            <div className="w-fit">
              <div className="overflow-hidden relative bg-red-400 py-[20em] px-[12em] rounded-[200px]">
                <img
                  src={studentAvatar1}
                  className="h-full left-0 object-cover top-0 w-full absolute max-w-full"
                  alt=""
                />
              </div>
            </div>
            <p className="text-[1.2rem] text-center mt-[2em]">
              Our platform brings together a community of inspiring teachers
              dedicated to your academic success.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
