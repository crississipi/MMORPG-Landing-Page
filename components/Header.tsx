"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import NavBtn from './NavBtn'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  }
  return (
    <div className='h-20 w-full flex items-center justify-end md:items-end md:justify-between bg-black/30 backdrop-blur-lg fixed top-0 z-60 shadow-md shadow-white/10 text-white py-3 px-3 md:px-10'>
      <a href="#home" className='h-32 w-auto absolute -top-3 left-1/2 -translate-x-1/2 z-50'>
        <Image 
          priority
          src={'/images/thegreatwarlogo.png'} 
          alt='logo' 
          height={1000} 
          width={1000} 
          className='h-full w-full object-contain for-img'
        />
      </a>
      <button className='md:hidden p-2 text-3xl text-white/70 rounded-sm focus:text-white focus:bg-white/20 ease-in-out duration-150' onClick={toggleNav}>
        { openNav ? (<HiOutlineX />) : (<HiOutlineMenuAlt3 />)}        
      </button>
      <div className={`${openNav ? 'flex' : 'hidden'} md:flex h-auto w-max flex-col absolute top-full right-2 bg-black gap-2 rounded-md mt-2 py-2 md:h-full md:w-full md:top-0 md:bg-transparent md:gap-0 md:rounded-none md:mt-0 md:py-0 md:relative md:flex-row md:items-end md:justify-between`}>
        <div className='flex flex-col gap-2 md:gap-0 md:flex-row'>
          <NavBtn name='Characters' link={'characters'} />
          <NavBtn name='About' link={'about'} />
        </div>
        <div className='flex flex-col gap-2 md:gap-0 md:flex-row'>
          <NavBtn name='Early Registration' link={'register'} />
          <NavBtn name='Be a Patron' link={'patron'} />
        </div>
      </div>
    </div>
  )
}

export default Header
