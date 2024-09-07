import { useEffect, useState } from 'react';

import { pdfjs } from 'react-pdf';

// Define a type for pdfjs to avoid circular reference
type PDFJSInstance = typeof pdfjs;

// Hook to dynamically load pdfjs-dist
export const usePDFJS = (
  onLoad: (pdfjs: PDFJSInstance) => Promise<void>,
  deps: (string | number | boolean | undefined | null)[] = [],
) => {
  const [pdfjsInstance, setPDFJSInstance] = useState<PDFJSInstance | null>(
    null,
  );

  useEffect(() => {
    // Dynamically import 'react-pdf' to access pdfjs
    import('react-pdf').then(module => {
      // Set workerSrc to point to the public directory
      module.pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
      setPDFJSInstance(module.pdfjs);
    });
  }, []);

  useEffect(() => {
    if (!pdfjsInstance) return;
    (async () => await onLoad(pdfjsInstance))();
  }, [pdfjsInstance, ...deps]);
};
