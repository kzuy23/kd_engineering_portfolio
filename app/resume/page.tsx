"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ResumePage() {
  const router = useRouter();
  const [pdfKey, setPdfKey] = useState(0);

  // Force PDF to reload when page mounts
  useEffect(() => {
    setPdfKey(Date.now());
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#030014] relative">
      
      {/* Back to Home Button - Fixed Top Left */}
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
      <div className="pt-20 px-6 pb-6">
        <div className="max-w-7xl mx-auto">
          
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 text-center">
            My Resume
          </h1>
          
          <p className="text-gray-300 text-center mb-8 text-lg">
            Duy Khuong - Mechanical Engineering Graduate Student
          </p>

          {/* Download Button */}
          <div className="text-center mb-8">
            <a
              href="/CV_KhuongDuy.pdf"
              download="DuyKhuong_Resume.pdf"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume as PDF
            </a>
          </div>

          {/* PDF Viewer */}
          <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <iframe
              key={pdfKey}
              src={`/CV_KhuongDuy.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH&zoom=page-fit`}
              className="w-full h-[800px] md:h-[1100px]"
              title="Resume"
            />
          </div>

          {/* Open in New Tab */}
          <div className="mt-6 text-center">
            <a
              href="/CV_KhuongDuy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-cyan-400 transition underline"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Open PDF in New Tab (Full Controls)
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
