// src/types/pdfjs.d.ts

declare module 'pdfjs-dist/build/pdf' {
  export const GlobalWorkerOptions: {
    workerSrc: string;
  };

  export function getDocument(
    src: string | Uint8Array | { url: string },
  ): PDFLoadingTask<PDFDocumentProxy>;

  export interface PDFLoadingTask<T> {
    promise: Promise<T>;
  }

  export interface PDFDocumentProxy {
    numPages: number;
    getPage(pageNum: number): Promise<PDFPageProxy>;
  }

  export interface PDFPageProxy {
    getViewport(params: { scale: number }): PDFPageViewport;
    render(params: PDFRenderParams): PDFRenderTask;
  }

  export interface PDFPageViewport {
    width: number;
    height: number;
    transform: number[];
    viewBox: number[];
    scale: number;
    rotation: number;
  }

  export interface PDFRenderParams {
    canvasContext: CanvasRenderingContext2D;
    viewport: PDFPageViewport;
    intent?: string;
    transform?: number[];
    imageLayer?: HTMLElement;
    textLayer?: HTMLElement;
  }

  export interface PDFRenderTask {
    promise: Promise<void>;
    cancel(): void;
  }
}
