'use client';

import * as PDFJS from 'pdfjs-dist/build/pdf'; // Updated import for pdfjs-dist

import { useEffect, useState } from 'react';

export const usePDFJS = (
  onLoad: (pdfjs: typeof PDFJS) => Promise<void>,
  deps: (string | number | boolean | undefined | null)[] = [],
) => {
  const [pdfjs, setPDFJS] = useState<typeof PDFJS | null>(null);

  useEffect(() => {
    import('pdfjs-dist/build/pdf').then(pdfjsModule => {
      // Set workerSrc to point to the correct path in the public directory
      pdfjsModule.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
      setPDFJS(pdfjsModule);
    });
  }, []);

  useEffect(() => {
    if (!pdfjs) return;
    (async () => await onLoad(pdfjs))();
  }, [pdfjs, ...deps]);
};
