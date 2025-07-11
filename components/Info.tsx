import { motion } from 'framer-motion';
import React, { JSX } from 'react'

interface InfoProps {
    context: JSX.Element;
}

const Info: React.FC<InfoProps> = ({ context }) => {
  return (
    <>
      <span className='h-auto w-full font-medium pb-1'>Character Background</span>
      <motion.p
      initial={{ filter: 'blur(10px)', opacity: 0 }} 
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      exit={{ filter: 'blur(10px)', opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='h-full w-full overflow-x-auto pb-20 text-xs md:text-sm'>
        {context}
      </motion.p>
    </>
  )
}

export default Info
