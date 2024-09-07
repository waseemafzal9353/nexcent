import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const Demo = () => {
  return (
    <div className="items-center text-center justify-center py-14 bg-slate-100 flex flex-col w-full">
      <div className="w-[40%] leading-tight py-4">
        <h1 className="text-7xl leading-snug">Pellentesque suscipit fringilla libero eu.</h1>
      </div>
      <div className="flex items-center justify-center gap-2 bg-green-600
       px-6 py-3 rounded-md hover:bg-green-800 cursor-pointer mt-4 transition-all">
        <button className="text-white text-lg">Get a Demo</button>{" "}
        <FaArrowRightLong className="text-white pt-1" />
      </div>
    </div>
  );
};

export default Demo;
