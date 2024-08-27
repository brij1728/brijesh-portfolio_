import { Button } from '@/components/ui';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-full flex flex-col justify-between md:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      {/* Image */}
      <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
        <Image
          src='/hero.png'
          alt='Hero Image'
          width={400}
          height={400}
          objectFit='cover'
        />
      </div>
      {/* Text */}
      <div className='h-1/2 w-full md:h-full md:w-1/2 flex flex-col gap-8 items-center justify-center p-4'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-center'>
          Crafting Digital Experience, Designing Tomorrow
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-center'>
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        <div className='w-full flex flex-col sm:flex-row gap-4 justify-center'>
          <Button className='bg-secondary-100 text-primary-300 p-4 rounded-lg ring-1 ring-secondary-100 hover:bg-secondary-100'>
            View My Work
          </Button>
          <Button className='bg-primary-300 text-secondary-100 p-4 rounded-lg ring-1 ring-secondary-100 hover:bg-secondary-300 hover:text-primary-300'>
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
}
