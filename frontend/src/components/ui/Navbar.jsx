import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navItems = ["Home", "About", "Team", "Resources", "Me"];

  return (
    <nav className="w-full flex justify-between items-center px-8 py-20 bg-black text-white">
      {/* Logo */}
      <div className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
        SDS CLUB
      </div>

      {/* Center Nav Group with Single Border */}
      <div className="flex items-center border border-gray-500 rounded-full overflow-hidden">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="px-5 py-2  hover:text-cyan-300 transition duration-300 ease-in-out"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Sign Up Button (unchanged) */}
      <Link
        href="/signup"
        className="px-5 py-2 rounded-full border border-gray-500  hover:text-cyan-300 transition duration-300 ease-in-out"
      > 
        Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;
