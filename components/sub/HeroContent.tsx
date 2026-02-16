"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center items-center text-center">
        
        {/* Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Engineering Portfolio
          </h1>
        </motion.div>

        {/* Main Greeting */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[900px] w-auto h-auto"
        >
          <span className="text-center">
            Hi there! I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Duy Khuong
            </span>
          </span>
          <span className="text-center text-5xl whitespace-nowrap">
            Welcome to my engineering portfolio
          </span>
        </motion.div>

        {/* Subtitle - Education (One Line) */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-gray-300 my-3 max-w-[900px] text-center leading-relaxed"
        >
          Pursuing M.S. in Mechanical Engineering and Applied Mechanics
          <br />
          @ <span className="text-purple-400 font-semibold whitespace-nowrap">University of Pennsylvania</span>
        </motion.p>

        {/* Status with Blur Effect and Custom Emoji Image */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="group relative my-3 cursor-default flex items-center gap-3"
        >
          <div className="text-lg text-gray-400 blur-sm group-hover:blur-none transition-all duration-300 flex items-center gap-3">
            <span className="font-semibold text-cyan-400">Status:</span> 
            <span>Open to any opportunities</span>
            <Image 
              src="/emoji_beggar2.png" 
              alt="emoji_beggar" 
              width={40} 
              height={40}
              className="inline-block"
            />
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 mt-8"
        >
          <a
            href="#projects"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg hover:scale-105 transition-transform"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="py-3 px-6 border-2 border-purple-500 text-center text-white cursor-pointer rounded-lg hover:bg-purple-500/20 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
