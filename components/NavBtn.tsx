import React from 'react'

interface NavBtnProps {
    name: string;
    link: string;
}
const NavBtn:React.FC<NavBtnProps> = ({ name, link }) => {
  return (
    <a href={`#${link}`} className='relative flex justify-center text-lg font-manrope font-extralight px-5 before:h-0.5 before:w-0 before:absolute before:bg-white before:top-7 hover:before:w-3/4 before:ease-in-out before:duration-300'>
        { name }
    </a>
  )
}

export default NavBtn
