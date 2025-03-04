import React from "react";
import Image from "next/image";
import DownloadCV from "./DownloadCV";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center h-auto md:h-[349px] mt-10 mb-14">
      <div className="text-center md:text-left mt-4 md:mt-0">
        <h1 className="text-2xl md:text-[38px] font-bold md:leading-[48px]">
          <span className="hidden md:block">
            Hi👋, <br />
            My name is <br />
          </span>
          <span className="md:hidden">
            Hi👋, My name is <br />
          </span>
          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text text-transparent">
            Ajay Khan
          </span>
          <br />
          <span>{"{ "}</span>
          Turning ideas into code
          <span>{" }"}</span>
        </h1>
        <DownloadCV />
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] rounded-full h-[200px] w-[200px] md:h-[349px] md:w-[349px] flex justify-center items-center">
          <Image
            src={"/images/heroPhoto.jpeg"}
            alt="Profile Photo"
            height={333}
            width={333}
            className="rounded-full grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
