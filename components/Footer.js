import Image from "next/image";
import React from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import Clock from "../public/assets/clock.svg";
import Phone from "../public/assets/phone.svg";

function Footer() {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-t">
      <div className="flex items-center">
        <GiAirplaneDeparture size={70} className="text-blue-700" />
        <h1 className="pl-6 text-blue-700 text-[30px]">TechCation</h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <Image className="mr-2" src={Clock} alt="/" />
          <h2 className="p-2 text-xl text-gray-400">8a-5p</h2>
        </div>
        <div className="hidden md:flex items-center px-6">
          <Image className="mr-2" src={Phone} alt="/" />
          <h2 className="p-2 text-xl text-gray-400">1-800-123-4567</h2>
        </div>
      </div>
      <button>Book A Trip</button>
    </div>
  );
}

export default Footer;
