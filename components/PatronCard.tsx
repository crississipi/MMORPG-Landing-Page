import React from 'react'
import { HiCheck } from 'react-icons/hi'

interface PatronCardProps {
    name: string;
    amount: number;
    gradient: string;
    included: string[];
    border: string;
    color: string;
}

const PatronCard: React.FC<PatronCardProps> = ({ name, amount, gradient, included, border, color }) => {
  
  return (
    <button className='h-full col-span-1 border border-white/20 rounded-xl z-50 md:z-60 backdrop-blur-xl flex flex-col p-2 gap-2 cursor-pointer shadow-md shadow-white/10  hover:scale-105 ease-in-out duration-300'>
        <span className={`md:h-1/4 w-full bg-gradient-to-tr ${gradient} border-2 ${border} rounded-md flex md:flex-col items-start justify-between ${color} font-manrope font-extralight text-sm px-5 py-3 shadow-md shadow-black/20`}>
            <h2 className={`h-full flex items-center font-protest-guerrilla text-2xl md:text-4xl`}>{name}</h2>
            <span className='w-full text-right font-medium'>${amount}/month</span>
        </span>
        <span className='w-full text-sm font-manrope font-extralight text-left px-2 gap-2 flex flex-col'>
            {included.map((inc, i) => (
                <p key={i} className='w-full flex justify-between'>
                    <span className='w-full'>{inc}</span> 
                    <HiCheck className='text-2xl text-emerald-500'/>
                </p>
            ))}
        </span>
    </button>
  )
}

export default PatronCard
