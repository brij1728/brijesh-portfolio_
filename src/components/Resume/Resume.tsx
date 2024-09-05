'use client';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui';
import Link from 'next/link';
import { getScaleByScreenWidth } from '@/utils/scaleUtility';
import { usePDFJS } from '@/hooks/usePDFJS';

// Set workerSrc only in the client-side environment
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
}

export const Resume = () => {
  const [scale, setScale] = useState(1);

  // Dynamically load pdfjs using the custom hook
  usePDFJS(async pdfjs => {
    console.log('pdfjs loaded:', pdfjs);
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newScale = getScaleByScreenWidth(width);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

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
};
