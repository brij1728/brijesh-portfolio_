'use client';

import { FaSquareXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '../Menu';
import { motion } from 'framer-motion';
import { navLinks } from '@/data';
import { useState } from 'react';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
      backgroundColor: 'rgb(0,0,0)',
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
      backgroundColor: 'rgb(0,0,0)',
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      backgroundColor: 'rgb(0,0,0)',
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const listVariants = {
    closed: {
      x: '100vw',
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <header className='h-full relative'>
      <nav className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
        {/* Logo */}
        <Link
          href='/'
          className='text-sm bg-secondary-100 rounded-md p-1 font-semibold flex items-center justify-center'
        >
          <span className='text-primary-300 mr-1'>Brijesh</span>
          <span className='w-12 h-8 rounded bg-primary-300 text-secondary-100 flex items-center justify-center'>
            .app
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden sm:block text-secondary-100'>
          <Menu onLinkClick={() => {}} links={navLinks} />
        </div>

        {/* Social Media Links */}
        <div className='hidden md:flex gap-4'>
          <Link href='https://github.com/brij1728'>
            <Image src='/github.png' alt='' width={20} height={20} />
          </Link>
          <Link href='https://www.linkedin.com/in/brijeshapp/'>
            <Image src='/linkedin.png' alt='' width={20} height={20} />
          </Link>
          <Link href='https://x.com/bk10895'>
            <FaSquareXTwitter size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='sm:hidden'>
          <button
            className='w-10 h-8 flex flex-col justify-between z-50 relative'
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={isNavOpen ? 'opened' : 'closed'}
              transition={{ duration: 0.3 }}
              className='w-10 h-1 rounded origin-left'
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={isNavOpen ? 'opened' : 'closed'}
              transition={{ duration: 0.3 }}
              className='w-10 h-1 rounded'
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={isNavOpen ? 'opened' : 'closed'}
              transition={{ duration: 0.3 }}
              className='w-10 h-1 rounded origin-left'
            ></motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        variants={listVariants}
        initial='closed'
        animate={isNavOpen ? 'opened' : 'closed'}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full h-full bg-secondary-100 text-primary-300 z-40 flex flex-col justify-center items-center sm:hidden`}
      >
        {navLinks.map(link => (
          <motion.div
            key={link.name}
            variants={listItemVariants}
            className='text-3xl mb-4'
            onClick={() => setIsNavOpen(false)} // Close the menu on link click
          >
            <Link href={link.href}>{link.name}</Link>
          </motion.div>
        ))}
      </motion.div>
    </header>
  );
};
