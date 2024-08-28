'use client';

import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div
      className='h-full '
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className=' h-full '>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
          {/* BIOGRAPHY CONTAINER */}
          <div className='flex flex-col justify-center gap-4 md:gap-6'>
            <h1 className='text-secondary-100 uppercase font-bold'>
              Biography
            </h1>
            <p>
              As a <span className='font-bold'>React Frontend Developer</span>,
              I focus on creating user-centric web applications using advanced
              technologies like
              <span className='font-bold'> Next.js, Tailwind CSS</span>, and
              <span className='font-bold'> Framer Motion</span>. With a strong
              foundation in
              <span className='font-bold'> React</span>
              and <span className='font-bold'> TypeScript</span>, I specialize
              in building seamless user experiences, dynamic interfaces, and
              responsive designs. I excel in collaborative environments and
              consistently deliver high-performance solutions.
            </p>
          </div>
          {/* SKILSS CONTAINER */}
          <div className=''>Skills</div>
          {/* EXPERIENCE CONTAINER */}
          <div className=''>Experience</div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden md:block'></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
