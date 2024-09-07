import React from "react";
import cardData from '../data/cardData'
import Card from "./Card";
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-neutral-600 font-bold text-4xl">
          Manage your entire community
        </h1>
        <h1 className="text-neutral-600 font-bold text-4xl mb-2">in a single system</h1>
        <p className="text-neutral-600 text-md">Who is Nextcent suitable for?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center 
      items-center gap-10 md:gap-28 px-10 py-4">
        {cardData.map((data)=>(
            <Card data={data}/>
        ))}
      </div>
    </div>
  );
};

export default About;
