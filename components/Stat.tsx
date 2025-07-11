import { motion } from 'framer-motion';
import React from 'react'

interface StatProps {
    type: string;
    amount: string;
    delay: number;
}

const Stat: React.FC<StatProps> = ({ type, amount, delay }) => {
  return (
    <motion.p 
      initial={{ x: -999, filter: 'blur(20px)' }} 
      animate={{ x: 0, filter: 'blur(0px)' }}
      exit={{ x: 999, filter: 'blur(20px)' }}
      transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 + delay }}
      className='w-full flex justify-between px-3 py-0.5'>
      <span className='col-span-1 font-extralight font-manrope'>{type}</span>
      <span className='col-span-1 font-medium text-right font-manrope'>{amount}</span>
    </motion.p>
  )
}

export default Stat
