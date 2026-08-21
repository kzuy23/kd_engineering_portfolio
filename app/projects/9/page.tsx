"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const galleryImages = [
  { src: "/franka_proj/simul1.png", alt: "Gazebo Simulation - Block Detection" },
  { src: "/franka_proj/simul2.png", alt: "Gazebo Simulation - Successful Stacking" },
  { src: "/franka_proj/simul3.png", alt: "Gazebo Simulation - Dynamic Capture" },
  { src: "/franka_proj/pick_static1.jpg", alt: "Hardware - Static Block Pickup" },
  { src: "/franka_proj/pick_static2.jpg", alt: "Hardware - Gripper Alignment" },
  { src: "/franka_proj/stack_pick.png", alt: "Hardware - Block Stacking Process" },
];

export default function FrankaProject() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
              Pick and Place Challenge
            </h1>
            <p className="text-xl text-gray-400">
              MEAM 5200 – Introduction to Robotics | University of Pennsylvania | Fall 2025
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">

            {/* Left Column - Gallery */}
            <div className="space-y-6">

              {/* Photo Gallery */}
              <div
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-purple-500/30 bg-gray-900"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
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


            </div>

            {/* Right Column */}
            <div className="space-y-6">

              {/* Project Overview */}
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                  Project Overview
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Programmed a Franka Emika Panda robot arm to autonomously pick up and stack blocks from both a static platform and a rotating turntable. Using Inverse Kinematics (IK) with null-space joint centering as the primary motion planning strategy, the system avoids complex overhead like RRT or Potential Fields while achieving robust and repeatable performance.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Algorithms were prototyped and validated in a Gazebo simulation environment before deployment on physical hardware, with iterative parameter tuning for real-world calibration.
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
                      Implemented forward and inverse kinematics using Jacobian pseudoinverse and null-space projection for 7-DOF redundancy resolution.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Integrated arm control with a given machine vision pipeline to pick blocks at desired poses, combining camera-frame detections with forward kinematics to compute accurate target positions in the world frame.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Designed a "Fixed-Position Periodic Grabbing" strategy for dynamic turntable blocks, eliminating unreliable vision-based trajectory prediction.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Built a multi-waypoint joint-space navigation system to guarantee IK convergence across distant arm configurations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Performed simulation in Gazebo and ROS to systematically detect failure modes, evaluate algorithmic solutions, and validate performance before hardware deployment.
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
                      100% static block grasping success rate in both simulation (10 runs) and hardware validation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Stacked all 4 static blocks within 2 minutes on hardware with correct gripper orientation alignment.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Near-perfect dynamic grasp success in simulation; periodic grasping outperformed vision-based prediction for moving blocks (20–30% success) by eliminating trajectory estimation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Grasp success verified via gripper finger separation within 40–60 mm (matching 50 mm block width ± compliance).
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
                "Python",
                "ROS",
                "Gazebo",
                "Franka Emika Panda",
                "Inverse Kinematics",
                "Forward Kinematics",
                "Null-Space Control",
                "Computer Vision",
                "NumPy",
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
