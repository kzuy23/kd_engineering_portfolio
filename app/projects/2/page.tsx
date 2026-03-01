"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const galleryImages = [
  { src: "/quadcopter/Ansys_simu1.png", alt: "ANSYS Simulation 1" },
  { src: "/quadcopter/Ansys_simu2.png", alt: "ANSYS Simulation 2" },
  { src: "/quadcopter/Cad_design.png", alt: "CAD Design" },
  { src: "/quadcopter/Final_integration.png", alt: "Final Integration" },
  { src: "/quadcopter/Raw_frame.png", alt: "Raw Carbon Fiber Frame" },
  { src: "/quadcopter/Wiring_diagram.png", alt: "Wiring Diagram" },
];

export default function QuadcopterProject() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="min-h-screen w-full bg-[#030014] relative">
      
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push("/projects")}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all hover:scale-105 shadow-lg group"
        >
          <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Projects</span>
        </button>
      </div>

      {/* Content */}
      <div className="pt-32 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Project Header */}
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-2 text-sm font-semibold bg-purple-500/20 text-purple-300 rounded-full mb-4">
              Robotics Project
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
              Quadcopter Design & Control
            </h1>

            <p className="text-xl text-gray-400">
              Intelligent Physical Systems | MECE 3080 Fall 2024
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            
            {/* Left Column - Gallery & Video */}
            <div className="space-y-6">

              {/* Photo Gallery */}
              <div 
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/30 bg-gray-900"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Main Image Display */}
                <div className="relative w-full h-full">
                  <Image
                    src={galleryImages[currentImageIndex].src}
                    alt={galleryImages[currentImageIndex].alt}
                    fill
                    className="object-contain p-4 transition-opacity duration-500"
                  />
                </div>

                {/* Thumbnail Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex gap-2 justify-center flex-wrap">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? "border-cyan-400 scale-110"
                            : "border-gray-600 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pause Indicator */}
                {isHovered && (
                  <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-white text-sm">
                    Paused
                  </div>
                )}
              </div>

              {/* Demo Video */}
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                  Flight Demonstration
                </h3>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group">
                  <video
                    id="quadcopter-video"
                    muted
                    preload="metadata"
                    className="w-full h-full cursor-pointer"
                    onClick={(e) => {
                      const video = e.currentTarget;
                      const playButton = document.getElementById('play-button-quadcopter');
                      if (video.paused) {
                        video.play();
                        if (playButton) playButton.classList.add('hidden');
                      } else {
                        video.pause();
                        if (playButton) playButton.classList.remove('hidden');
                      }
                    }}
                    onTimeUpdate={(e) => {
                      const video = e.currentTarget;
                      const progress = document.getElementById('progress-quadcopter');
                      if (progress) {
                        const percentage = (video.currentTime / video.duration) * 100;
                        progress.style.width = percentage + '%';
                      }
                    }}
                  >
                    <source src="/quadcopter/Flying_run.mp4#t=0.1" type="video/mp4" />
                  </video>
                  
                  <div 
                    id="play-button-quadcopter"
                    className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity"
                  >
                    <div className="bg-black/50 rounded-full p-4">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>

                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 cursor-pointer"
                    onClick={(e) => {
                      const video = document.getElementById('quadcopter-video') as HTMLVideoElement;
                      if (video) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const pos = (e.clientX - rect.left) / rect.width;
                        video.currentTime = pos * video.duration;
                      }
                    }}
                  >
                    <div 
                      id="progress-quadcopter"
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-3 text-center">
                  Watch the quadcopter navigate through obstacle courses
                </p>
              </div>


            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">

              {/* Project Overview */}
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                  Project Overview
                </h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Designed and built a custom carbon-fiber quadcopter with advanced flight control capabilities as the final project for MECE3080. The project required comprehensive integration of mechanical design, structural analysis, electronics assembly, and control systems tuning to achieve stable autonomous flight through challenging obstacles.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  My contributions included designing the frame structure in SolidWorks, running ANSYS simulations to identify and reinforce weak points in the carbon fiber frame, assembling all electronic components, and tuning PID control parameters on the Mamba F405 MK2 flight controller using MATLAB to achieve optimal flight stability and responsiveness.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                  Technical Skills Developed
                </h2>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Design using SolidWorks and assemble every component on the frame.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Flight simulation with external forces using ANSYS to identify and reinforce weak points in the frame structure.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      CNC machining for precision cutting of carbon fiber frames.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      PID tuning on Mamba F405 MK2 microcontroller for stable flight control and rapid response.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Key Results */}
              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                  Key Results
                </h3>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Successfully flew the quadcopter through all obstacle course challenges as demonstrated in the video.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Achieved highest score (19/20) among 5 groups in the final competition.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Optimized frame design reduced weight by 15% while maintaining structural integrity under flight loads.
                    </span>
                  </li>
                </ul>

              </div>

            </div>
          </div>

          {/* Technologies */}
          <div className="border-t border-purple-500/30 pt-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Technologies Used
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "SolidWorks",
                "ANSYS",
                "CNC Machining",
                "PID Control",
                "Mamba F405 MK2",
                "Carbon Fiber",
                "Brushless Motors",
                "MATLAB",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}