import React from "react"; // rafce is shortcut
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../img/me6.jpg";
import backgroundImg from "../img/background14a.png";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  // box that holds everything to center things
  contentArea: {
    // position: "fixed",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    // width: "100%",
    height: "700px",
    background: `url(${backgroundImg}) repeat center center`,
    zIndex: 1, // specifies stack order
    // border: "2px white solid",
    borderBottom: `3px ${theme.palette.primary.light} solid`,
    [theme.breakpoints.down("xl")]: {
      height: "600px",
    },
    [theme.breakpoints.down("md")]: {
      height: "600px",
    },
  },
  avatar: {
    display: "block",
    margin: theme.spacing(3),
    width: theme.spacing(25), // different way to set size of avatar pic
    height: theme.spacing(25),
    // borderRadius: "0.5rem",
    // border: `.1rem ${theme.palette.accent2.main} solid`,
  },
  title: {
    color: theme.palette.primary.dark,
    marginBottom: "1rem",
  },
  subtitle: {
    color: theme.palette.primary.dark,
    marginBottom: "3rem",
  },
  highlight2: {
    color: theme.palette.accent2.light,
  },
}));

const Intro = () => {
  const classes = useStyles();

  return (
    <Box className={classes.contentArea}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="kelly he" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        Hey I'm <span className={classes.highlight2}>Kelly</span>
        {/* <Typed strings={["hey i'm kelly"]} typeSpeed={80}></Typed> */}
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Welcome to my website!",
            "I'm a new grad and software engineer",
            "I graduated from MIT in 2022 with a Bachelor's Degree in Electrical Engineering and Computer Science",
            "Feel free to give me feedback on the site and contact me at the bottom of the page",
            "I built this using React and Material UI",
            "You can find the code on my github",
          ]}
          typeSpeed={25}
          loop
        ></Typed>
      </Typography>
    </Box>
  );
};

export default Intro;

// react-typed docs https://www.npmjs.com/package/react-typed
