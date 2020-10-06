import React from "react";
import Navbar from "./navmenu/Navbar";
import Contact from "./Contact";
import { Typography, Box } from "@material-ui/core";
// import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import BlogListEntry from "./BlogPosts/BlogListEntry";
import animalImg from "../img/animal.jpg";
import angryCatImg from "../img/angrycat.jpg";
import mitpurell from "../img/mitpurell.jpg";
import chapstick from "../img/chapstick.png";

const useStyles = makeStyles((theme) => ({
  middleContainer: {
    margin: "3rem auto 6rem auto",
    padding: "2rem",
    overflow: "hidden",
    width: "60%",
    [theme.breakpoints.down("xl")]: {
      width: "60%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "65%",
    },
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    // border: "2px white solid",
    // borderRadius: ".5rem",
  },
}));

const Blogs = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box className={classes.middleContainer}>
        <Typography
          variant="h1"
          style={{
            margin: "1em 0 .8em 0",
            padding: "0 0 1em 0",
            textAlign: "center",
            fontSize: "2rem",
            lineHeight: "1.15rem",
            borderBottom: `1px white solid`,
          }}
        >
          Blog
        </Typography>
        {/* <Typography
          variant="h2"
          style={{
            margin: "0 0 3em 0",
            padding: "0 0 2em 0",
            textAlign: "center",
            fontSize: "1.2rem",
            borderBottom: `2px ${theme.palette.accent1.main} solid`,
          }}
        >
          attempting to write
        </Typography> */}
        <BlogListEntry
          image={chapstick}
          title="This Chapstick"
          subtitle="Get this chapstick"
          bloglink="/blogpost4"
          date="October 1, 2020 - 3:28 AM"
        />
        {/* <BlogListEntry
          image={mitpurell}
          title="Making Decisions"
          subtitle="Fall 2020"
          bloglink="/blogpost3"
          date="September 27, 2020 - 10:47 PM"
        /> */}
        <BlogListEntry
          image={angryCatImg}
          title="Fan of Cats"
          subtitle="I like cats now"
          bloglink="/blogpost2"
          date="August 15, 2020 - 11:58 PM"
        />
        <BlogListEntry
          image={animalImg}
          title='"animal"'
          subtitle='The picture I found when I searched "animal" on Google'
          bloglink="/blogpost1"
          date="August 15, 2020 - 10:32 PM"
        />
        More coming soon!
      </Box>
      <Contact />
    </>
  );
};

export default Blogs;
