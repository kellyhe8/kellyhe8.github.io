import React from "react";
import Navbar from "./navmenu/Navbar";
import Contact from "./Contact";
import { withStyles } from "@material-ui/core/styles";
import BlogPostTemplate from "./BlogPosts/BlogPostTemplate";
import backgroundImg from "../img/animal.jpg";
import { Typography, Box } from "@material-ui/core";

const styles = (theme) => ({
  contentArea: {
    margin: "0 auto 5rem auto",
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
  },
  paragraphTitle: {
    lineHeight: "3rem",
    margin: "0 0 1rem 0",
  },
  paragraphContent: {
    lineHeight: "2rem",
    margin: "0 1rem 1rem 1rem",
    textAlign: "justify",
  },
  signature: {
    // textAlign: "right",
    margin: "0 5rem 0 0",
  },
});

const BlogPost1 = (props) => {
  const { classes } = props;

  return (
    <>
      <Navbar />
      <Box className={classes.contentArea}>
        <BlogPostTemplate
          title='"animal"'
          subtitle='the picture I found when I searched "animal" on google'
          date="August 15, 2020"
          image={backgroundImg}
        />
        <Typography variant="h5" className={classes.paragraphTitle}>
          Why I Googled "animal"
        </Typography>
        <Typography variant="body1" className={classes.paragraphContent}>
          The most momentous occasion of my life just happened. Before I tell
          you the story of googling the word "animal", let me give you some
          backstory.
          <br />
          <br />
          I decided I wanted to make a website to try out web development more.
          I debated long and hard about what type of site to build, and I
          finally decided to make a personal portfolio and blog. After I started
          developing, I realized I wanted to have pictures for the blog and just
          other parts of the site. I needed pictures that went with my content,
          and since I didn't have any blog content, I needed to get myself some
          mock/filler pictures. But do I get random pictures? Do I get pictures
          from my camera roll of myself? Do I google images? What term would I
          google? It's pretty hard to find "random" pictures when you have to
          think about how to get a random picture. It felt weird using pictures
          of myself because then I'd have to stare at my face for hours. Torn
          about what to do, I scrolled through my camera roll and came across my
          cat album.
          <br />
          <br />
          Ever since march, I've really liked looking at cats on the internet
          because they're derpy and always behave questionably. I then made the
          genius connection that cats are animals. Naturally, my mind went to
          searching for animal pictures to use as the filler pictures. This was
          the most amazing idea of my lifetime. No one has ever used animal
          pictures before. Ever. So, I googled the word "animal". After just two
          scrolling motions of my pointer finger, I hit the jackpot, AKA the
          heading picture.
        </Typography>

        <Typography variant="h5" className={classes.paragraphTitle}>
          The Aftermath
        </Typography>
        <Typography variant="body1" className={classes.paragraphContent}>
          After finding the photo, I went back to making my site. I know what
          you're thinking, and yea, what a thriller this story is. I actually
          think I missed telling you guys a few steps. I right clicked the
          photo, clicked "Save Image", chose a directory, hit "confirm", and
          bam. When it was finally time to use this picture for the blog page, I
          realized that I now needed some filler text for the body of the blog
          as well. Lorem Ipsum? Nah, too basic. Too easy. And thus this blog
          came to life.
          <br />
          <br />
          Thanks for reading. I'll definitely update you all if there's more
          followup. I know you all are on the edge of your seats waiting for the
          next blog post. I'd also definitely love to hear your thoughts on my
          experience so feel free to contact me in the text box below.
          <br />
          <br />
        </Typography>

        <Typography variant="h6" className={classes.signature}>
          Cheerio, <br />
          Kelly
        </Typography>
      </Box>
      <Contact />
    </>
  );
};

export default withStyles(styles)(BlogPost1);
