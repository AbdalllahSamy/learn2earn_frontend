import React from "react";

export default function PremiumCard() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center w-full my-[1.2em] gap-[10px] justify-between bg-premium rounded-xl py-[1.4em] px-[0.8em]">
      <div className="flex flex-col text-white max-w-[80%]">
        <h3 className="font-black text-[1.4em]">
          Unlock the Power of Premium: Elevate Your Experience!
        </h3>
        <p style={{ margin: 0 }}>
          Get a new level of excellence with our premium section. Upgrade now to
          enjoy exclusive features
        </p>
      </div>
      <button className="bg-[#252446] max-w-[250px] text-white px-[1em] xl:px-[2em] text-[1.2rem] xl:text-[1.4rem] rounded-2xl py-[0.5em]">
        Go premium
      </button>
    </div>
  );
}
