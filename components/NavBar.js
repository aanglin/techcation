import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-black/60">
      <ul className="hidden sm:flex px-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#gallery">Gallery</Link>
        </li>
        <li>
          <Link href="#deals">Availability</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="sm:hidden z-10 pl-2">
        <FaBars size={20} className="mr-4 cursor-pointer " />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <Link href="/">Home</Link>
          </li>
          <li className="text-2xl py-8">
            <Link href="#gallery">Gallery</Link>
          </li>
          <li className="text-2xl py-8">
            <Link href="#deals">Availability</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
