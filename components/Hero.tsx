import React from 'react'
import ImageDisplay from './ImageDisplay'

const character = [
  {
    bgSrc: '/images/background/blindswordsman-bg.png',
    heroSrc: '/images/characters/blindswordsman.png',
    title: 'The Blind Samurai',
    name: 'Ginjiro Tsukikage',
    zoom: 'min-w-[130%] max-w-[130%]',
    gradient: 'volcano-gradient'
  },
  {
    bgSrc: '/images/background/frostprincess-bg.png',
    heroSrc: '/images/characters/frostprincess.png',
    title: 'The Frost Maiden',
    name: 'Diana Everwinter',
    zoom: 'min-w-[100%]',
    gradient: 'snow-gradient'
  },
  {
    bgSrc: '/images/background/asuragiant-bg.png',
    heroSrc: '/images/characters/asuragiant.png',
    title: 'The Ancient Asura',
    name: 'Grok the Champion',
    zoom: 'min-w-[150%]',
    gradient: 'rock-gradient'
  },
  {
    bgSrc: '/images/background/lizardshaman-bg.png',
    heroSrc: '/images/characters/lizardshaman-bg.png',
    title: 'The Last Shaman',
    name: 'Master Salazar',
    zoom: 'min-w-[115%]',
    gradient: 'fog-gradient'
  },
  {
    bgSrc: '/images/background/greatscholar-bg.png',
    heroSrc: '/images/characters/greatscholar.png',
    title: 'The Great Scholar',
    name: 'Zhang Yuxuan',
    zoom: 'min-w-[145%] top-4/5',
    gradient: 'warm-gradient'
  },
  {
    bgSrc: '/images/background/pumpkinhead-bg.png',
    heroSrc: '/images/characters/pumpkinhead.png',
    title: 'The Wicked',
    name: 'Baron Pumpkin',
    zoom: 'min-w-[150%] top-6/7 left-2/5',
    gradient: 'eerie-gradient'
  },
]

const Hero = () => {
  return (
    <section id='home' className='flex flex-nowrap overflow-hidden relative after:h-1/7 after:w-full after:absolute after:bottom-0 after:z-40 after:bg-gradient-to-t after:from-black  after:to-transparent'>
      {character.map((char, i) => (
        <ImageDisplay 
          key={i}
          bgSrc={char.bgSrc} 
          heroSrc={char.heroSrc} 
          title={char.title} 
          name={char.name} 
          zoom={char.zoom}
          gradient={char.gradient}      
        />
      ))}
    </section>
  )
}

export default Hero
