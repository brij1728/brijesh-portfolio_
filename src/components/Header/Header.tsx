'use client';

import { FaSquareXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '../Menu';
import { useState } from 'react';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className='h-full'>
      <nav className='h-full container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
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
        <div className='hidden sm:block'>
          <Menu onLinkClick={() => {}} />
        </div>

        {/* Social Media Urls */}
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
            className='text-xl leading-none w-10 h-8 flex flex-col justify-between'
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className='w-10 h-1 bg-secondary-100 rounded'></div>
            <div className='w-10 h-1 bg-secondary-100 rounded'></div>
            <div className='w-10 h-1 bg-secondary-100 rounded'></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isNavOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-secondary-100 text-primary-300 z-50 flex flex-col justify-center items-center sm:hidden'>
          {/* Close Button */}
          <button
            className='absolute top-4 right-4 text-3xl font-bold'
            onClick={() => setIsNavOpen(false)}
          >
            &times;
          </button>
          <Menu onLinkClick={() => setIsNavOpen(false)} />
        </div>
      )}
    </header>
  );
};
