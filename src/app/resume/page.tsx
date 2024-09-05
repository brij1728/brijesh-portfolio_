'use client';

import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { Document, Page, pdfjs } from 'react-pdf';

import { Button } from '@/components/ui';
import Link from 'next/link';

// Set workerSrc to the path of the worker in the public directory
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const ResumePage = () => {
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
        <Document file={'/Brijesh Kumar resume.pdf'}>
          <Page pageNumber={1} />
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

export default ResumePage;
