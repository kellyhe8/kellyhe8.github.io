import React, { Component } from "react";
import Navbar from "../navmenu/Navbar";
import Contact from "../Contact";
import { withStyles } from "@material-ui/core/styles";
import BlogPostTemplate from "./BlogPostTemplate";
import backgroundImg from "../../img/chapstick.png";
import { Typography, Box, Link } from "@material-ui/core";
// import { useTheme } from "@material-ui/core/styles";

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
  listLink: {
    color: theme.palette.accent1.main
  }
});

class BlogPost1 extends Component {
  render() {
    const { classes } = this.props;
    // const theme = useTheme();

    return (
      <>
        <Navbar />
        <Box className={classes.contentArea}>
          <BlogPostTemplate
            title='This Chapstick'
            subtitle='Get this chapstick'
            date="October 1, 2020 - 3:28 AM"
            image={backgroundImg}
          />
          <Typography variant="h5" className={classes.paragraphTitle}>
            Badger Tea Tree & Lemon Lip Balm, <br />Herbal Lip Care, Soothing Relief for Lips
          </Typography>
          <Typography variant="body1" className={classes.paragraphContent}>
            I got this chapstick at Wegman's (I always get Wegman's And
            Whole Foods mixed up because they have the same vibe, but I'm pretty sure it was Wegman's). 
            So my chapstick routine
            is: <br />
            <Box style={{margin:"1rem 0 1rem 4rem"}}>1. Put on a thick-ish layer of chapstick before I sleep <br />
            2. Wake up </Box>
            Even though it's a very complicated routine, I've been 
            doing it for years so I'm pretty good at it now. I've tried 
            a lot of different types and brands of chapsticks
            including EOS, the original ChapStick brand,
            Vaseline, Burt's Bees, Blistex, Sugar, Neutrogena, random ones I got for free, 
            etc. - and those are just off the top of my head at 4am. 
            <br />
            <br />
            From my extensive experience, I definitely know
            the qualities I don't like in chapsticks; there are some that leave a weird
            film on the inner lip part when you wake up and it's not great, and
            some others seem to disappear or dry really quickly and don't do anything for moisturization.
            Of the ones I listed, I definitely liked Blistex and Burt's Bees the most; Blistex 
            is super shiny when applied though, and you use your finger rather than a tube 
            directly on your lips. Burt's Bees is really matte, but it sometimes leaves the 
            film, and one time, the formula got really dry and hard to glide (it only happened with 
            one of them, and I've bought the Burt's Bees one at least 4 times).
            <br />
            <br />
            The perfect chapstick would be one that never leaves the film (it kind of
            feels like excessive lip skin peeling off; it's terrible #iykyk), actually makes my lips feel naturally hydrated, 
            feels like
            it absorbed into my lips with no residue in the morning,
            and has that cooling, tingly feeling (controversial, I know).
            THIS BADGER ONE DOES IT ALL! It's herbal smelling for sure, dare I say medicinal,
            and definitely not 
            fruity or one of those smells that makes you want to eat it, but
            I personally really like the herbal and tea tree oil feel.
            It's also not minty, but it gives that cooling sensation that mint flavored
            chapsticks also have because of the tea tree oil. It's also the perfect balance
            between a matte and shiny finish. This property doesn't have as much weight as the ones
            I listed earlier, but it's definitely a plus.
            <br />
            <br />
            But yeah, if any of you guys are in the market for a new chapstick, she's the one. 
            I did a quick google search and found it on the 
            <Link 
              href = "https://www.badgerbalm.com/p-569-herbal-lip-care-with-tea-tree-and-lemon-balm.aspx?gclid=CjwKCAjw_NX7BRA1EiwA2dpg0pew8TYQ9MujeEojGyoGAZcRFyGTNXbDsEx4XjEOf50pcT1jRIfPbRoCzuMQAvD_BwE"
              variant = "body1"
              className={classes.listLink}
            > official online site </Link> or on 
            <Link 
              href="https://www.amazon.com/BADGER-Tree-Lemon-Balm-Ounce/dp/B00VDFKO16"
              variant="body1"
              className={classes.listLink}
            > Amazon</Link>, or you can check Wegman's.
            If you actually do try it or have tried it, let me know what you think in the contact box below!

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
