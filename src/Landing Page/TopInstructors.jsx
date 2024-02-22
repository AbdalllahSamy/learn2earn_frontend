import React from "react";

import instAvatar1 from "../assets/Landing/instructor-avatar-1.png";
import instAvatar2 from "../assets/Landing/instructor-avatar-2.png";
import instAvatar3 from "../assets/Landing/instructor-avatar-3.png";
import badgeInstSection from "../assets/Landing/topBadge.svg";
import { Link } from "react-router-dom";

export default function TopInstructors() {
  return (
    <section className="py-[3em] lg:py-[10em] mt-[2em] relative z-[4] bg-white flex justify-between">
      <div className="container-landing w-full mx-auto flex items-center justify-between flex-col-reverse xl:flex-row gap-[30px]">
        <div className="left-side flex flex-col w-full xl:w-[45%] relative text-center gap-[30px]">
          <img
            className="absolute rounded-full hidden lg:block full-center z-[1]"
            src={badgeInstSection}
            width={150}
            height={150}
            alt=""
          />
          <div className="absolute w-[145px] hidden lg:block h-[140px] bg-white rounded-full full-center"></div>
          <div className="flex items-center justify-center">
            <div className="card-instructor flex  flex-col items-center gap-[20px] w-full p-[2em] rounded-tl-[29px] rounded-tr-[108px] rounded-bl-[108px] rounded-br-[29px] border border-solid border-black border-opacity-25 shadow-md ">
              <img src={instAvatar1} className="max-w-[200px]" alt="" />
              <h1>Darlene Robertson</h1>
              <p className="text-[2rem]">Science Teacher</p>
            </div>
          </div>
          <div className="flex items-center flex-col lg:flex-row justify-between gap-[30px]">
            <div className="card-instructor flex flex-col xl:max-w-[400px] items-center gap-[20px] w-full p-[2em] rounded-tl-[29px] rounded-tr-[108px] rounded-bl-[108px] rounded-br-[29px] border border-solid border-black border-opacity-25 shadow-md ">
              <img src={instAvatar2} className="max-w-[200px]" alt="" />
              <h1>Maximilian</h1>
              <p className="text-[2rem]">English Teacher</p>
            </div>
            <div className="card-instructor flex flex-col xl:max-w-[400px] items-center gap-[20px] w-full p-[2em] rounded-tl-[108px] rounded-tr-[29px] rounded-br-[108px] rounded-bl-[29px] border border-solid border-black border-opacity-25 shadow-md ">
              <img src={instAvatar3} className="max-w-[200px]" alt="" />
              <h1>Sara Mohamed</h1>
              <p className="text-[2rem]">Arabic Teacher</p>
            </div>
          </div>
        </div>
        <div className="right-side w-full xl:w-[43%] flex flex-col gap-[20px]">
          <h1 className="text-center text-[3rem]">
            <span className="text-[#7882FF] font-normal">Meet</span> <br /> Our{" "}
            <span className="underline">Top</span>{" "}
            <span className="text-[#7882FF] font-black">Teachers</span>
          </h1>
          <p className="text-[2rem] text-center">
            Enjoy seamless collaboration tools designed to enhance communication
            and interaction between educators and students.
          </p>
          <p className="text-[1.5rem] text-center font-bold">
            Our platform brings together a community of inspiring teachers
            dedicated to your academic success.
          </p>
          <Link to={"/register"} className="landing_login_button text-center text-black rounded-full my-[2em] mx-auto block mt-[1em] bg-[#FFFD82] font-bold px-[3.5em] w-full lg:w-fit text-[1.4rem] py-[0.5em]">
            Join now
          </Link>
        </div>
      </div>
    </section>
  );
}
