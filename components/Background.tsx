import React from 'react'
import Image from "next/image";

interface BackgroundProps {
    bg: string[];
    reversed: boolean;
}
const Background:React.FC<BackgroundProps> = ({ bg, reversed }) => {
  return (
    <div className={`absolute h-[230%] w-[200%] md:w-[120%] grid grid-cols-10 md:grid-cols-5 ${reversed ? '-rotate-45' : 'rotate-45'} overflow-hidden top-1/2 left-1/2 -translate-1/2`}>
      <span className='col-span-3 md:col-span-2 object-cover h-full overflow-hidden relative'>
        <Image priority src={bg[2]} alt="img" height={1000} width={1000} className={`absolute top-1/2 left-1/2 -translate-1/2 object-cover object-center h-full min-w-[250%] md:min-w-[150%] ${reversed ? 'rotate-45' : '-rotate-45'}`}/>
      </span>
    
      <span className='col-span-4 md:col-span-1 object-cover h-full overflow-hidden relative'>
        <Image priority src={bg[1]} alt="img" height={1000} width={1000} className={`absolute top-1/2 left-1/2 -translate-1/2 object-cover object-center h-full min-w-[350%] ${reversed ? 'rotate-45' : '-rotate-45'}`}/>
      </span>
    
      <span className='col-span-3 md:col-span-2 object-cover h-full overflow-hidden relative'>
        <Image priority src={bg[0]} alt="img" height={1000} width={1000} className={`absolute top-1/2 left-1/2 -translate-1/2 object-cover object-center h-full min-w-[250%] md:min-w-[150%] ${reversed ? 'rotate-45' : '-rotate-45'}`}/>
      </span>
    </div>
  )
}

export default Background
