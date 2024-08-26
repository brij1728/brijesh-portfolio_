'use client';

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
        <button
          className='text-xl leading-none sm:hidden'
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          &#9776;
        </button>
        <div
          className={`${isNavOpen ? 'block' : 'hidden'} w-full sm:block sm:w-auto`}
        >
          <Menu onLinkClick={() => setIsNavOpen(false)} />
        </div>
      </nav>
    </header>
  );
};
