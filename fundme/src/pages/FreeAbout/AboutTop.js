import React from 'react'
import { motion } from "framer-motion"

function AboutTop() {
  return (
    <div className='md:h-44 h-32 w-full bg-slate-800 xl:pl-32 lg:pl-24 md:pl-16 sm:pl-12 pl-4 pr-4 flex flex-col justify-center bg-no-repeat bg-cover' >
        <motion.div initial={{ x: '100vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type: 'spring'}} className='md:text-2xl sm:text-lg text-slate-300 font-semibold mt-2'>ALL YOU NEED TO KNOW ABOUT FREELANCE</motion.div>
        <motion.div initial={{ x: '-10vw', opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration:2 , type: 'spring'}} className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-white'>LET'S EXPLORE</motion.div>
    </div>
  )
}

export default AboutTop  