'use client';

import { AnimatePresence } from 'framer-motion';
import { Header } from '../Header';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface TransitionProviderProps {
  children: React.ReactNode;
}
export const TransitionProvider: React.FC<TransitionProviderProps> = ({
  children,
}) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode='wait'>
      <div key={pathName} className='min-h-screen flex flex-col'>
        <motion.div
          className='h-screen w-screen fixed bg-secondary-100 rounded-b-[100px] z-40'
          animate={{ height: '0vh' }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className='fixed m-auto top-0 bottom-0 left-0 right-0 z-50 text-primary-300 text-8xl cursor-default w-fit h-fit '
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, easing: 'easeOut' }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className='h-screen w-screen fixed bg-secondary-100 rounded-t-[100px] bottom-0 z-30'
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5 } }}
        />
        <div className='h-24'>
          <Header />
        </div>

        <div className='flex-grow flex items-center'>{children}</div>
      </div>
    </AnimatePresence>
  );
};
