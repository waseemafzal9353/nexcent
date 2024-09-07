import React from "react";
import images from "../images";
import { FaArrowRightLong } from "react-icons/fa6";

const Tim = () => {
  return (
    <div className="bg-slate-100 w-full flex flex-col md:flex-row py-8 gap-6 items-center justify-center">
      <div className="flex-1 flex items-center justify-center">
        <img src={images.tim} alt="" className="w-[50%] md:w-[35%] lg:w-[25%]" />
      </div>
      <div className="flex-1 flex flex-col items-start justify-center md:px-0 ">
        <div className="w-full md:w-[80%]">
          <p className="mb-4 text-neutral-500 text-base md:text-lg lg:text-xl">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <h2 className="mb-2 text-lg md:text-xl lg:text-2xl text-green-600">Tim Smith</h2>
          <p className="text-neutral-500">British Dragon Boat Racing Association</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 w-full md:w-[80%]">
          <div className="flex gap-4 md:gap-6 items-center flex-wrap">
            <img src={images.company_1} className="w-12 md:w-16" />
            <img src={images.company_2} className="w-12 md:w-16" />
            <img src={images.company_3} className="w-12 md:w-16" />
            <img src={images.company_4} className="w-12 md:w-16" />
            <img src={images.company_5} className="w-12 md:w-16" />
            <img src={images.company_6} className="w-12 md:w-16" />
          </div>
          <div className="flex items-center justify-center gap-3 hover:gap-6 transition-all cursor-pointer mt-4 md:mt-0">
            <p className="text-sm md:text-md text-green-500">Meet all customers</p>
            <FaArrowRightLong className="text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tim;
