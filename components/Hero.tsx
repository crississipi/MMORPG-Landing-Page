"use client";

import React, { useEffect, useState } from 'react';
import ImageDisplay from './ImageDisplay';
import { AnimatePresence, motion } from 'framer-motion';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const [nextChar, setNextChar] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      setIsMobile(width <= 768);
    };
    updateScreenSize();

    window.addEventListener('resize', updateScreenSize);

    const interval = setInterval(() => {
      setNextChar(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % 6);
        setNextChar(true);
      }, 1000);
    }, 7000);

    return () => {
       window.removeEventListener('resize', updateScreenSize);
       clearInterval(interval);
    }
  }, []);

  return (
    <section id='home' className='flex items-end justify-between overflow-hidden relative after:h-1/7 after:w-full after:absolute after:bottom-0 after:z-40 after:bg-gradient-to-t after:from-black  after:to-transparent'>
      {!isMobile ? (
        <div className={`h-full w-auto flex flex-nowrap transition-transform`}>
          {Array.from({ length: 6 }).map((_, i) => (
            <ImageDisplay 
              key={i}
              charac={i}
              onMobile={false}
            />
          ))}
        </div>
      ) : (
        nextChar && (
          <AnimatePresence mode='wait'>
            <motion.div
              initial={{ opacity:0, filter: "blur(10px)" }}
              animate={{ opacity:1, filter: "blur(0px)" }}
              exit={{ opacity:0, filter: "blur(10px)" }}
              transition={{ duration:0.5, ease:'easeInOut'}}
              className='h-full w-full relative'
            >
              <ImageDisplay 
                charac={index}
                onMobile={true}
              />
            </motion.div>
          </AnimatePresence>
        )
      )}
      <div className='md:hidden h-10 w-max absolute z-50 bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3'>
        {Array.from({ length: 6}).map((_, i) => (
          <span key={i} className={`${index === i ? 'scale-250 bg-white' : 'scale-100 bg-white/40'} h-1.5 w-1.5 rounded-full ease-in-out duration-500`}></span>
        ))}
      </div>
    </section>
  );
}

export default Hero