import React from "react";

export default function Contact() {
  return (
    <section className="container-landing overflow-x-hidden mt-[2em] z-[4] bg-[#B7D3FF] xl:bg-white flex justify-between">
      <div className="w-full contact-parent-padding flex flex-col items-center gap-[50px]">
        <div className="contact relative w-full flex flex-col xl:flex-row justify-between items-center bg-[#B7D3FF] p-[4em] rounded-xl">
          <div className="text-content text-center xl:text-left w-full xl:max-w-[40%] px[0.5em]">
            <h1 className="font-bold">
              Have any <span className="text-[#FFFD82]">question</span> ? send
              us a message now
            </h1>
            <p className="text-[1.5rem]">
              Our platform brings together a community of inspiring teachers
              dedicated to your academic success.
            </p>
          </div>
          <form className="xl:absolute w-full xl:w-fit right-0 text-white top-[-60%] flex flex-col contact-form rounded-[43px] gap-[40px]  text-[2rem]">
            <div className="flex flex-col z-[2] bg-[#1E1E1E] p-[1em] rounded-[43px] contact-form gap-[40px]">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border-b bg-transparent"
                id=""
              />
              <input
                type="text"
                name="name"
                placeholder="Email"
                className="border-b bg-transparent"
                id=""
              />

              <input
                type="text"
                name="name"
                placeholder="Phone"
                className="border-b bg-transparent"
                id=""
              />
              <input
                type="text"
                name="name"
                placeholder="Messages"
                className="border-b bg-transparent"
                id=""
              />
              <button className="rounded-full bg-[#FFFD82] text-black w-fit px-[2.5em] py-[0.5em] mx-auto text-[1.5rem] font-bold">
                Submit
              </button>
            </div>
            <div className="hidden xl:block mask-white absolute bg-white rounded-[43px] z-[1] w-full h-full left-[-13px] top-[13px]"></div>
          </form>
        </div>
      </div>
    </section>
  );
}
