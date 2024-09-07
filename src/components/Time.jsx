import React from "react";
import rafiki from "../assets/rafiki.png";
const Time = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-10 py-5 mb-10">
      <img src={rafiki} alt="rafiki" className="w-[50%] mb-4 md:mb-0" />
      <div className="flex flex-col justify-center items-start px-4 md:px-0 w-full md:w-[50%] lg:w-[40%]">
        <h1 className="font-bold text-5xl text-neutral-600 mb-4 leading-tight">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className="font-medium mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="px-6 bg-green-500 py-4 text-white font-medium rounded-md hover:scale-100 transition-all hover:bg-green-700 border-none">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Time;
