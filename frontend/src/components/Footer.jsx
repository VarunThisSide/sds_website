'use client'

import Link from "next/link";
import { useState } from "react";

export default function Footer() {

  const [email,setEmail] = useState("");
  const [placeholder,setPlaceholder] = useState("Email Address")

  return (
    <footer className="relative overflow-hidden footer-background backdrop-blur-xl text-white text-center justify-center items-center lg:text-left py-10 px-6 md:px-30 mt-12">
      <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row gap-8 md:gap-0 z-10 justify-center md:justify-between">
        {/*Club Info */}
        <div>
          <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
            SDS CLUB
          </div>
          <p className="mt-2 text-gray-300">Society for Tech Enthusiasts</p>
        </div>

      <div className="flex flex-row justify-between px-25 md:justify-center md:gap-20 md:px-0">
        {/* Explore */}
        <div>
          <h3 className="font-semibold text-white">Explore</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li className="hover:text-gray-50"><Link href="#">Resources</Link></li>
            <li className="hover:text-gray-50"><Link href="#">Blog</Link></li>
            <li className="hover:text-gray-50"><Link href="#">Documents</Link></li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h3 className="font-semibold text-white">Menu</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li className="hover:text-gray-50"><Link href="/Home">Home</Link></li>
            <li className="hover:text-gray-50"><Link href="/About">About</Link></li>
            <li className="hover:text-gray-50"><Link href="#">Contact</Link></li>
          </ul>
        </div>
      </div>

        {/* Join Us */}
        <div className="flex flex-wrap max-w-[250px] mx-auto md:mx-0 justify-center items-center md:items-start md:justify-start">
          <h3 className="font-semibold text-white md:mb-1 mb-2 pl-2.5 block">Join us</h3>
          <div className='flex rounded-xl mb-4 relative text-xs w-full mx-auto lg:mx-0'>
            <input
              type="email"
              placeholder={placeholder}
              className="w-full px-3 py-1.5 text-lg md:py-2 md:px-4 md:text-base pr-[4.8rem] rounded-full bg-white/10 text-white placeholder-white/50 font-medium backdrop-blur-md border border-white/20 focus:outline-none focus:ring-1 focus:ring-white/50 shadow-lg transition-all duration-100"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}/>
            <button
              className="bg-cyan-600 text-white text-base px-4 right-0 rounded-full absolute active:scale-95 transition-transform h-full hover:bg-cyan-500 duration-200 hover:cursor-pointer"
              onClick={(e)=>{
                setPlaceholder("Done");
                setEmail("");
              }}>
              Sign Up
            </button> 
          </div>

          <div className="flex w-full space-x-4 justify-center items-center lg:justify-start lg:items-start">
            {/* Instagram */}
            <a href="https://www.instagram.com/sds.bitm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="bg-gray-800 p-2 rounded-full">
              <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/><path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/society-for-data-science-bit-mesra/posts/?feedView=all" target="_blank" className="bg-gray-800 p-2 rounded-full">
              <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" viewBox="0 0 32 32"><path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path></svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/people/Society-for-Data-Science-BIT-Mesra/100063931007042/" target="_blank" className="bg-gray-800 p-2 rounded-full">
              <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8 text-sm z-10">
        © 2024 By Enative. All Rights Reserved.
      </div>
    </footer>
  );
}
