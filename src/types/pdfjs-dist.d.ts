declare module 'pdfjs-dist/build/pdf' {
  export const GlobalWorkerOptions: {
    workerSrc: string;
  };

  export class PDFDocumentProxy {
    // Add relevant methods for your use case
  }

  export class PDFPageProxy {
    // Add relevant methods for your use case
  }

  export function getDocument(
    src: string | Uint8Array,
  ): Promise<PDFDocumentProxy>;
}
