"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
};

export default function About() {
  const logos: Logo[] = useMemo(
    () => [
      { src: "/manchester-united.png", alt: "Manchester United" },
      { src: "/philadelphia-sixers.png", alt: "Philadelphia 76ers" },
      { src: "/philadelphia-eagles.png", alt: "Philadelphia Eagles" },
      { src: "/clash-royale-ultimate.png", alt: "Clash Royale Ultimate Champion" },
    ],
    []
  );

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % logos.length);
    }, 4000);

    return () => window.clearInterval(id);
  }, [logos.length]);

  const getDepthIndex = (i: number) => {
    return (i - active + logos.length) % logos.length;
  };

  return (
    <section id="about" className="w-full py-24 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Text */}
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="mt-8 text-gray-200 text-xl md:text-2xl leading-relaxed max-w-3xl">
            Hi everyone, I’m{" "}
            <span className="text-purple-300 font-semibold">Duy Khuong</span>{" "}
            from{" "}
            <span className="text-purple-300 font-semibold">Vietnam</span>. 
            I’m currently pursuing my Master’s degree at Penn in Mechanical Engineering 
            and Applied Mechanics, with a concentration in{" "}
            <span className="text-cyan-300 font-semibold">
              Mechatronics and Robotics
            </span>
            .  

            <br /><br />

            I’m a chill guy who enjoys sports activities. 
            On the right side, you’ll see the teams I proudly support. 
            Btw, I’m an{" "}
            <span className="text-cyan-300 font-semibold">
              Ultimate Champion
            </span>{" "}
            in Clash Royale 🙂
          </p>
        </div>

        {/* RIGHT: Rotating Logos */}
        <div className="relative w-full flex items-center justify-center">
          <div className="relative w-[420px] h-[420px] md:w-[560px] md:h-[560px] [perspective:1000px]">
            {logos.map((logo, i) => {
              const d = getDepthIndex(i);
              const isActive = d === 0;

              const style: React.CSSProperties = {
                transform: isActive
                  ? "translate(-50%, -50%) translateZ(0px) rotateY(0deg) scale(1)"
                  : `translate(-50%, -50%) translateZ(-${d * 160}px) rotateY(${
                      55 + d * 10
                    }deg) scale(${1 - d * 0.06})`,
                filter: isActive ? "blur(0px)" : `blur(${d * 2.2}px)`,
                opacity: isActive ? 1 : 0.5,
                zIndex: 10 - d,
              };

              return (
                <div
                  key={logo.src}
                  className="absolute left-1/2 top-1/2 transition-all duration-700 ease-in-out"
                  style={style}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={420}
                    height={420}
                    className="object-contain select-none drop-shadow-[0_0_28px_rgba(255,255,255,0.2)]"
                    priority={isActive}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
