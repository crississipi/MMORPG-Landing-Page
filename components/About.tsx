"use client";

import React from 'react'
import Image from "next/image";
import Background from './Background';
import { motion } from 'framer-motion';

const About = () => {
  const sponsors = ["/images/sponsors/intel.png", "/images/sponsors/nvidia.jpg", "/images/sponsors/hyperx.jpg", "/images/sponsors/razer.png", "/images/sponsors/redbull.png", "/images/sponsors/twitch.jpg"];
  return (
    <section id='about' className='text-white text-5xl font-protest-guerrilla px-10 pb-10 flex justify-between items-center relative overflow-hidden before:absolute before:h-full before:w-full before:bg-gradient-to-t before:from-black before:via-black/20 before:to-black before:z-10 before:bottom-0 before:left-0 font-extralight'>
        <Background bg={["/images/background/blindswordsman-bg.png", "/images/background/frostprincess-bg.png", "/images/background/asuragiant-bg.png"]} reversed={true} />
        <div className='w-1/5 h-full pt-38 z-50 flex flex-col gap-5'>
          <h2 className='w-full text-center text-4xl'>Sponsors</h2>
          <div className='h-auto w-full grid grid-cols-2 gap-3'>
            {sponsors.map((sp, i) => (
              <motion.div initial={{scale: 0, filter: "blur(10px)", opacity:0}} animate={{scale:1, filter: "blur(0px)", opacity:1}} transition={{ duration:0.7, ease:"easeInOut", delay: 0.3 + (i/20)}} key={i} className='aspect-square col-span-1'>
                <Image src={sp} alt={'sponsor img'} height={1000} width={1000} priority className={`${i === 0 ? 'object-contain' : 'object-cover'} object-center h-full w-full`} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className='w-2/5 h-full flex flex-col gap-10 pt-24'>
          <h2 className='w-full z-30 text-center'>About The Game</h2>
          <p className='h-full z-50 font-manrope text-base overflow-x-hidden font-extralight text-center relative'>
            The Great War: Apocalypto is the latest award-winning MMORPG from GenoSoft Productions, the acclaimed studio behind the hit fantasy epic <b>Encapitol: Day of Reckoning</b>. Known for redefining end of the world storytelling, GenoSoft now sets its sights on delivering an even more visceral, immersive, and emotionally charged experience. Whether you fight for survival, conquest, or redemption, every decision you make shapes the course of a world teetering on the edge of oblivion.

            With advanced system controls, next-generation visual fidelity, and deep character customization, the game raises the bar for immersive gameplay. Massive siege battles, dynamic weather, player-driven story arcs, and mythic-level exploration make Apocalypto more than just a game. It&#39;s a living, breathing world begging to be rewritten.
          </p>
        </div>
        
        <div className='w-1/5 grid grid-cols-1 grid-rows-4 z-30 gap-3 pt-28'>
            <Image src={'/images/awards/annie-awards.png'} alt='awards' height={1000} width={1000} className='h-full w-full col-span-4 row-span-2 object-cover for-img'/>
            <Image src={'/images/awards/dice-awards.jpg'} alt='awards' height={1000} width={1000} className='h-full w-full col-span-4 row-span-2 object-cover for-img'/>
            <Image src={'/images/awards/golden-joystick-awards.png'} alt='awards' height={1000} className='h-full w-full col-span-4 row-span-2 object-cover for-img'width={1000} />
            <Image src={'/images/awards/tga-awards.png'} alt='awards' height={1000} width={1000} className='h-full w-full col-span-4 row-span-2 object-cover for-img'/>
        </div>
    </section>
  )
}

export default About
