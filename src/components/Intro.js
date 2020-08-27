import React from "react"; // rafce is shortcut
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../img/me.jpg";
import backgroundImg from "../img/background11.png";

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
    background: `url(${backgroundImg}) no-repeat center center`,
    zIndex: 1, // specifies stack order
    // border: "2px white solid",
    borderBottom: `3px ${theme.palette.primary.light} solid`,
  },
  avatar: {
    display: "block",
    margin: theme.spacing(3),
    width: theme.spacing(20), // different way to set size of avatar pic
    height: theme.spacing(20),
    border: `.1rem ${theme.palette.accent2.main} solid`,
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
        hey i'm <span className={classes.highlight2}>kelly</span>
        {/* <Typed strings={["hey i'm kelly"]} typeSpeed={80}></Typed> */}
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "howdy do?",
            "scroll down to see some stuff",
            "there's also a menu on the top right",
            "better blog posts hopefully coming soon...",
            "this site is built using react and material ui, both of which i just started learning...",
            "but you can find the code for this site on my personal github",
            "this font's question mark is interesting ????",
          ]}
          typeSpeed={50}
          loop
        ></Typed>
      </Typography>
    </Box>
  );
};

export default Intro;

// react-typed docs https://www.npmjs.com/package/react-typed