"use client"

import React, { useState } from 'react'
import Background from './Background'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'
import CustomCheckbox from './CustomCheckbox'

const Registration = () => {
  const [nextStep, setNextStep] = useState(false);

  const toggleNextStep = () => {
    setNextStep(!nextStep);
  }
  return (
    <section id='register' className='text-white text-5xl font-protest-guerrilla px-10 flex flex-col items-center justify-center relative overflow-hidden before:absolute before:h-full before:w-full before:bottom-0 before:bg-gradient-to-t before:from-black before:via-black/20 before:to-black before:z-10 font-extralight'>
        <Background bg={["/images/background/lizardshaman-bg.png", "/images/background/greatscholar-bg.png", "/images/background/pumpkinhead-bg.png"]} reversed={false} />
        <h2 className='pt-20 z-50'>Early Registration</h2>
        <p className='z-50 font-manrope font-extralight text-base pb-5 pt-3'>Be the first to experience the next level immersive experience.</p>
        <div className='h-2/3 w-1/2 bg-white/10 z-50 rounded-2xl backdrop-blur-xs shadow-md shadow-black border border-white/40 flex p-1'>
            <div className={`h-full text-base ${nextStep ? 'min-w-3/7 px-5' : 'min-w-5/6 px-24'} bg-black/50 rounded-xl z-50 font-manrope flex flex-col pt-20 pb-5 gap-3 ease-in-out duration-300`}>
              <input 
                type="email" 
                placeholder='Email Address' 
                className='w-full border border-white/50 rounded-md py-2 px-3 hover:border-white hover:text-white focus:border-white ease-in-out duration-300 hover:placeholder:text-white'
              />
              <input 
                type="text" 
                placeholder='Username' 
                className='w-full border border-white/50 rounded-md mt-5 py-2 px-3 hover:border-white hover:text-white focus:border-white ease-in-out duration-300 hover:placeholder:text-white'
              />
              <input 
                type="password" 
                name="" 
                id="" 
                placeholder='Password' 
                className='w-full border border-white/50 rounded-md py-2 px-3 hover:border-white hover:text-white focus:border-white ease-in-out duration-300 hover:placeholder:text-white'
              />
              <span className='w-full text-center mt-auto'>or <strong>Sign In</strong> using</span>
              <div className={`w-full grid ${nextStep ? 'grid-cols-1' : 'grid-cols-2'} gap-3 text-sm ease-in-out duration-300`}>
                <button className='col-span-1 flex gap-2 items-center rounded-md bg-white py-2 px-3 text-black font-normal cursor-pointer'><FcGoogle className='text-2xl'/> Google</button>
                <button className='col-span-1 flex gap-2 items-center rounded-md bg-white py-2 px-3 text-blue-500 font-normal cursor-pointer'><FaFacebook className='text-2xl'/> Facebook</button>
              </div>
            </div>
            <div className='h-full w-full flex flex-col items-center justify-center p-5 font-manrope text-sm'>
              { nextStep && (
                <div className='w-full mt-28 flex flex-col gap-5'>
                  <CustomCheckbox labelText={(<p>I agree to the <a href="#" className='text-blue-500 underline'>rules and regulations</a></p>)} />
                  <CustomCheckbox labelText={(<p>I want to receive news and notifications about the game</p>)} />
                </div>
              )}
              <div className='mt-auto w-full flex gap-2 items-center justify-center'>
                <button className='w-max border-2 border-white/30 rounded-sm text-4xl cursor-pointer text-white/30 hover:border-white/50 hover:text-white/50 focus:border-white focus:text-white ease-in-out duration-200' onClick={toggleNextStep}>
                  { nextStep ? <HiOutlineChevronLeft /> : <HiOutlineChevronRight /> }
                </button>
                { nextStep && <button className='text-base py-1.5 w-full font-manrope font-medium border-2 border-white text-white rounded-sm cursor-pointer hover:bg-blue-300 focus:border-white focus:text-white focus:bg-blue-500 ease-in-out duration-200'>Register Account</button>}
              </div>
            </div>
        </div>
    </section>
  )
}

export default Registration
