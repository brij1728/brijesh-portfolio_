'use client';

import { motion, useScroll } from 'framer-motion';

import { Brain } from '@/components';
import { skills } from '@/data';
import { useRef } from 'react';

const AboutPage = () => {
  const containerRef = useRef<HTMLElement | null>(
    null,
  ) as React.MutableRefObject<HTMLDivElement | null>;
  const { scrollYProgress } = useScroll({ container: containerRef });
  console.log(scrollYProgress);
  return (
    <motion.div
      className='h-full '
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div ref={containerRef} className=' h-full overflow-scroll lg:flex '>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2'>
          {/* BIOGRAPHY CONTAINER */}
          <div className='flex flex-col justify-center gap-4 md:gap-6'>
            <h1 className='text-secondary-100 uppercase font-bold text-2xl'>
              Biography
            </h1>
            <p className='text-secondary-100 '>
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
            {/* Signature */}
            <div className='self-end'>
              <svg
                width='301'
                height='100'
                viewBox='0 0 601 249'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M118 46C122.525 84.4584 127.938 122.892 133.444 161.222C135.456 175.221 136.908 189.731 140 203.556C140.662 206.516 141.783 209.457 138.556 205.778C134.999 201.724 132.536 197.755 130 193'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
                <path
                  d='M129 134C137.1 128.393 153.385 128.194 162.556 129.444C172.767 130.837 182.33 136.969 186.778 146.222C191.734 156.535 194.148 168.468 189.778 179.444C185.491 190.211 177.765 194.407 168.611 200.444C160.237 205.968 151.407 208.829 142.111 212.444C137.386 214.282 135.093 211 131 211'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
                <path
                  d='M209 127C210.247 148.823 214.314 171.276 219.944 192.389C220.735 195.355 223 214.708 223 202'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
                <path
                  d='M208 132C203.604 131.45 199.825 130.143 195 132.556C192.699 133.706 185.619 135.301 184.222 137.222C183.213 138.61 190.897 144.758 191.944 145.333C194.531 146.756 198.516 147.5 201.389 148C205.848 148.776 205.407 148.19 209.222 145C214.448 140.631 219.465 137.688 226 137C232.408 136.325 240.259 124.741 244.444 120.556C250.53 114.47 253.027 127.011 255.556 131.889C260.675 141.766 268.44 155.145 266.889 166.778C266.624 168.763 263.928 177.196 262.778 178.778C261.439 180.618 262 195.247 262 187'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
                <path
                  d='M278 120C279.086 135.57 284.702 150.084 289 164.889C290.26 169.23 291.872 173.795 292.778 178.222C293.413 181.328 293 181.723 293 178'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
                <path
                  d='M265 97C265 99.3032 268.014 102.993 266 104'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
                <path
                  d='M306 142C306.426 133.051 309.504 123.844 315 116.778C320.507 109.697 327.777 104.151 333 96.7778C334.916 94.0722 334.574 100.565 334.667 101.556C335.942 115.236 336.167 128.892 333.556 142.444C330.729 157.114 324.606 171.554 319.778 185.667C319.103 187.639 312.48 208.709 310 208C302.687 205.911 293.953 196.918 289.111 191C282.476 182.89 290.92 174.714 296.611 169.444C304.677 161.976 313.317 154.528 323.611 150.5C332.234 147.126 340.963 142.844 348.944 138.056C351.379 136.595 355.077 137.078 356.833 134.444C359.299 130.745 357.178 128.589 354 127'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
                <path
                  d='M327 75C326.158 75.9356 325.643 76.9291 325 78'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
                <path
                  d='M363 146C364.471 141 367.452 136.644 368.722 131.5C370.293 125.138 370.034 118.463 371 112C372.371 102.829 370.182 96.9701 365.444 88.8889C364.632 87.5037 359.883 77.9833 358.556 81.8889C356.96 86.5817 356.626 91.5614 357.056 96.5C357.915 106.385 363.206 114.22 369 121.944C372.705 126.884 377.513 130.708 381.389 135.444C382.03 136.228 385.262 142.393 383 139'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
                <path
                  d='M424 80C417.952 89.4493 414.465 100.083 407.778 109.222C401.863 117.306 395.173 124.757 389.222 132.778C387.492 135.109 385.697 137.396 384.5 140.056C380.954 147.935 386.446 134.455 387 133'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
                <path
                  d='M422 80C419.599 79.4664 417.228 75.2405 415.444 73.6667C412.939 71.4561 409.564 68.4698 406.5 67.0556C402.099 65.0243 401.934 64.4766 396.778 67.2222C391.067 70.2629 383.264 70.682 389 77.0556C392.751 81.2237 396.784 85.4083 401.556 88.4444C404.67 90.4261 412.958 90 416.556 90C419.498 90 428.315 87.0803 429.944 90.6111C432.661 96.4971 434.013 105.516 431.556 111.556C428.78 118.374 421.94 123.245 416.778 128.222C413.04 131.826 407.936 132.987 403.5 135.556C396.876 139.391 402.485 139.146 406.778 139C414.356 138.743 423.697 133.053 430.833 130.556C435.815 128.812 445.075 122.559 446.444 117.278C448.125 110.797 447.672 103.246 448 96.6111C448.556 85.353 449.995 74.234 451.778 63.1111C453.411 52.9199 453 42.6222 453 32.3333C453 24.9534 453.85 16.9458 451.778 9.77778C451.059 7.29103 450.879 0.455811 449.222 2.44444C448.048 3.85343 450.161 5.99499 450.778 7.72222C453.583 15.5778 456.316 23.4102 458.389 31.5C462.66 48.1705 468 64.7173 468 82C468 90.3443 468.638 98.7905 470.222 107C470.812 110.058 471.625 114.894 473.222 117.556C474.454 119.609 476.899 112.12 476.944 111.5C477.782 100.195 474.585 89.2264 476.778 77.7778C477.927 71.7778 479.527 66.3611 481.056 60.5C482.022 56.7951 486.868 45.5334 491.222 46C497.41 46.663 502.913 57.2399 506.444 61.4444C512.259 68.3663 517.665 77.4893 519 86.5C519.828 92.0912 518.797 96.7378 519 102.222C519.264 109.339 542.272 108.889 546.333 108.889C553.767 108.889 561.01 107.244 568.389 106.556C576.396 105.808 583.479 106.645 591.444 107.556C592.353 107.659 599.919 107.888 598.944 108.167C573.013 115.576 547.565 124.577 521.667 132.111C469.373 147.325 416.73 158.445 363.333 168.778C345.77 172.176 328.333 176.177 310.722 179.333C288.01 183.404 265.097 186.193 242.444 190.611C218.098 195.36 193.363 200.932 169.556 208C154.392 212.502 139.182 215.631 124 219.667C103.309 225.167 82.549 228.05 61.7778 232.889C48.5351 235.974 35.3317 239.21 22.1667 242.611C17.6228 243.785 9.73878 247 4.5 247C3.45926 247 2.85406 246.427 2 246'
                  stroke='black'
                  strokeWidth='3'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </div>
          {/* SKILSS CONTAINER */}
          <div className='flex flex-col justify-center gap-4 md:gap-6'>
            <h1 className='text-secondary-100 uppercase font-bold text-2xl'>
              Skills
            </h1>
            <div className='flex flex-wrap gap-4'>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className='rounded p-2 text-sm cursor-pointer bg-secondary-100 hover:bg-primary-100 text-primary-100 hover:text-secondary-100'
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className='flex flex-col justify-center gap-4 md:gap-6 pb-48'>
            <h1 className='text-secondary-100 uppercase font-bold text-2xl'>
              Experience
            </h1>
            <div className=''>
              <div className=''>
                {/* Left */}
                <div className='flex justify-between h-48'>
                  <div className='w-1/3'>
                    <h2 className='bg-primary-100 text-secondary-100 font-semibold p-3 rounded-b-lg rounded-s-lg text-lg'>
                      Software Engineer
                    </h2>
                    <p className='text-secondary-100 p-3 text-sm italic'>
                      Works on e-commerce application for organic stores using
                      React Application
                    </p>
                    <p className='p-3 text-red-400 text-sm font-semibold'>
                      2020 January - 2021 October
                    </p>
                    <p className='bg-primary-100 text-secondary-100 p-1 rounded text-sm font-semibold w-fit '>
                      Pyfox Technologies
                    </p>
                  </div>
                  <div className='w-1/6 '>
                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-primary-100 -left-2'></div>
                    </div>
                  </div>
                  <div className='w-1/3'></div>
                </div>
                <div className='flex justify-between h-48'>
                  <div className='w-1/3'></div>
                  <div className='w-1/6 '>
                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-500 bg-primary-100 -left-2'></div>
                    </div>
                  </div>
                  <div className='w-1/3'>
                    <h2 className='bg-primary-100 text-secondary-100 font-semibold p-3 rounded-b-lg rounded-s-lg text-lg'>
                      Intern - Content Development
                    </h2>
                    <p className='text-secondary-100 p-3 text-sm italic'>
                      Created and reviewed content for personalized question
                      papers and workbooks
                    </p>
                    <p className='p-3 text-red-400 text-sm font-semibold'>
                      2015 June - 2015 July
                    </p>
                    <p className='bg-primary-100 text-secondary-100  p-1 rounded text-sm font-semibold w-fit'>
                      ClassKlap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
