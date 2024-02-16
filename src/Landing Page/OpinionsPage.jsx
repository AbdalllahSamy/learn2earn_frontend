import React from "react";
import { motion } from "framer-motion";
import avatarRating1 from "../assets/Landing/ratingAvatar1.png";
import avatarRating2 from "../assets/Landing/ratingAvatar2.png";
import avatarRating3 from "../assets/Landing/ratingAvatar3.png";
import startsRating from "../assets/Landing/starsRating.svg";
import circleShape from "../assets/Landing/circleShape.svg";
import ratingIcon from "../assets/Landing/ratingIcon.svg";

export default function OpinionsPage() {
  return (
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
  );
}
