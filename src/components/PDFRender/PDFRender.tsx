'use client';

import * as pdfjsLib from 'pdfjs-dist/build/pdf';

import { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist/build/pdf';
import { useEffect, useRef, useState } from 'react';

// Set workerSrc only in the client-side environment
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
}

type PDFRendererProps = {
  pdfUrl: string;
};

const PDFRenderer: React.FC<PDFRendererProps> = ({ pdfUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);

  const renderPage = (page: PDFPageProxy) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const viewport = page.getViewport({ scale: 1.5 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderContext = {
      canvasContext: context,
      viewport,
    };

    page
      .render(renderContext)
      .promise.then(() => {
        console.log('Page rendered');
      })
      .catch(error => {
        console.error('Error rendering page:', error);
      });
  };

  useEffect(() => {
    const loadPDF = async () => {
      try {
        // Get the loading task (which provides the promise)
        const loadingTask = pdfjsLib.getDocument(pdfUrl);

        // Load the PDF document
        const pdf: PDFDocumentProxy = await loadingTask.promise;

        // Set the total number of pages
        setNumPages(pdf.numPages);

        // Get the page and render it
        const page = await pdf.getPage(pageNum);
        renderPage(page);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    loadPDF();
  }, [pdfUrl, pageNum]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      <div>
        <button onClick={() => setPageNum(pageNum - 1)} disabled={pageNum <= 1}>
          Previous Page
        </button>
        <button
          onClick={() => setPageNum(pageNum + 1)}
          disabled={pageNum >= numPages}
        >
          Next Page
        </button>
        <p>
          Page {pageNum} of {numPages}
        </p>
      </div>
    </div>
  );
};

export default PDFRenderer;
