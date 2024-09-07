import React from "react";
import images from "../images";
const Helping = () => {
  return (
    <div className="bg-slate-100 w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-72 py-10">
      <div className="flex flex-col justify-start items-start py-4">
        <h1 className="text-neutral-500 text-4xl leading-tight">
          Helping a local
        </h1>
        <h1 className="text-green-500 text-4xl leading-tight">
          business reinvent itself
        </h1>
        <p className="text-zinc-900 ">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
        <div className="flex flex-col items-start justify-center gap-16">
          <div className="flex gap-4">
            <img src={images.time_1} alt="" className="w-14" />
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-neutral-500 text-3xl font-bold">2,245,341</h1>
              <p className="text-neutral-500 text-xl">Members</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={images.time_2} alt="" className="w-14"/>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-neutral-500 text-3xl font-bold">46,328</h1>
              <p>Clubs</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-16">
          <div className="flex gap-4">
            <img src={images.time_3} alt="" className="w-14"/>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-neutral-500 text-3xl font-bold">828,826</h1>
              <p>Event Bookings</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={images.time_4} alt="" className="w-14"/>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-neutral-500 text-3xl font-bold">1,925,435</h1>
              <p>Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Helping;
