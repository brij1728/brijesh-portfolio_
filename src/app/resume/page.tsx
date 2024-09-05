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
    <div className='min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8'>
      <div className='mb-8 text-center'>
        <Link
          href={'/Brijesh Kumar resume.pdf'}
          target='_blank'
          rel='noopener noreferrer'
          locale={false}
          download
        >
          <Button className='bg-blue-500 text-white px-6 py-2 rounded-md'>
            Download
          </Button>
        </Link>
      </div>
      <div className='flex justify-center items-center'>
        <Document file={'/Brijesh Kumar resume.pdf'}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};

export default ResumePage;
