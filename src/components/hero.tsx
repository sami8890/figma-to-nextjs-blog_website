import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-8 px-6 md:px-28">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold mt-8 md:mt-0">
          Lessons And insights
        </h1>
        <h2 className="text-4xl md:text-5xl xl:text-6xl text-green-500 mt-2">
          from 8 years
        </h2>
        <p className="text-sm md:text-base xl:text-lg mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <button className="flex justify-center items-center text-lg md:text-xl xl:text-2xl bg-green-500 h-12 md:h-[7vh] xl:h-[8vh] w-36 md:w-[10vw] xl:w-[12vw] rounded-lg text-white hover:bg-green-600 mt-6 mx-auto md:mx-0">
          Get started
        </button>
      </div>
      
      {/* Image Section */}
      <div className="flex justify-center mt-8 md:mt-0">
        <Image
          src="/web.png"
          alt="Desktop and smartphone app development"
          width={300}
          height={300}
          className="rounded-3xl md:w-[400px] md:h-[300px] xl:w-[500px] xl:h-[400px]"
        />
      </div>
    </div>
  );
}
