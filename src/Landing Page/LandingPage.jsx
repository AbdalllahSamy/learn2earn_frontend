import React from "react";
import landingGirlImg from "../assets/Landing/girlLanding.png";
import subPhoto1 from "../assets/Landing/sub-photo-1.png";
import subPhoto2 from "../assets/Landing/sub-photo-2.png";
import subPhoto3 from "../assets/Landing/sub-photo-3.png";
import subPhoto4 from "../assets/Landing/sub-photo-4.png";
import polygonImg from "../assets/Landing/ploygonCard.png";
import Learn2EarnCycle from "../assets/Landing/learn-earn-cycle.png";

import instAvatar1 from "../assets/Landing/instructor-avatar-1.png";
import instAvatar2 from "../assets/Landing/instructor-avatar-2.png";
import instAvatar3 from "../assets/Landing/instructor-avatar-3.png";
import badgeInstSection from "../assets/Landing/topBadge.svg";

import avatarRating1 from "../assets/Landing/ratingAvatar1.png";
import avatarRating2 from "../assets/Landing/ratingAvatar2.png";
import avatarRating3 from "../assets/Landing/ratingAvatar3.png";
import startsRating from "../assets/Landing/starsRating.svg";
import circleShape from "../assets/Landing/circleShape.svg";
import ratingIcon from "../assets/Landing/ratingIcon.svg";

import studentAvatar1 from "../assets/Landing/student-avatar-1.png";
import studentAvatar2 from "../assets/Landing/student-avatar-2.png";
import studentAvatar3 from "../assets/Landing/student-avatar-3.png";
import shape2 from "../assets/Landing/shape-2.svg";

import { motion } from "framer-motion";
export default function LandingPage() {
  return (
    <div className="min-h-[100vh]">
      <section className="bg-landingPage py-[5em]">
        <div className=" top-side flex container mx-auto flex-col lg:flex-row  justify-between py-[6em]">
          <div className="left-side w-full lg:w-[50%]">
            <h1 className="font-black landingpage-text text-[2.5rem] mb-[1em]">
              Empower Your <span className="text-[#B173F9]">Education</span> In
              A Unique way.
            </h1>
            <p className="text-[1.5rem] lg:text-[2rem] landingpage-text">
              Engage in our diverse educational programs led by passionate
              teachers, and as you expand your knowledge, you'll also earn
              rewards.
            </p>
            <button className="landing_login_button rounded-full my-[2em] mx-auto block lg:inline-block mt-[1em] bg-[#FFFD82] font-bold px-[3.5em] w-full lg:w-fit text-[1.4rem] py-[0.5em]">
              Join now
            </button>
          </div>
          <div className="right-side h-fit hidden lg:block relative w-[30%] mx-auto lg:mx-0 ">
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
        <div className="flex flex-col container mx-auto gap-4 lg:flex-row items-center justify-between">
          <div className="flex justify-between w-full lg:w-[46%]">
            <div
              style={{ margin: 0 }}
              className="bg-white rounded-lg flex flex-col justify-between w-[43%] text-center py-[0.8em] px-[1em] shadow-landingPage-card "
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
              className="bg-white rounded-lg flex flex-col justify-between w-[43%] text-center py-[0.8em] px-[1em] shadow-landingPage-card "
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
          <div className="flex items-center justify-between w-full lg:w-[46%]">
            <div
              style={{ margin: 0 }}
              className="bg-white rounded-lg flex flex-col justify-between w-[43%] text-center py-[0.8em] px-[1em] shadow-landingPage-card "
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
              className="bg-white rounded-lg flex flex-col justify-between w-[43%] text-center py-[0.8em] px-[1em] shadow-landingPage-card "
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
      <section className="py-[2em] mt-[2em] relative z-[4] bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row  items-center justify-between">
          <img
            src={Learn2EarnCycle}
            className="w-full max-w-[500px] lg:w-[48%]"
            alt=""
          />
          <div className="right-side-section-2 w-full lg:w-[48%] mt-[1em]">
            <h1 className="font-black landingpage-text text-[2rem] lg:text-[4rem] mb-[1em]">
              <span className="text-[#B173F9]">Empower</span> Your Education
              with Experienced Teachers
            </h1>
            <p className="text-[1.5rem] landingpage-text">
              Experience a revolutionary way to learn and earn simultaneously!
              At our online learning platform, discover a unique opportunity
              where your dedication to learning rewards you financially. Engage
              in our diverse educational programs led by passionate teachers.
            </p>
          </div>
        </div>
      </section>
      <section className="py-[2em] mt-[2em] relative z-[4] bg-white flex justify-between">
        <div className="container w-full mx-auto flex flex-col gap-[30px]">
          <h1 className="text-[4rem] font-black">
            Why <span className="underline">us?</span>
          </h1>
          <div className="flex flex-col gap-[20px] md:gap-[80px]">
            <div className="side-1 flex flex-col md:flex-row gap-[20px] items-center">
              <div className="card-why-us w-full md:w-[50%] relative overflow-hidden text-white linear-card-bg-1 p-[2em] flex flex-col justify-around max-w-[500px] h-[500px]">
                <h1 className="font-black">Empower</h1>
                <p className="text-[1.7rem]">
                  Unleash the power of our dynamic online platform, where
                  interactive courses and engaging content .
                </p>
                <p className="text-[1.5rem] font-black">
                  <span className="text-[2.5rem] text-graident-1">+200</span>{" "}
                  <br /> Courses
                </p>
                <img
                  className="absolute right-0 bottom-0 z-[1]"
                  src={polygonImg}
                  alt=""
                />
              </div>
              <div className="card-why-us w-full md:w-[50%] relative overflow-hidden linear-card-bg-2 p-[2em] text-black  flex flex-col justify-around max-w-[500px] h-[500px]">
                <h1 className="font-black">Connect</h1>
                <p className="text-[1.7rem]">
                  Our platform brings together a community of inspiring teachers
                  dedicated to your academic success.
                </p>
                <p className="text-[1.5rem] font-black">
                  <span className="text-[2.5rem] text-graident-2">+50</span>{" "}
                  <br /> Teachers
                </p>
                <img
                  className="absolute right-0 bottom-0 z-[1]"
                  src={polygonImg}
                  alt=""
                />
              </div>
            </div>
            <div className="side-1 w-full justify-end flex flex-col md:flex-row gap-[20px] items-center">
              <div className="card-why-us relative overflow-hidden linear-card-bg-1 p-[2em] text-white w-full md:w-[50%] flex flex-col justify-around max-w-[500px] h-[500px]">
                <h1 className="font-black">Earn</h1>
                <p className="text-[1.7rem]">
                  Transform education into an enriching experience! Gain
                  valuable insights while earning rewards
                </p>
                <p className="text-[1.5rem] font-black">
                  <span className="text-[2.5rem]">+$</span> <br />
                  Earnings
                </p>
                <img
                  className="absolute right-0 bottom-0 z-[1]"
                  src={polygonImg}
                  alt=""
                />
              </div>
              <div className="card-why-us relative overflow-hidden text-black linear-card-bg-2 p-[2em] w-full md:w-[50%] flex flex-col justify-around max-w-[500px] h-[500px]">
                <h1 className="font-black">Collaborate</h1>
                <p className="text-[1.7rem]">
                  Enjoy seamless collaboration tools designed to enhance
                  communication and interaction between educators and students.
                </p>
                <p className="text-[1.5rem] font-black">
                  <span className="text-[3.5rem] text-graident-2">∞</span>{" "}
                  <br /> Explore a diverse range of engaging learning
                  experiences
                </p>
                <img
                  className="absolute right-0 bottom-0 z-[1]"
                  src={polygonImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[10em] mt-[2em] relative z-[4] bg-white flex justify-between">
        <div className="container w-full mx-auto flex justify-between flex-col-reverse lg:flex-row gap-[30px]">
          <div className="left-side flex flex-col w-full lg:w-[48%] relative text-center gap-[30px]">
            <img
              className="absolute rounded-full hidden md:block full-center z-[1]"
              src={badgeInstSection}
              width={150}
              height={150}
              alt=""
            />
            <div className="absolute w-[145px] hidden md:block h-[140px] bg-white rounded-full full-center"></div>
            <div className="flex justify-center">
              <div class="card-instructor flex max-w-[400px] flex-col items-center gap-[20px] w-full p-[2em] rounded-tl-[29px] rounded-tr-[108px] rounded-bl-[108px] rounded-br-[29px] border border-solid border-black border-opacity-25 shadow-md ">
                <img src={instAvatar1} className="max-w-[200px]" alt="" />
                <h1>Darlene Robertson</h1>
                <p className="text-[2rem]">Arabic Teacher</p>
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row justify-between gap-[30px]">
              <div class="card-instructor flex flex-col max-w-[400px] items-center gap-[20px] w-full p-[2em] rounded-tl-[29px] rounded-tr-[108px] rounded-bl-[108px] rounded-br-[29px] border border-solid border-black border-opacity-25 shadow-md ">
                <img src={instAvatar2} className="max-w-[200px]" alt="" />
                <h1>Darlene Robertson</h1>
                <p className="text-[2rem]">Arabic Teacher</p>
              </div>
              <div class="card-instructor flex flex-col max-w-[400px] items-center gap-[20px] w-full p-[2em] rounded-tl-[29px] rounded-tr-[108px] rounded-br-[108px] rounded-bl-[29px] border border-solid border-black border-opacity-25 shadow-md ">
                <img src={instAvatar3} className="max-w-[200px]" alt="" />
                <h1>Darlene Robertson</h1>
                <p className="text-[2rem]">Arabic Teacher</p>
              </div>
            </div>
          </div>
          <div className="right-side w-full lg:w-[48%] flex flex-col gap-[20px]">
            <h1 className="text-center text-[3rem]">
              <span className="text-[#7882FF] font-normal">Meet</span> <br />{" "}
              Our <span className="underline">Top</span>{" "}
              <span className="text-[#7882FF] font-black">Instructors</span>
            </h1>
            <p className="text-[2rem] text-center">
              Enjoy seamless collaboration tools designed to enhance
              communication and interaction between educators and students.
            </p>
            <p className="text-[1.5rem] text-center font-bold">
              Our platform brings together a community of inspiring teachers
              dedicated to your academic success.
            </p>
            <button className="landing_login_button rounded-full my-[2em] mx-auto block mt-[1em] bg-[#FFFD82] font-bold px-[3.5em] w-full lg:w-fit text-[1.4rem] py-[0.5em]">
              Join now
            </button>
          </div>
        </div>
      </section>
      <section className="py-[10em] overflow-x-hidden mt-[2em] relative z-[4] bg-white flex justify-between">
        <div className="w-full flex flex-col gap-[50px]">
          <h1 className="text-center font-black z-[1]">
            What the learners & teachers of Learn2Earn said about us
          </h1>
          <img
            src={circleShape}
            className="absolute right-0 top-0 h-full w-[500px]"
            alt=""
          />

          <motion.div
            initial={{ x: "-100px" }}
            whileInView={{ x: "100px" }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="flex justify-between z-[1] gap-[50px]"
          >
            <div className="card-rating min-w-[400px] bg-[#e1d9f275] bg-opacity-[50%] px-[2em] py-[0.8em]  rounded-lg">
              <div className="flex items-start gap-[20px]">
                <img src={avatarRating1} alt="" />
                <div>
                  <h3>Darlene Robertson</h3>
                  <img src={startsRating} alt="" />
                </div>
              </div>
            </div>
            <div className="card-rating min-w-[400px] bg-[#e1d9f275] bg-opacity-[50%] px-[2em] py-[0.8em]  rounded-lg">
              <div className="flex items-start gap-[20px]">
                <img src={avatarRating1} alt="" />
                <div>
                  <h3>Darlene Robertson</h3>
                  <img src={startsRating} alt="" />
                </div>
              </div>
            </div>
            <div className="card-rating min-w-[400px] bg-[#e1d9f275] bg-opacity-[50%] px-[2em] py-[0.8em]  rounded-lg">
              <div className="flex items-start gap-[20px]">
                <img src={avatarRating1} alt="" />
                <div>
                  <h3>Darlene Robertson</h3>
                  <img src={startsRating} alt="" />
                </div>
              </div>
            </div>
            <div className="card-rating min-w-[400px] bg-[#e1d9f275] bg-opacity-[50%] px-[2em] py-[0.8em]  rounded-lg">
              <div className="flex items-start gap-[20px]">
                <img src={avatarRating1} alt="" />
                <div>
                  <h3>Darlene Robertson</h3>
                  <img src={startsRating} alt="" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100px" }}
            whileInView={{ x: "-100px" }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="flex justify-between z-[1] gap-[50px]"
          >
            <div className="card-rating min-w-[400px] bg-[#e1d9f275] bg-opacity-[50%] px-[2em] py-[0.8em]  rounded-lg">
              <div className="flex items-start gap-[20px]">
                <img src={avatarRating1} alt="" />
                <div>
                  <h3>Darlene Robertson</h3>
                  <img src={startsRating} alt="" />
                </div>
              </div>
            </div>
            <div className="card-rating min-w-[400px] bg-[#e1d9f275] bg-opacity-[50%] px-[2em] py-[0.8em]  rounded-lg">
              <div className="flex items-start gap-[20px]">
                <img src={avatarRating1} alt="" />
                <div>
                  <h3>Darlene Robertson</h3>
                  <img src={startsRating} alt="" />
                </div>
              </div>
            </div>
            <div className="card-rating min-w-[400px] bg-[#e1d9f275] bg-opacity-[50%] px-[2em] py-[0.8em]  rounded-lg">
              <div className="flex items-start gap-[20px]">
                <img src={avatarRating1} alt="" />
                <div>
                  <h3>Darlene Robertson</h3>
                  <img src={startsRating} alt="" />
                </div>
              </div>
            </div>
            <div className="card-rating min-w-[400px] bg-[#e1d9f275] bg-opacity-[50%] px-[2em] py-[0.8em]  rounded-lg">
              <div className="flex items-start gap-[20px]">
                <img src={avatarRating1} alt="" />
                <div>
                  <h3>Darlene Robertson</h3>
                  <img src={startsRating} alt="" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center gap-[10px] justify-center">
            <img src={ratingIcon} width={30} height={30} alt="" />
            <h3 style={{ margin: 0 }} className="text-center">
              4.89 Avarge rating of our users{" "}
            </h3>
          </div>
          <button className="landing_login_button rounded-full my-[2em] mx-auto block lg:inline-block mt-[1em] bg-[#FFFD82] font-bold px-[3.5em] w-fit lg:w-fit text-[1.4rem] py-[0.5em]">
            Join now
          </button>
        </div>
      </section>
      <section className="py-[10em] overflow-x-hidden mt-[2em] relative z-[4] bg-white flex justify-between">
        <img
          src={shape2}
          className="absolute right-0 top-0 h-full w-[200px]"
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
        </div>
      </section>
      <section className="py-[10em] overflow-x-hidden mt-[2em] relative z-[4] bg-white flex justify-between">
        <div className="w-full flex flex-col items-center gap-[50px]"></div>
      </section>
    </div>
  );
}
