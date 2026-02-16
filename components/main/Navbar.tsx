import Image from "next/image";
import React from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        
        {/* Empty space on left (logo removed) */}
        <div className="w-[100px]"></div>

        {/* Navigation Menu - Centered */}
        <div className="w-[550px] h-full flex flex-row items-center justify-center">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/" className="cursor-pointer hover:text-purple-400 transition">
              Home
            </Link>
            <a href="#about" className="cursor-pointer hover:text-purple-400 transition">
              About
            </a>
            <a href="#projects" className="cursor-pointer hover:text-purple-400 transition">
              Projects
            </a>
            <a 
              href="/resume" 
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Resume
            </a>
            <a href="#contact" className="cursor-pointer hover:text-purple-400 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-5">
          <a 
            href="https://linkedin.com/in/duy-khuong-541320212/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <RxLinkedinLogo className="text-gray-300 w-6 h-6" />
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaGithub className="text-gray-300 w-6 h-6" />
          </a>
          <a 
            href="mailto:kd23132@seas.upenn.edu"
            className="hover:scale-110 transition-transform"
          >
            <FaEnvelope className="text-gray-300 w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;