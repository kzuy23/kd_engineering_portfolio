"use client";

import {
  Programming,
  CAD_Tools,
  AI_Frameworks,
  Manufacturing,
} from "@/constants";
import React, { useEffect, useState } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-3 h-full overflow-hidden pb-40 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      {/*Background video MUST be behind + not capture mouse */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full opacity-30 flex items-center justify-center bg-cover">
          {mounted && (
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          )}
        </div>
      </div>

      <SkillText />

      {/* Programming & Tools */}
      <div className="relative z-10 flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-6xl">
        {Programming.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
            skill_name={skill.skill_name}
          />
        ))}
      </div>

      {/* CAD & Simulation */}
      <div className="relative z-10 flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-6xl">
        {CAD_Tools.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
            skill_name={skill.skill_name}
          />
        ))}
      </div>

      {/* AI Frameworks */}
      <div className="relative z-10 flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-6xl">
        {AI_Frameworks.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
            skill_name={skill.skill_name}
          />
        ))}
      </div>

      {/* Manufacturing */}
      <div className="relative z-10 flex flex-row justify-around flex-wrap mt-4 gap-5 items-center max-w-6xl">
        {Manufacturing.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.Image}
            width={skill.width}
            height={skill.height}
            index={index}
            skill_name={skill.skill_name}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
