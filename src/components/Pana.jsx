import React from "react";
import pana from "../assets/pana.png";
const Pana = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-10 py-5 mb-10 gap-4 md:gap-40">
      <img src={pana} alt="pana" className="w-[35%] mb-4 md:mb-0" />
      <div className="flex flex-col justify-center items-start px-4 md:px-0 w-full md:w-[50%] lg:w-[40%]">
        <h1 className="font-bold text-5xl text-neutral-600 mb-4 leading-tight">
          How to design your site footer like we did
        </h1>
        <p className="font-medium mb-8 leading-relaxed">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <button className="px-6 bg-green-500 py-4 text-white font-medium rounded-md hover:scale-100 transition-all hover:bg-green-700 border-none">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Pana;
