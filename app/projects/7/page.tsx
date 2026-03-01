"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const galleryImages = [
    { src: "/railway_ansys/Clip.png", alt: "Clip Component" },
    { src: "/railway_ansys/Shoulder.png", alt: "Shoulder Component" },
    { src: "/railway_ansys/Rail.png", alt: "Rail Assembly" },
    { src: "/railway_ansys/Deformation_statics_thermal_close.png", alt: "Deformation Close-up" },
    { src: "/railway_ansys/Stress_statics+thermal_notsleeper_2.png", alt: "Stress Analysis" },
    { src: "/railway_ansys/Deformation_statics_thermal1.png", alt: "Deformation with Thermal" },
  ];

export default function RailwayAnsysProject() {
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
              Structural Analysis Project
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
              Railway ANSYS Simulation
            </h1>

            <p className="text-xl text-gray-400">
              Statics and Mechanic of Solids | MECE3010 Fall 2023
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

            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">

              {/* Project Overview */}
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                  Project Overview
                </h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  Comprehensive finite element analysis (FEA) simulation of railway infrastructure under freight car loading and thermal strain using ANSYS Workbench. The project analyzed a 10-meter segment of New South Wales railway based on Liberty Corporation specifications.
                </p>

                <p className="text-gray-300 leading-relaxed mb-4">
                  The simulation examined combined loading conditions including static freight car loads and thermal effects from 50°C temperature variation (simulating extreme seasonal conditions in New South Wales, Australia). The study investigated stress distribution and deformation patterns in railway components.
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
                      3D CAD modeling of railway components including 60kg I-beam rails, M10 concrete sleepers, shoulders, and fastening clips following Australian standards.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      ANSYS Workbench FEA simulation setup including material properties (Carbon Steel 1084), contact definitions, and boundary conditions.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Technical reporting of FEA results with visualization of equivalent stress, total deformation, and thermal expansion effects.
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
                      Successfully modeled 10-meter railway segment following New South Wales/Liberty Corporation specifications.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Identified critical stress concentration at wheel-rail contact points.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Quantified 50°C thermal strain effects showing significantly higher impact than static loading alone.
                    </span>
                  </li>


                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Validated that I-beams, clips, and sleepers remain under acceptable load conditions.
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
                "ANSYS Workbench",
                "FEA Analysis",
                "Structural Mechanics",
                "Thermal Analysis",
                "Railway",
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
