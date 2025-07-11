"use client";

import React from 'react'
import Image from 'next/image'
import { easeInOut, motion } from 'framer-motion';

interface ImageDisplayProps {
    charac: number;
    onMobile: boolean;
}

const character = [
  {
    bgSrc: '/images/background/blindswordsman-bg.png',
    heroSrc: '/images/characters/blindswordsman.png',
    title: 'The Blind Samurai',
    name: 'Ginjiro Tsukikage',
    zoom: 'md:min-w-[130%] w-[90%] md:max-w-[130%]',
    customTop: 'top-7/40 md:top-1/4',
    gradient: 'volcano-gradient'
  },
  {
    bgSrc: '/images/background/frostprincess-bg.png',
    heroSrc: '/images/characters/frostprincess.png',
    title: 'The Frost Maiden',
    name: 'Diana Everwinter',
    zoom: 'w-[90%] md:min-w-[100%]',
    customTop: 'top-7/40 md:top-1/4',
    gradient: 'snow-gradient'
  },
  {
    bgSrc: '/images/background/asuragiant-bg.png',
    heroSrc: '/images/characters/asuragiant.png',
    title: 'The Ancient Asura',
    name: 'Grok the Champion',
    zoom: 'w-[95%] md:min-w-[150%]',
    customTop: 'top-2/20 md:top-1/5',
    gradient: 'rock-gradient'
  },
  {
    bgSrc: '/images/background/lizardshaman-bg.png',
    heroSrc: '/images/characters/lizardshaman-bg.png',
    title: 'The Last Shaman',
    name: 'Master Salazar',
    zoom: 'w-[90%] md:min-w-[115%]',
    customTop: 'top-7/40 md:top-1/4',
    gradient: 'fog-gradient'
  },
  {
    bgSrc: '/images/background/greatscholar-bg.png',
    heroSrc: '/images/characters/greatscholar.png',
    title: 'The Great Scholar',
    name: 'Zhang Yuxuan',
    zoom: 'w-[90%] md:min-w-[155%]',
    customTop: 'top-3/20 md:top-1/3',
    gradient: 'warm-gradient'
  },
  {
    bgSrc: '/images/background/pumpkinhead-bg.png',
    heroSrc: '/images/characters/pumpkinhead.png',
    title: 'The Wicked',
    name: 'Baron Pumpkin',
    zoom: 'min-w-[110%] md:min-w-[150%] mr-14',
    customTop: 'top-5/20 md:top-7/20',
    gradient: 'eerie-gradient'
  },
];

const parentVariants = {
    hover: {
        minWidth: '20%',
        filter: 'blur(0px)',
        transition: {
            duration: 0.5,
            ease: easeInOut,
        },
    },
    animate: {
        minWidth: '100%',
        filter: 'blur(0px)',
        transition: {
            duration: 0.3,
            ease: easeInOut,
        },
    },
};

const titleVariants = {
  initial: { opacity: 0, x: -999 },
  hover: { opacity: 1, x: 0 },
  animate: { opacity: 1, x: 0 },
}

const nameVariants = {
  initial: { y: 999 },
  hover: { y: 0 },
  animate: { y: 0 },
}

const characVariants = {
  initial: { scale: 1, filter: "blur(0px)"},
  animate: { scale: 1.2, filter: "blur(0px)"},
  exit: { scale: 1, filter: "blur(10px)"},
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ charac, onMobile }) => {
  return (
    <motion.button 
        variants={parentVariants} 
        initial="initial"
        animate={onMobile ? 'animate' : {}}
        exit={onMobile ? 'initial' : {}}
        whileHover='hover' 
        className={`h-full min-w-4/5 max-w-full md:min-w-[0%] md:max-w-1/6 col-span-1 relative flex flex-col cursor-pointer before:content[""] before:absolute before:h-2/3 before:bottom-0 before:w-full ${character[charac].gradient} before:z-40 z-40`}
      >
        <div className='absolute top-1/8 md:top-1/6 left-1/2 -translate-x-1/2 flex flex-col gap-3 w-full h-full overflow-x-hidden z-30'>
          <motion.h3 
            variants={titleVariants} 
            transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 20, delay: 0.5 }} 
            className='absolute text-base font-manrope font-extralight md:text-sm text-left pl-2 w-1/2 md:w-3/4 text-white/60 border-b border-white/20'
          >{character[charac].title}</motion.h3>
          <motion.h2 
            variants={nameVariants} 
            transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 20 }} 
            className='mt-10 text-8xl leading-20 md:leading-none md:mt-5 md:text-7xl font-protest-guerrilla text-center text-transparent text-outline-white absolute left-1/2 -translate-x-1/2'
          >{character[charac].name}</motion.h2>
          <motion.h4 
            variants={nameVariants} 
            transition={{ duration: 0.3, type: "spring", stiffness: 100, damping: 20 }} 
            className='absolute left-1/2 -translate-x-1/2 mt-12 leading-18 md:leading-none md:mt-10 z-50 text-white text-7xl md:text-5xl font-protest-guerrilla font-extralight text-center'
          >{character[charac].name}</motion.h4>
        </div>
        <div className='h-full w-full'>
          <Image 
            priority
            src={character[charac].bgSrc} 
            alt='herobg' 
            height={1000} 
            width={1000} 
            className='h-full w-full object-center object-cover ease-in-out duration-300 for-img'
          />
        </div>
        <motion.div
          variants={characVariants}
          transition={{duration: 0.3, ease: "easeInOut"}}
          className={`h-full w-full absolute z-40 ${character[charac].customTop ?? 'top-2/10 md:top-1/4'} left-1/2 flex items-center justify-center -translate-x-1/2 ease-in-out duration-300`}
        >
          <Image 
            priority
            src={character[charac].heroSrc}
            alt='herobg' 
            height={1000} 
            width={1000} 
            className={`h-full ${character[charac].zoom ?? ''} object-center object-contain for-img`}
          />
        </motion.div>
      </motion.button>
  )
}

export default ImageDisplay
