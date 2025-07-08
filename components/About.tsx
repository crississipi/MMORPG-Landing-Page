import React from 'react'
import Image from "next/image";
import Background from './Background';

const About = () => {
  return (
    <section id='about' className='text-white text-5xl font-protest-guerrilla px-10 pb-10 flex flex-col items-center gap-10 relative overflow-hidden before:absolute before:h-full before:w-full before:bg-gradient-to-t before:from-black before:via-black/20 before:to-black before:z-10 font-extralight'>
        <Background bg={["/images/background/blindswordsman-bg.png", "/images/background/frostprincess-bg.png", "/images/background/asuragiant-bg.png"]} reversed={true} />
        <h2 className='w-full z-30 text-center pt-24'>About The Game</h2>
        <p className='w-1/2 h-full z-50 font-manrope text-lg overflow-x-hidden font-extralight text-center relative'>
          The Great War: Apocalypto is the latest award-winning MMORPG from GenoSoft Productions, the acclaimed studio behind the hit fantasy epic <b>Encapitol: Day of Reckoning</b>. Known for redefining end of the world storytelling, GenoSoft now sets its sights on delivering an even more visceral, immersive, and emotionally charged experience. Whether you fight for survival, conquest, or redemption, every decision you make shapes the course of a world teetering on the edge of oblivion.

          With advanced system controls, next-generation visual fidelity, and deep character customization, the game raises the bar for immersive gameplay. Massive siege battles, dynamic weather, player-driven story arcs, and mythic-level exploration make Apocalypto more than just a game. It&#39;s a living, breathing world begging to be rewritten.
        </p>
        <div className='w-1/3 grid grid-cols-12 grid-rows-4 z-30'>
            <Image src={'/images/awards/bafta-award.webp'} alt='awards' height={1000} width={1000} className='h-full w-full col-span-4 row-span-4 object-cover for-img'/>
            <Image src={'/images/awards/annie-awards.png'} alt='awards' height={1000} width={1000} className='h-full w-full col-span-4 row-span-2 object-cover for-img'/>
            <Image src={'/images/awards/dice-awards.jpg'} alt='awards' height={1000} width={1000} className='h-full w-full col-span-4 row-span-2 object-cover for-img'/>
            <Image src={'/images/awards/golden-joystick-awards.png'} alt='awards' height={1000} className='h-full w-full col-span-4 row-span-2 object-cover for-img'width={1000} />
            <Image src={'/images/awards/tga-awards.png'} alt='awards' height={1000} width={1000} className='h-full w-full col-span-4 row-span-2 object-cover for-img'/>
        </div>
    </section>
  )
}

export default About
