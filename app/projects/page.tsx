"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "FedKoE: Federated Multimodal Learning",
    category: "Research",
    description: "Published research on federated learning for multimodal classification. First author publication in FL-AsiaCCS 2025 workshop.",
    image: "/workshop_FL_paper.png",
    skills: ["PyTorch", "Federated Learning", "Python"],
  },
  {
    id: 2,
    title: "Quadcopter Design & Control",
    category: "Robotics",
    description: "Custom carbon-fiber quadcopter with advanced flight control.",
    image: "/quadcopter.png",
    skills: ["ANSYS", "SolidWorks", "CNC Machining", "Embedded System"],
  },
  {
    id: 3,
    title: "Autonomous Battle Robot",
    category: "Mechatronics",
    description: "Mecanum-wheel battle robot with remote control and autonomous navigation, featuring vive tracking and attacking blades with ESP32-based control.",
    image: "/battle_bot.jpg",
    skills: ["Embedded System", "SolidWorks", "Mecanum Drive", "Laser Cutting"],
  },
  {
    id: 4,
    title: "Self-Balancing Robot",
    category: "Mechatronics",
    description: "Two-wheeled autonomous balancing robot with IMU integration.",
    image: "/self_balancing_robot.jpg",
    skills: ["Arduino", "PID Control", "IMU Sensors"],
  },
  {
    id: 5,
    title: "Digital Stethoscope",
    category: "Biomedical Engineering",
    description: "Wireless digital stethoscope with a companion mobile app and integrated deep learning for heart sound classification, powered by ESP32.",
    image: "/digital_stethoscope.png",
    skills: ["ESP32", "Solidworks", "Signal Processing", "3D Printing"],
  },
  {
    id: 6,
    title: "Barrier Gate Mechanism",
    category: "Mechanical Design",
    description: "Motor-driven swing barrier gate with quick-return mechanism. Integrated MATLAB kinematic analysis with CNC machining and laser cutting for precision assembly.",
    image: "/barrier_gate.png",
    skills: ["MATLAB", "SolidWorks", "Kinematic Analysis", "CNC Machining"],
  },
  {
    id: 7,
    title: "Railway ANSYS Simulation",
    category: "Structural Analysis",
    description: "Comprehensive FEA simulation of railway infrastructure under freight car loading and thermal strain using ANSYS Workbench.",
    image: "/Statics_analysis.png",
    skills: ["ANSYS", "MATLAB", "Structural Mechanics"],
  },
  {
    id: 8,
    title: "Camera Shutter Kinematic Analysis",
    category: "Dynamics",
    description: "Comprehensive kinematic analysis of camera shutter mechanism using MATLAB.",
    image: "/kinematic_analysis.png",
    skills: ["MATLAB", "Kinematic Analysis"],
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-[#030014] relative">
      
      {/* Back to Home Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all hover:scale-105 shadow-lg group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-semibold">Back to Home</span>
        </button>
      </div>

      {/* Content */}
      <div className="pt-36 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6 text-center">
            My Engineering Projects
          </h1>
          
          <p className="text-gray-300 text-center mb-16 text-xl max-w-3xl mx-auto">
            Explore my portfolio of mechatronics, robotics, and engineering projects from concept to realization
          </p>

          {/* Projects Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 cursor-pointer block"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full mb-3">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect - View Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-300 pointer-events-none" />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}