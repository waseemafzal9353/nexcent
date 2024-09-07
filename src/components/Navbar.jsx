import React, { useState } from "react";
import logo from "../assets/Logo.png";
import "boxicons/css/boxicons.min.css";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* // drop-shadow-md */}
      <header
        className="flex justify-between items-center px-8 py-6 md:px-32
       bg-neutral-200
        
        "
      >
        <a href="#">
          <img
            src={logo}
            alt=""
            className="w-full max-w-[10rem] xl:max-w-[12rem] h-auto hover:scale-105 transition-all"
          />
        </a>
        <ul className="hidden xl:flex justify-center items-center gap-5">
          <li
            className="text-zinc-900 cursor-pointer text-lg
           p-2 text-md hover:bg-green-600 hover:text-white transition-all rounded-md"
          >
            Home
          </li>
          <li
            className="text-zinc-900 cursor-pointer text-lg 
          p-2 text-md hover:bg-green-600 hover:text-white transition-all rounded-md"
          >
            Service
          </li>
          <li
            className="text-zinc-900 cursor-pointer text-lg 
          p-2 text-md hover:bg-green-600 hover:text-white transition-all rounded-md"
          >
            Feature
          </li>
          <li
            className="text-zinc-900 cursor-pointer text-lg
           p-2 text-md hover:bg-green-600 hover:text-white transition-all rounded-md"
          >
            Product
          </li>
          <li
            className="text-zinc-900 cursor-pointer text-lg 
          p-2 text-md hover:bg-green-600 hover:text-white transition-all rounded-md"
          >
            Testimonial
          </li>
          <li className="text-zinc-900 cursor-pointer text-lg p-2 text-md hover:bg-green-600 hover:text-white transition-all rounded-md">
            FAQs
          </li>
        </ul>
        <div className="gap-8 justify-center items-center hidden xl:flex ">
          <p
            className="text-green-600 p-2 text-lg cursor-pointer
        hover:bg-green-600 hover:text-white transition-all hover:rounded-md"
          >
            Login
          </p>
          <p
            className="text-white bg-green-600 p-2 
        rounded-md text-lg cursor-pointer hover:bg-neutral-200
         hover:text-green-600 transition-all"
          >
            Sign up
          </p>
        </div>
        <LuMenu
          className="xl:hidden block text-3xl cursor-pointer text-green-600 right-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div
          className={`absolute flex flex-col xl:hidden w-[50%] top-24 right-0
            items-center gap-6 text-lg transform transition-transform bg-transparent
          ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li
            className="w-full text-center p-4 transition-all cursor-pointer list-none
            hover:bg-green-600 hover:text-white hover:rounded-s-lg text-lg"
          >
            Home
          </li>
          <li
            className="w-full text-center p-4 transition-all cursor-pointer list-none
            hover:bg-green-600 hover:text-white hover:rounded-s-lg text-lg"
          >
            Service
          </li>
          <li
            className="w-full text-center p-4 transition-all cursor-pointer list-none
            hover:bg-green-600 hover:text-white hover:rounded-s-lg text-lg"
          >
            Feature
          </li>
          <li
            className="w-full text-center p-4 transition-all cursor-pointer list-none
            hover:bg-green-600 hover:text-white hover:rounded-s-lg text-lg"
          >
            Product
          </li>
          <li
            className="w-full text-center p-4 transition-all cursor-pointer list-none
            hover:bg-green-600 hover:text-white hover:rounded-s-lg text-lg"
          >
            Testimonials
          </li>
          <li
            className="w-full text-center p-4 transition-all cursor-pointer list-none
            hover:bg-green-600 hover:text-white hover:rounded-s-lg text-lg"
          >
            FAQs
          </li>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
