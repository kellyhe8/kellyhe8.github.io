import React from "react";
import Navbar from "./navmenu/Navbar";
import WorkExperience from "./timeline/WorkExperience";
import Contact from "./Contact";
// import { Page, Text, View, Document, StyleSheet, pdfjs } from "react-pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { Box } from "@material-ui/core";

import resume from "../img/websiteresume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import { Document } from "react-pdf/dist/entry.webpack";

// const styles = StyleSheet.create({
//   page: { backgroundColor: "tomato" },
//   section: { color: "white", textAlign: "center", margin: 30 },
// });

const Resume = () => {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  return (
    <>
      <Navbar />
      <Box
        style={{
          width: "34.5%",
          // border: "2px black solid",
          margin: "4rem auto 0 auto",
        }}
      >
        <Document file={resume}>
          <Page pageNumber={1}></Page>
        </Document>
      </Box>
      <WorkExperience />
      <Contact />
    </>
  );
};

export default Resume;
