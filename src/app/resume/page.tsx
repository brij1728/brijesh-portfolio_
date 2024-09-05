'use client';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui';
import Link from 'next/link';

// Set workerSrc to the path of the worker in the public directory
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function ResumePage() {
  const [scale, setScale] = useState(1);

  // Function to set the scale based on screen width
  const updateScale = (width: number) => {
    if (width >= 1280) {
      // xl screens (1280px and above)
      setScale(2.0);
    } else if (width >= 1024) {
      // lg screens (1024px and above)
      setScale(1.7);
    } else if (width >= 768) {
      // md screens (768px and above)
      setScale(1.2);
    } else if (width >= 640) {
      // sm screens (640px and above)
      setScale(1.0);
    } else {
      // xs screens (below 640px)
      setScale(0.7);
    }
  };

  useEffect(() => {
    const handleResize = () => updateScale(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Set the initial scale
    updateScale(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-blue-100 to-red-100 py-10'>
      <div className='mb-8 text-center'>
        <Link
          href={'/Brijesh Kumar resume.pdf'}
          target='_blank'
          rel='noopener noreferrer'
          locale={false}
          download
        >
          <Button className='bg-secondary-100 text-white px-6 py-2 rounded-md'>
            Download CV
          </Button>
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Document
          file={'/Brijesh Kumar resume.pdf'}
          className='d-flex justify-content-center'
        >
          <Page pageNumber={1} scale={scale} />
        </Document>
      </div>
      <div className='my-8 text-center'>
        <Link
          href={'/Brijesh Kumar resume.pdf'}
          target='_blank'
          rel='noopener noreferrer'
          locale={false}
          download
        >
          <Button className='bg-secondary-100 text-white px-6 py-2 rounded-md'>
            Download CV
          </Button>
        </Link>
      </div>
    </div>
  );
}
