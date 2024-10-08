'use client';

import { Button } from '@/components/ui';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className='h-full '
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div
        className='w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 pb-4'
        style={{ height: 'calc(100vh - 96px)' }} // Remaining height after header
      >
        {/* Image */}
        <div className='relative w-full h-[50vh] md:h-full md:w-1/2'>
          <Image
            src='/hero.png'
            alt='Hero Image'
            fill
            className='object-contain'
          />
        </div>
        {/* Text */}
        <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-8 items-center justify-center p-4 h-[50vh] md:h-full text-secondary-100'>
          <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold text-start'>
            Crafting Digital Experience, Designing Tomorrow.
          </h1>
          <p className='text-base md:text-lg lg:text-xl text-start md:text-center'>
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          <div className='w-full flex flex-col sm:flex-row gap-4 justify-center'>
            <Button className='bg-secondary-100 text-primary-100 p-4 rounded-lg ring-1 ring-secondary-100 hover:bg-secondary-100'>
              View My Work
            </Button>
            <Button className='bg-primary-100 text-secondary-100 p-4 rounded-lg ring-1 ring-secondary-100 hover:bg-secondary-300 hover:text-primary-100'>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
