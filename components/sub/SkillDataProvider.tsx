"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name: string;
}

const SkillDataProvider = ({
  src,
  width,
  height,
  index,
  skill_name,
}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const animationDelay = 0.15;
  const lines = skill_name.split("\n").filter(Boolean);

  // Only shrink these specific skills
  const smallSkills = ["SolidWorks", "ANSYS Workbench", "TensorFlow"];
  const mainTextClass = smallSkills.includes(lines[0]) ? "text-base" : "text-xl";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      transition={{ delay: index * animationDelay, duration: 0.4 }}
      className="group"
    >
      <div className="[perspective:1000px]">
        <motion.div
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="
            relative
            w-[120px] h-[120px]
            rounded-[28px]
            bg-gradient-to-b from-purple-700/70 to-purple-900/60
            border border-white/25
            shadow-[0_0_30px_rgba(168,85,247,0.25)]
            flex items-center justify-center
            [transform-style:preserve-3d]
            cursor-pointer
          "
        >
          {/* FRONT (Logo) */}
          <div
            className="
              absolute inset-0
              flex items-center justify-center
              [backface-visibility:hidden]
            "
          >
            <Image
              src={src}
              width={width}
              height={height}
              alt={skill_name.replace("\n", " ")}
              draggable={false}
            />
          </div>

          {/* BACK (Text) */}
          <div
            className="
              absolute inset-0
              flex items-center justify-center
              [transform:rotateY(180deg)]
              [backface-visibility:hidden]
            "
          >
            <div className="w-full px-3 text-center text-white font-semibold leading-tight">
              <div className={mainTextClass}>{lines[0]}</div>

              {lines.length > 1 && (
                <div className="mt-1 text-xs font-medium text-white/90">
                  {lines.slice(1).join(" ")}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillDataProvider;
