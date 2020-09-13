import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const styles = (theme) => ({
  timelineItem: {
    textAlign: "center", // centers the video
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
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      // float: "left",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: theme.palette.accent2.main, // bottom line of item
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
    margin: "0 2rem 0 auto",
    fontSize: "1.5rem",
    background: theme.palette.accent1.main,
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
  // video: {
  //   display: "block",
  //   margin: "auto",
  // },
});

const WorkExperienceEntry = (props) => {
  const { classes } = props;
  const theme = useTheme();

  return (
    <>
      <Box className={classes.timelineItem} component="div">
        <Typography // company style
          variant="h5"
          style={{
            // color: "white",
            textAlign: "center",
            padding: "0 0 .3rem 0",
            // textTransform: "lowercase",
          }}
        >
          {props.company}
        </Typography>
        <Typography // role location and date style
          variant="body1"
          style={{
            color: theme.palette.accent1.main,
            textAlign: "center",
            padding: "0 0 .6rem 0",
            // textTransform: "lowercase",
          }}
        >
          {props.role} | {props.location} <br />
          {props.date}
        </Typography>
        <Typography
          variant="subtitle1" // description style
          style={{
            // color: theme.palette.accent1.main,
            fontSize: "1rem",
            // fontWeight: "",
            textAlign: "justify",
            // textTransform: "lowercase",
            [theme.breakpoints.down("xl")]: {
              textAlign: "justify",
            },
            // [theme.breakpoints.down("md")]: {
            //   width: "95%",
            // },
            [theme.breakpoints.down("md")]: {
              textAlign: "left",
            },
          }}
        >
          {props.description}
        </Typography>
        {props.video && (
          <video width="200" height="400" src={props.video} controls></video>
        )}
      </Box>
    </>
  );
};

export default withStyles(styles)(WorkExperienceEntry);
