import React from "react";
import images from "../images";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full py-16 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        {/* Left section with logo and social icons, centered horizontally */}
        <div className="flex flex-col items-start text-start gap-4 lg:w-1/3 mx-auto lg:mx-0">
          <img src={images.logoWhite} alt="" className="w-40" />
          <p className="text-white">Copyright © 2020 Nexcent ltd.</p>
          <p className="text-white">All rights reserved</p>
          <div className="flex gap-4">
            <img src={images.insta} alt="" className="w-10 cursor-pointer hover:scale-100 transition-all" />
            <img src={images.dribble} alt="" className="w-10 cursor-pointer hover:scale-100 transition-all" />
            <img src={images.twitter} alt="" className="w-10 cursor-pointer hover:scale-100 transition-all" />
            <img src={images.youtube} alt="" className="w-10 cursor-pointer hover:scale-100 transition-all" />
          </div>
        </div>
        
        {/* Right section with links and input */}
        <div className="grid grid-cols-3 gap-8 lg:w-2/3">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-xl font-bold">Company</h1>
            <a href="#" className="text-white">About us</a>
            <a href="#" className="text-white">Blog</a>
            <a href="#" className="text-white">Contact us</a>
            <a href="#" className="text-white">Pricing</a>
            <a href="#" className="text-white">Testimonials</a>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-white text-xl font-bold">Support</h1>
            <a href="#" className="text-white">Help center</a>
            <a href="#" className="text-white">Terms of Service</a>
            <a href="#" className="text-white">Legal</a>
            <a href="#" className="text-white">Privacy policy</a>
            <a href="#" className="text-white">Status</a>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-white text-xl font-bold">Stay up to date</h1>
            <div className="relative flex">
              <input
                placeholder="Your email address"
                className="w-full h-10 px-4 bg-gray-500
                placeholder-white border border-none
                focus:outline-none focus:ring-2
                focus:ring-gray-500 rounded-lg"
                type="text"
              />
              <FiSend className="text-white text-lg absolute right-4 top-3 " />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
