import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Caring = () => {
  return (
    <div className="flex items-center justify-center py-10 flex-col gap-52">
      <div className="flex flex-col items-center justify-center w-[35%] text-center">
        <h1 className="text-4xl text-neutral-500 mb-4">
          Caring is the new marketing
        </h1>
        <p className="text-lg text-neutral-500">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-10 w-[60%]">
        <div
          className="flex flex-col bg-slate-100 rounded-md 
        shadow-md w-full p-6 items-center justify-center gap-3 text-center"
        >
          <h2 className="text-2xl font-bold text-neutral-500">
            Creating Streamlined Safeguarding Processes with OneRen
          </h2>

          <div className="flex items-center justify-center gap-4 cursor-pointer hover:scale-110 transition-all">
            <h2 className="text-xl text-green-500 font-bold">Read More</h2>
            <FaArrowRightLong className="text-green-500" />
          </div>
        </div>
        <div
          className="flex flex-col bg-slate-100 rounded-md shadow-md w-full p-6
        items-center justify-center gap-3 text-center"
        >
          <h2 className="text-2xl font-bold text-neutral-500">
            What are your safeguarding responsibilities and how can you manage
            them?
          </h2>

          <div className="flex items-center justify-center gap-4 cursor-pointer hover:scale-110 transition-all">
            <h2 className="text-xl text-green-500 font-bold">Read More</h2>
            <FaArrowRightLong className="text-green-500" />
          </div>
        </div>
        <div
          className="flex flex-col bg-slate-100 rounded-md shadow-md w-full p-6
         items-center justify-center gap-3 text-center"
        >
          <h2 className="text-2xl font-bold text-neutral-500">
            Revamping the Membership Model with Triathlon Australia
          </h2>

          <div className="flex items-center justify-center gap-4 cursor-pointer hover:scale-110 transition-all">
            <h2 className="text-xl text-green-500 font-bold">Read More</h2>
            <FaArrowRightLong className="text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caring;
