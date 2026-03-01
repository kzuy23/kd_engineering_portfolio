"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // Recommended for internal links, though <a> is fine for external
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function FedKoEProject() {
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
              Research Publication
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
              FedKoE: Federated Multimodal Learning
            </h1>

            <p className="text-xl text-gray-400">
              First Author | FL-AsiaCCS 2025 Workshop | Published August 2025
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            
            {/* Left Column */}
            <div className="space-y-6">

              {/* Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-purple-500/30 bg-white/5">
                <Image
                  src="/paper_demo.png"
                  alt="Federated Learning Protocol Visualization"
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3">

                {/* Paper Link */}
                <a
                  href="https://dl.acm.org/doi/full/10.1145/3709023.3737690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Read Full Paper
                </a>

                {/* Conference Link */}
                <a
                  href="https://federated-learning.org/fl-asiaccs-2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  FL-AsiaCCS 2025 Workshop
                </a>

                {/* Lab Link */}
                <a
                  href="https://www.sail-research.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-cyan-500 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-500/10 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  SAIL Research Lab
                </a>

              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">

              {/* Contribution */}
              <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
                  Research Contribution
                </h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  As first author, I addressed a critical challenge in multimodal federated learning: how to effectively combine multiple data modalities (audio, video, sensor signals) while maintaining both accuracy and efficiency. 
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Our FedKoE framework integrates a Mixture-of-Experts (MoE) architecture with Knowledge Distillation (KD), where stronger modalities actively teach weaker ones. Using a Softmax Gating function, we dynamically quantify each modality&apos;s importance and transfer predictive knowledge to achieve balanced multimodal fusion even under heterogeneous settings.
                </p>
              </div>

              {/* Skills */}
              <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                  Technical Skills Developed
                </h2>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Implemented multimodal federated learning pipelines using PyTorch, FedML, and Weights & Biases.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Worked with EEG, audio, and image datasets using Librosa, OpenCV, and MNE.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Evaluated and gave comprehensive quality/labeling feedback for a private dataset.
                    </span>
                  </li>
                </ul>

              </div>

              {/* Results */}
              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border border-purple-500/40 rounded-xl p-6">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                  Key Results
                </h3>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Quantified the contribution of each modality and applied teacher-student approach.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Validated on CREMA-D, KU-HAR, and UCI-HAR datasets.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Enhanced unimodal predictions of the weak modalities.
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">•</span>
                    <span className="leading-relaxed">
                      Achieved robust performance with various missing-modality setups.
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
                "PyTorch",
                "Federated Learning",
                "Python",
                "OpenCV",
                "Librosa",
                "MNE",
                "FedML",
                "WandB",
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