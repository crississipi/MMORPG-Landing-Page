"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import CharacterHolder from './CharacterHolder';

const characBG = [
  {
    bg: '/images/background/blindswordsman-bg.png',
    gradient: 'rock'
  },
  {
    bg: '/images/background/frostprincess-bg.png',
    gradient: 'snow'
  },
  {
    bg: '/images/background/asuragiant-bg.png',
    gradient: 'volcano'
  },
  {
    bg: '/images/background/lizardshaman-bg.png',
    gradient: 'fog'
  },
  {
    bg: '/images/background/greatscholar-bg.png',
    gradient: 'moss'
  },
  {
    bg: '/images/background/pumpkinhead-bg.png',
    gradient: 'haunted'
  },
]

const Characters = () => {
  const [currCharac, setCurrCharac] = useState(0);
  const [showNext, setShowNext] = useState(true);

  const handleShowNext = () => {
    setShowNext(false);
    setTimeout(() => setShowNext(true), 500);
  };

  const toggleCurrCharac = (direction: string) => {
    handleShowNext();
    if (direction === "left") {
      if (currCharac - 1 < 0) {setCurrCharac(5)}
      else {setCurrCharac(currCharac - 1)}
    } else if (direction === "right") {
      if (currCharac + 1 > 5) {setCurrCharac(0)}
      else {setCurrCharac(currCharac + 1)}
    }
  }


  return (
    <section id='characters' className={`text-white pt-24 pb-5 text-sm relative overflow-hidden before:h-1/6 before:w-full before:absolute before:bg-gradient-to-t before:bottom-0 before:from-black before:to-transparent before:z-50 after:h-1/6 after:w-full after:absolute after:bg-gradient-to-b after:top-0 after:from-black after:to-transparent`}>
      <div className='h-full w-full absolute overflow-hidden inset-0 flex items-center justify-between'>
        <button className='absolute z-50 text-7xl left-3 animate-pulse cursor-pointer rounded-md bg-white/10 w-8 flex hover:animate-none hover:bg-white/40 focus:bg-white/70 ease-in-out duration-200' onClick={() => toggleCurrCharac("left")}>
          <HiOutlineChevronLeft className='scale-125'/>
        </button>
        <Image priority src={characBG[currCharac].bg} alt='bg' height={1000} width={1000} className='h-full w-full object-cover object-center for-img'/>
        <button className='absolute z-50 text-7xl right-3 animate-pulse cursor-pointer rounded-md bg-white/10 w-8 flex hover:animate-none hover:bg-white/40 focus:bg-white/70 ease-in-out duration-200' onClick={() => toggleCurrCharac("right")}>
          <HiOutlineChevronRight className='scale-125'/>
        </button>
      </div>
      
      {showNext && ( <CharacterHolder charac={currCharac}/>)}

      
    </section>
  )
}

export default Characters
