"use client";

import React, { JSX } from 'react'
import Image from 'next/image'
import { easeInOut, motion } from 'framer-motion';

interface ImageDisplayProps {
    bgSrc: string;
    heroSrc: string;
    title: string;
    name: string;
    zoom: string;
    gradient: string;
}

const parentVariants = {
    hover: {
        minWidth: '20%',
        transition: {
            duration: 0.5,
            ease: easeInOut,
        },
    },
};

const titleVariants = {
  initial: { opacity: 0, x: -999 },
  hover: { opacity: 1, x: 0 },
}

const nameVariants = {
  initial: { y: 999 },
  hover: { y: 0 },
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ bgSrc, heroSrc, title, name, zoom, gradient }) => {
  return (
    <motion.button variants={parentVariants} initial="initial" whileHover='hover' className={`h-full min-w-[0%] max-w-1/6 col-span-1 relative flex flex-col cursor-pointer before:content[""] before:absolute before:h-2/3 before:bottom-0 before:w-full ${gradient} before:z-40 z-40`}>
      <div className='absolute top-1/5 left-1/2 -translate-x-1/2 flex flex-col gap-3 w-full h-full overflow-x-hidden z-30'>
        <motion.h3 variants={titleVariants} transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 20, delay: 0.5 }} className='absolute text-sm text-left pl-2 w-3/4 text-white/60 border-b border-white/20'>{title}</motion.h3>
        <motion.h2 variants={nameVariants} transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 20 }} className='mt-5 text-7xl font-protest-guerrilla text-center text-transparent text-outline-white absolute left-1/2 -translate-x-1/2'>{name}</motion.h2>
        <motion.h4 variants={nameVariants} transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 20 }} className='absolute left-1/2 -translate-x-1/2 mt-10 z-50 text-white text-5xl font-protest-guerrilla font-extralight text-center'>{name}</motion.h4>
      </div>
      <Image 
        priority
        src={bgSrc} 
        alt='herobg' 
        height={1000} 
        width={1000} 
        className='h-full w-full object-center object-cover ease-in-out duration-300 for-img'
      />
      <Image 
        priority
        src={heroSrc}
        alt='herobg' 
        height={1000} 
        width={1000} 
        className={`h-full ${zoom ?? 'w-full'} object-center object-contain absolute z-40 top-3/4 left-1/2 -translate-1/2 ease-in-out duration-300 for-img`}
      />
    </motion.button>
  )
}

export default ImageDisplay
