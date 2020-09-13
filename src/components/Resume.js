import React from "react";
import Navbar from "./navmenu/Navbar";
import WorkExperience from "./timeline/WorkExperience";
import Contact from "./Contact";
// import { Page, Text, View, Document, StyleSheet, pdfjs } from "react-pdf";
// import { Document, Page, pdfjs } from "react-pdf";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import resume from "../img/websiteresume.jpg";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// import { Document } from "react-pdf/dist/entry.webpack";

// const styles = StyleSheet.create({
//   page: { backgroundColor: "tomato" },
//   section: { color: "white", textAlign: "center", margin: 30 },
// });

const useStyles = makeStyles((theme) => ({
  resumeBox: {
    width:"65%", 
    margin: "4rem auto 0 auto",
    [theme.breakpoints.down("xl")]: {
      width: "55%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  resume: {
    maxWidth:"100%",
    
  }
}))

const Resume = () => {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Box className={classes.resumeBox}>
      <img src={resume} className={classes.resume}/>
      </Box>
      
      {/* <Box
        style={{
          width: "34.5%",
          // border: "2px black solid",
          margin: "4rem auto 0 auto",
        }}
      >
        <Document file={resume}>
          <Page pageNumber={1}></Page>
        </Document>
      </Box> */}
      <WorkExperience />
      <Contact />
    </>
  );
};

export default Resume;
