"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navItems = ["Home", "About", "Team", "Resources", "Me"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-6 sm:px-8 bg-black text-white relative">
      {/* Logo */}
      <div className="text-3xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
        SDS CLUB
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center border border-gray-500 rounded-full overflow-hidden">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            className="px-5 py-2 hover:text-cyan-300 transition duration-300 ease-in-out"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Sign Up Button */}
      <Link
        href="/signup"
        className="hidden md:inline px-5 py-2 rounded-full border border-gray-500 hover:text-cyan-300 transition duration-300 ease-in-out"
      >
        Sign Up
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg border border-gray-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
        <div className={`absolute top-full left-0 w-full bg-black/20 backdrop-blur-md border-t border-gray-700 flex flex-col items-center gap-4 py-6 z-50 md:hidden transform transition-all duration-450 ease-in-out
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}>
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block px-4 py-2 hover:text-cyan-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/signup"
            className="px-4 py-2 rounded-full border border-gray-500 hover:text-cyan-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
    </nav>
  );
};

export default Navbar;
