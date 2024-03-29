import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import WorkExperienceEntry from "./WorkExperienceEntry";
import salesforceVideo from "../../Videos/salesforcedemo.mov";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // background: theme.palette.primary.dark,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 0 6rem 0",
  },
  contentArea: {
    width: "70%",
    [theme.breakpoints.down("xl")]: {
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "99%",
    },
  },
  timeline: {
    position: "relative",
    padding: "0rem",
    margin: "0 auto",
    "&:before": {
      content: "''", // need double quotes otherwise wont' work?
      position: "absolute",
      height: "100%",
      border: `1px ${theme.palette.accent2.dark} solid`, // vertical timeline
      right: "20px",
      top: 0,
    },
    "&:after": {
      content: "''", // need double quotes otherwise wont' work?
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      // medium screens centered. 960 px
      padding: "0rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },

  timelineItem: {
    padding: "1rem",
    borderBottom: `2px solid ${theme.palette.accent2.main}`,
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    // arrow
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: `${theme.palette.accent2.main} ${theme.palette.accent2.main} transparent transparent`,
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    "&:after": {
      content: "''",
      position: "absolute",
    },
    [theme.breakpoints.up("lg")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: theme.palette.accent1.main, // bottom line of item
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: `transparent transparent ${theme.palette.accent2.main} ${theme.palette.accent2.main}`,
      }, // the before is the arrow
    },
  },
  timelineYear: {
    textAlign: "center",
    maxWidth: "6.5rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.3rem",
    background: theme.palette.accent1.light,
    // color: "white",
    lineheight: 1,
    padding: "0.5rem 1rem", // 0.5rem 0 1rem
    // borderRadius: "1.2rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    // color: "tomato",
    padding: "0 0 2rem 0",
    // textTransform: "lowercase",
  },
  subheading: {
    // color: "tomato",
    padding: "0 0 3rem 0",
    // textTransform: "lowercase",
  },
}));

const WorkExperience = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Navbar /> */}
      <Box className={classes.mainContainer} component="header">
        <Box className={classes.contentArea}>
          <Typography className={classes.heading} variant="h5" align="center">
            Software Experience
          </Typography>
          {/* <Typography
            className={classes.subheading}
            variant="h6"
            align="center"
          >
            more in depth descriptions about my work
          </Typography> */}
          <Box className={classes.timeline} component="div">
            <Typography
              className={`${classes.timelineYear} ${classes.timelineItem}`}
              variant="h3"
            >
              2022
            </Typography>
            <WorkExperienceEntry
              company="Citadel Securities"
              role="Software Engineer"
              location="NYC, NY"
              date="Sep 2022"
              description="I'm currently on CES."
            />
            <Typography
              className={`${classes.timelineYear} ${classes.timelineItem}`}
              variant="h3"
            >
              2021
            </Typography>
            <WorkExperienceEntry
              company="Citadel"
              role="Software Engineering Intern"
              location="NYC, NY"
              date="Jun 2021 - Aug 2021"
              description="I designed the backend data model for a web application to monitor SPACs as part of the Equities Tech team.
              I created a backend GraphQL API and web app functionality using Flask and SQLalchemy. I also helped with
              parts of the front end design."
            />
            <WorkExperienceEntry
              company="Facebook"
              role="Software Engineering Intern"
              location="Menlo Park, CA (remote)"
              date="Jan 2021 - Mar 2021"
              description="I worked on the Community Products Integrity team, which manages design that uphold community integrity - things like reporting or flagging.
              I personally implemented a screen that allows users to specify which rules were broken when reporting
              a post within a group to the group admin."

            />
            <Typography
              className={`${classes.timelineYear} ${classes.timelineItem}`}
              variant="h3"
            >
              2020
            </Typography>
            <WorkExperienceEntry
              company="Cogo Labs"
              role="Software Engineering Intern"
              location="Cambridge, MA"
              date="Sep 2020 - Dec 2020"
              description="Cogo Labs' mission is to launch and accelerate startup companies by leveraging their tech and analytics.
              I worked on a project with 3 other interns to identify viable public companies that have potential to 
              excel from stagnation. We looked into how to isolate unsuccessful and successful
              traits for small cap companies and created a machine learning model using SQL and Python."

            />
            <WorkExperienceEntry
              company="Salesforce"
              role="Software Engineering Intern"
              location="Burlington, MA (remote)"
              date="Jun 2020 - Aug 2020"
              description="I integrated Google Assistant with the Salesforce e-commerce platform. The project helps showcase the potential of headless commerce
              to deliver shopping experiences on new and innovative platforms. It also enhanced the shopping experience for 
              for people with visual impairments. I set a precedence for modular front end devlopment by utilizing the 
              back end for front end (BFF) pattern. The BFF's function was to resolve data from the commerce SDK and create a GraphQL API. 
              This API was also used by two other team members, and we worked together to integrate the necessary functionalities
              for their projects, which was displaying product comparisons and product details page. I then used Dialogflow, which handles the natural 
              language processing and intent-matching, to integrate google assistant to the BFF.
              Below is a demo of the functionality."
              video={salesforceVideo}
            />
            <Typography
              className={`${classes.timelineYear} ${classes.timelineItem}`}
              variant="h3"
            >
              2019
            </Typography>
            <WorkExperienceEntry
              company="Youth Global Network: Project-C"
              role="Software Engineering Intern"
              location="Sha Tin, Hong Kong"
              date="Jun 2019 - Aug 2019"
              description="Project-C's mission is to teach underprivileged children coding by providing an easy-to-learn app development 
              platform. During my internship, I analyzed data about the students using this platform, and 
              I calculated statistics that would be meaningful to teachers such as usage time,
              frequency of app components, and tutorial completion time. Near the end, I began creating teacher
              reports pages to provide a portal for them to see and best utilize these results."
            />
            {/* <WorkExperienceEntry
              company="Hosta Labs"
              role="Software Engineering Extern"
              location="Cambridge, MA"
              date="Jan 2019"
              description="Hosta Labs is creating 3D, interactive models of spaces from 2D images. During my month as an extern,
              I compared the accuracy of their depth perception algorithms to those built-in on newer iPhones. 
              I also worked on the iOS application, displaying a mock 3D model in the app, which provided a proof
              of concept for the generated models to go."
            /> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WorkExperience;
