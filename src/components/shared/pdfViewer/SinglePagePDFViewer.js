import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DownloadIcon from '@mui/icons-material/Download';

export default function SinglePagePDFViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <Box width="fit-content" sx={{ border: "1px solid" }}>
      <Box display="flex" alignItems="center" justifyContent="end">
        <a href={`${process.env.REACT_APP_URL}/${pdf}`} rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
          <IconButton disabled={!pdf}>
            <DownloadIcon />
          </IconButton>
        </a>
      </Box>
      <Document
        file={{
          url:
            `${process.env.REACT_APP_URL}/${pdf}`,
        }}
        options={{ workerSrc: "pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <Box display="flex" alignItems="center" justifyContent="center">
        <IconButton disabled={pageNumber <= 1} onClick={previousPage}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography>Сторінка {pageNumber || (numPages ? 1 : "--")} з {numPages || "--"}</Typography>
        <IconButton disabled={pageNumber >= numPages} onClick={nextPage}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
