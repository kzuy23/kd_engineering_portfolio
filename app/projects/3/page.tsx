"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function BattleBotProject() {
  const router = useRouter();

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
              Mechatronics Project
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
              Autonomous Battle Robot
            </h1>

            <p className="text-xl text-gray-400">
              Design Of Mechatronic Systems - MEAM 5100 Fall 2025
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            
            {/* Left Column - Image & Videos */}
            <div className="space-y-6">

              {/* Main Robot Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/30 bg-gray-900">
                <Image
                  src="/battle_bot/battle_bot1.png"
                  alt="Autonomous Battle Robot"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Battle Arena Video */}
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                  Final Battle Arena Demo
                </h3>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group">
                  <video
                    id="battlebot-arena-video"
                    muted
                    preload="metadata"
                    className="w-full h-full cursor-pointer"
                    onClick={(e) => {
                      const video = e.currentTarget;
                      const playButton = document.getElementById('play-button-arena');
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
                      const progress = document.getElementById('progress-arena');
                      if (progress) {
                        const percentage = (video.currentTime / video.duration) * 100;
                        progress.style.width = percentage + '%';
                      }
                    }}
                  >
                    <source src="/battle_bot/competition.mp4#t=0.1" type="video/mp4" />
                  </video>
                  
                  <div 
                    id="play-button-arena"
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
                      const video = document.getElementById('battlebot-arena-video') as HTMLVideoElement;
                      if (video) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const pos = (e.clientX - rect.left) / rect.width;
                        video.currentTime = pos * video.duration;
                      }
                    }}
                  >
                    <div 
                      id="progress-arena"
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-3 text-center">
                  Watch the robot compete in the final battle arena
                </p>
              </div>

              {/* Autonomous Wall Following Video */}
              <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                  Autonomous Wall Following
                </h3>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group">
                  <video
                    id="battlebot-wall-video"
                    muted
                    preload="metadata"
                    className="w-full h-full cursor-pointer"
                    onClick={(e) => {
                      const video = e.currentTarget;
                      const playButton = document.getElementById('play-button-wall');
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
                      const progress = document.getElementById('progress-wall');
                      if (progress) {
                        const percentage = (video.currentTime / video.duration) * 100;
                        progress.style.width = percentage + '%';
                      }
                    }}
                  >
                    <source src="/battle_bot/Success wall follow.mp4#t=0.1" type="video/mp4" />
                  </video>
                  
                  <div 
                    id="play-button-wall"
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
                      const video = document.getElementById('battlebot-wall-video') as HTMLVideoElement;
                      if (video) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const pos = (e.clientX - rect.left) / rect.width;
                        video.currentTime = pos * video.duration;
                      }
                    }}
                  >
                    <div 
                      id="progress-wall"
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-3 text-center">
                  Autonomous navigation using time-of-flight sensors for wall detection and following
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
                  Designed and built a mecanum-wheel battle robot capable of both remote control and autonomous navigation for the MEAM 5100 final competition. The robot featured omnidirectional movement with position tracking, wall following, and attacking mode.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  The system integrated ESP32 microcontrollers for wireless communication and motor control, time-of-flight (ToF) sensors for obstacle detection and wall following, and a custom-designed chassis optimized for combat durability. The robot competed in a multi-round tournament requiring both manual piloting skills and autonomous navigation capabilities.
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
                      CAD design with SolidWorks for chassis structure, sensor mounting brackets, and modular component integration.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      C++ programming for ESP32 microcontroller communication, including wireless protocols and real-time motor control.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Sensor data acquisition and interpretation from time-of-flight sensors for autonomous protocol.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      PID tuning for mecanum wheel drive system.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Integration of Vive tracking system for real-time position and orientation feedback in the arena.
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
                      Successfully demonstrated autonomous wall following with smooth trajectories using ToF sensor feedback.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Achieved reliable omnidirectional movement control with mecanum wheels for strategic positioning.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Competed in final tournament with combined manual and autonomous control strategies.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Implemented real-time position tracking integration with attacking blade system.
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
                "ESP32",
                "C++",
                "Mecanum Drive",
                "Time-of-Flight Sensors",
                "PID Control",
                "HTC Vive Tracking",
                "Laser Cutting",
                "Wireless Communication",
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