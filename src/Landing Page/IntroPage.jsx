import React from "react";
import landingGirlImg from "../assets/Landing/girlLanding.png";
import subPhoto1 from "../assets/Landing/sub-photo-1.png";
import subPhoto2 from "../assets/Landing/sub-photo-2.png";
import subPhoto3 from "../assets/Landing/sub-photo-3.png";
import subPhoto4 from "../assets/Landing/sub-photo-4.png";
import { Link } from "react-router-dom";

export default function IntroPage() {
  return (
    <section className="bg-landingPage py-[7em]">
      <div className=" top-side flex container-landing mx-auto flex-col lg:flex-row items-center  justify-between py-[6em]">
        <div className="left-side w-full lg:w-[50%]">
          <h1 className="font-black landingpage-text text-[2.5rem] mb-[1em]">
            Empower Your <span className="text-[#B173F9]">Education</span> In A
            Unique way.
          </h1>
          <p className="text-[1.5rem] lg:text-[2rem] landingpage-text">
            Engage in our diverse educational programs led by passionate
            teachers, and as you expand your knowledge, you'll also earn
            rewards.
          </p>
          <Link to={"/register"} className="landing_login_button text-black rounded-full my-[2em] mx-auto block text-center lg:inline-block mt-[1em] bg-[#FFFD82] font-bold px-[3.5em] w-full lg:w-fit text-[1.4rem] py-[0.5em]">
            Join now
          </Link>
        </div>
        <div className="right-side h-fit hidden lg:block relative w-[35%] mx-auto lg:mx-0 ">
          <div className="overflow-hidden relative w-fit">
            <img src={landingGirlImg} alt="" />
            {/* <div className="bg-[white] h-[100px] bottom-[-10px] right-[-10px] w-[50%] max-w-[350px] rounded-[29px] absolute z-[2]"></div> */}
          </div>
          <img
            className="absolute z-[2] top-0 left-[-40px]"
            src={subPhoto1}
            alt=""
          />

          <img
            className="absolute z-[2] bottom-[-50px] right-[-100px] w-[70%] max-w-[350px]"
            src={subPhoto2}
            alt=""
          />
          <img
            className="absolute z-[2] top-[-30px] w-[30%] right-[-20px]"
            src={subPhoto3}
            alt=""
          />
          <img
            className="absolute z-[2] bottom-[-30px] w-[60%] left-[-50px]"
            src={subPhoto4}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col container-landing relative mx-auto gap-4 lg:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row gap-[20px] justify-between w-full lg:w-[46%]">
          <div
            style={{ margin: 0 }}
            className="bg-white rounded-lg flex flex-col justify-between w-full lg:w-[43%] text-center py-[0.8em] px-[1em]"
          >
            <p style={{ margin: 0 }} className="text-[#4C6CA6] font-[700]">
              +150 Lessons
            </p>
            <p
              style={{ margin: 0 }}
              className="text-[1.2rem] text-[#2E2E2E] font-[500]"
            >
              Check the latest lessons
            </p>
          </div>
          <div
            style={{ margin: 0 }}
            className="bg-white rounded-lg flex flex-col justify-between w-full lg:w-[43%] text-center py-[0.8em] px-[1em]  "
          >
            <p style={{ margin: 0 }} className="text-[#4C6CA6] font-[700]">
              24 hour Learning
            </p>
            <p
              className="text-[1.2rem] text-[#2E2E2E] font-[500]"
              style={{ margin: 0 }}
            >
              Join the class at any time
            </p>
          </div>
        </div>
        <div className="flex items-center flex-col relative md:flex-row  gap-[20px] justify-between w-full lg:w-[46%]">
          <div
            style={{ margin: 0 }}
            className="bg-white rounded-lg flex flex-col justify-between w-full lg:w-[43%] text-center py-[0.8em] px-[1em] "
          >
            <p style={{ margin: 0 }} className="text-[#4C6CA6] font-[700]">
              Without lemitations
            </p>
            <p
              className="text-[1.2rem] text-[#2E2E2E] font-[500]"
              style={{ margin: 0 }}
            >
              For online learning
            </p>
          </div>
          <div
            style={{ margin: 0 }}
            className="bg-white rounded-lg flex flex-col justify-between w-full lg:w-[43%] text-center py-[0.8em] px-[1em] "
          >
            <p style={{ margin: 0 }} className="text-[#4C6CA6] font-[700]">
              +20 Subjects
            </p>
            <p
              className="text-[1rem] text-[#2E2E2E] font-[500]"
              style={{ margin: 0 }}
            >
              Different Subjects Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
