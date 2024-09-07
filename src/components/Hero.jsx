import React from "react";
import hero from "../assets/Illustration.png";
const Hero = () => {
  return (
    <div className="bg-neutral-200 flex flex-col md:flex-row 
    items-center justify-center w-full px-10 py-10">
      <div className="flex-1 flex-col flex items-center justify-center">
       <div className="text-left">
       <h1 className="text-neutral-600 text-5xl font-bold leading-tight mb-2">
          Lessons are insights
        </h1>
        <h1 className="text-green-600 text-4xl font-semibold mb-2">
          from 8 years
        </h1>
        <p className="text-sm mb-2">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-green-600 text-white
         py-2 px-5 rounded-sm shadow-lg hover:bg-green-700 transition duration-300">
          Register
        </button>
       </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={hero} alt="hero" className="hidden md:block w-[50%]" />
      </div>
    </div>
  );
};

export default Hero;
