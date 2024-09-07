import React from "react";
import images from "../images";
const Clients = () => {
  return (
    <div className="flex flex-col justify-center items-center py-8 px-6 w-full">
      <div className="flex flex-col">
        <h1 className="text-neutral-600 font-bold text-3xl items-center justify-center text-center mb-1 leading-tight">
          Our Clients
        </h1>
        <p className="text-neutral-500">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex justify-center items-center py-5 gap-10 xl:gap-40">
      <img src={images.company_1} alt="company_logo" className="w-12" />
      <img src={images.company_2} alt="company_logo" className="w-12" />
      <img src={images.company_3} alt="company_logo" className="w-12" />
      <img src={images.company_4} alt="company_logo" className="w-12" />
      <img src={images.company_5} alt="company_logo" className="w-12" />
      <img src={images.company_6} alt="company_logo" className="w-12" />
      <img src={images.company_7} alt="company_logo" className="w-12" />
      </div>
    </div>
  );
};

export default Clients;
