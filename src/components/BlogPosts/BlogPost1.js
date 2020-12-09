import React, { Component } from "react";
import Navbar from "../navmenu/Navbar";
import Contact from "../Contact";
import { withStyles } from "@material-ui/core/styles";
import BlogPostTemplate from "./BlogPostTemplate";
import backgroundImg from "../../img/animal.jpg";
import { Typography, Box } from "@material-ui/core";

const styles = (theme) => ({
  contentArea: {
    margin: "0 auto 5rem auto",
    width: "60%",
    [theme.breakpoints.down("xl")]: {
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "60%",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
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

class BlogPost1 extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Navbar />
        <Box className={classes.contentArea}>
          <BlogPostTemplate
            title='"animal"'
            subtitle='A picture I found when I searched "animal" on Google'
            date="August 15, 2020 - 10:32 PM"
            image={backgroundImg}
          />
          <Typography variant="h5" className={classes.paragraphTitle}>
            Why I Googled "animal"
          </Typography>
          <Typography variant="body1" className={classes.paragraphContent}>
            What a momentous occasion. Before I tell
            you the story of googling the word "animal", let me give you some
            backstory.
            <br />
            <br />
            I decided I wanted to make this website to try out web development. 
            I debated long and hard about what content I wanted, and
            I finally decided to make a personal portfolio and blog. After I
            started developing, I realized I needed to have pictures for the
            blog and other parts of the site. 
            <br />
            <br />
            I need pictures that go
            with my blog content, but I had no content. Is there a Lorem Ipsum for images?
            I needed to get myself some mock/filler pictures, but where do I get random
            pictures? Do I get pictures of myself from my camera roll? Do I
            google images? What term would I google? It's pretty hard to find
            "random" pictures when you have to think about how to get a random
            picture. It felt weird using pictures of myself because then I'd
            have to stare at my face for hours. Torn about what to do, I
            scrolled through my camera roll and came across my cat album.
            <br />
            <br />
            I've been working on my cat album since March; so many derpy cats.
            I then made the genius connection that cats are animals. 
            "animals" = google-able term. Could this be the answer to all my questions?
            This was looking like my all-time best idea. After
            just two scrolling motions of my pointer finger, I hit the jackpot,
            AKA the heading picture.
          </Typography>

          <Typography variant="h5" className={classes.paragraphTitle}>
            The Aftermath
          </Typography>
          <Typography variant="body1" className={classes.paragraphContent}>
            After finding the photo, I went back to making my site. I know what
            you're thinking, and yea, what a thriller this is. I actually think
            I missed telling you guys a few steps: I right clicked the photo,
            clicked "Save Image", chose a directory, hit "confirm", and bam!
            <br />
            <br />
            When it was finally time to use this picture for the blog page, I
            realized that I now needed filler text for the body of the blog
            as well. Lorem Ipsum? Nah, too basic. Too easy. I like a challenge.
            And thus this blog post spawned.
            <br />
            <br />
            Thanks for reading. I'll definitely update you all if there's more
            follow-up. I know you all are on the edge of your seats waiting for
            the next blog post. I'd also definitely love to hear your thoughts
            on this experience so feel free to contact me in the text box below.
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
  }
}

export default withStyles(styles)(BlogPost1);
