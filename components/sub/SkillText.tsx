"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[50px] text-white font-bold mt-[10px] text-center mb-[30px]'
      >
        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Skills</span>
      </motion.div>
    </div>
  )
}

export default SkillText