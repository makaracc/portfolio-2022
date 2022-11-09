import { Document, Page } from "react-pdf";
import { useState } from "react";

export const Resume = () => {
  const [file, setFile] = useState("./Resume_UpToDate.pdf");
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      My Resume
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={numPages} />
      </Document>
    </div>
  );
};
