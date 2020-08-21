import React from "react";
import Navbar from "./navmenu/Navbar";
import Contact from "./Contact";
import { Typography, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import BlogListEntry from "./BlogPosts/BlogListEntry";
import animalImg from "../img/animal.jpg";
import angryCatImg from "../img/angrycat.jpg";

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
    border: "2px white solid",
    borderRadius: ".5rem",
  },
}));

const Blogs = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Navbar />
      <Box className={classes.middleContainer}>
        <Typography
          variant="h1"
          style={{
            margin: "1em 0 .8em 0",
            textAlign: "center",
            fontSize: "2rem",
            lineHeight: "1.15rem",
          }}
        >
          blogs
        </Typography>
        <Typography
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
        </Typography>
        <BlogListEntry
          image={animalImg}
          title='"animal"'
          subtitle='the picture I found when I searched "animal" on google'
          bloglink="blogpost1"
          date="August 15, 2020"
        />
        <BlogListEntry
          image={angryCatImg}
          title="fan of cats"
          subtitle="the story of me and cats"
          bloglink="blogpost2"
          date="August 15, 2020"
        />
        more coming soon...
      </Box>
      <Contact />
    </>
  );
};

export default Blogs;
