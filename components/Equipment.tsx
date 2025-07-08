"use client"

import React from 'react'
import Image from "next/image";
import { LuSword } from 'react-icons/lu';
import { GiNinjaArmor, GiPowerRing } from 'react-icons/gi';
import { motion } from 'framer-motion';

interface EquipmentProps {
    weapon: {
        weaponImg: string,
        weaponName:  string,
        weaponDesc: string
    },
    armor: {
        armorImg: string,
        armorName: string,
        armorDesc: string
    }
    acc: {
        accImg: string,
        accName: string,
        accDesc: string
    }
}

const Equipment: React.FC<EquipmentProps> = ({ weapon, armor, acc }) => {
  return (
    <div className='h-full w-full grid grid-rows-13 z-50'>
      <span className='row-span-1 w-full font-medium pb-1'>Default Equipment</span>
      <div className='row-span-4 w-full flex flex-col'>
        <span className='w-full flex gap-1 items-center text-white/80 border-b border-white/10 pt-2 pb-1 z-50'><LuSword className='text-lg'/> Weapons</span>
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0 }} 
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          exit={{ filter: 'blur(10px)', opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='h-full w-full flex gap-2 items-center'>
          <div className='h-full w-1/4 bg-radial from-white/30 via-15% via-white/15 to-60% to-transparent'>
            <Image 
              priority
              src={weapon.weaponImg} 
              alt='item' 
              height={1000} 
              width={1000}
              className='h-full w-full for-img object-contain'
            />
          </div>
          <div className='w-3/4 h-full flex flex-col text-white/60 gap-1 pt-0.5'>
            <span className='font-medium text-white/70'>{weapon.weaponName}</span>
            <p className='text-justify leading-4.5'>{weapon.weaponDesc}</p>
          </div>
        </motion.div>
      </div>
      <div className='row-span-4 w-full flex flex-col'>
        <span className='w-full flex gap-1 items-center text-white/80 border-b border-white/10 pt-2 pb-1 z-50'><GiNinjaArmor className='text-lg'/> Armor</span>
        <motion.div 
          initial={{ filter: 'blur(10px)', opacity: 0 }} 
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          exit={{ filter: 'blur(10px)', opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
          className='h-full w-full flex gap-2 items-center'>
          <div className='h-full w-1/4 bg-radial from-white/30 via-15% via-white/15 to-60% to-transparent'>
            <Image 
              priority
              src={armor.armorImg} 
              alt='item' 
              height={1000} 
              width={1000}
              className='h-full w-full for-img object-contain'
            />
          </div>
          <div className='w-3/4 h-full flex flex-col text-white/60 gap-1 pt-0.5'>
            <span className='font-medium text-white/70'>{armor.armorName}</span>
            <p className='text-justify leading-4.5'>{armor.armorDesc}</p>
          </div>
        </motion.div>
      </div>
      {acc.accImg && (
      <div className='row-span-4 w-full flex flex-col'>
        <span className='w-full flex gap-1 items-center text-white/80 border-b border-white/10 pt-2 pb-1 z-50'><GiPowerRing className='text-lg'/>Accessories</span>
          <motion.div 
            initial={{ filter: 'blur(10px)', opacity: 0 }} 
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            exit={{ filter: 'blur(10px)', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.2 }}
            className='h-full w-full flex gap-2 items-center'>
            <div className='h-full w-1/4 bg-radial from-white/30 via-15% via-white/15 to-60% to-transparent'>
            <Image 
              priority
              src={acc.accImg} 
              alt='item' 
              height={1000} 
              width={1000}
              className='h-full w-full for-img object-contain'
            />
          </div>
            <div className='w-3/4 h-full flex flex-col text-white/60 gap-1 pt-0.5'>
              <span className='font-medium text-white/70'>{acc.accName}</span>
              <p className='text-justify leading-4.5'>{acc.accDesc}</p>
            </div>
          </motion.div>
      </div>
      )}
    </div>
  )
}

export default Equipment
