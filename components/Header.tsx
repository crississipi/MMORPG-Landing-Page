import React from 'react'
import Image from 'next/image'
import NavBtn from './NavBtn'

const Header = () => {
  return (
    <div className='h-20 w-full flex items-end justify-between bg-black/30 backdrop-blur-lg fixed top-0 z-100 shadow-md shadow-white/10 text-white py-3 px-10'>
      <a href="#home" className='h-32 w-auto absolute -top-3 left-1/2 -translate-x-1/2 z-50'>
        <Image 
          src={'/images/thegreatwarlogo.png'} 
          alt='logo' 
          height={500} 
          width={500} 
          className='h-full w-full object-contain for-img'
        />
      </a>
      <div className='flex'>
        <NavBtn name='About' link={'about'} />
        <NavBtn name='Characters' link={'characters'} />
      </div>
      <div className='flex'>
        <NavBtn name='Early Registration' link={'download'} />
        <NavBtn name='Be a Patron' link={'patron'} />
        <NavBtn name='Contact Us' link={'contact'} />
      </div>
    </div>
  )
}

export default Header
