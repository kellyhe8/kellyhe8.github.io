import React, { Component } from "react";
import Navbar from "./navmenu/Navbar";
import Contact from "./Contact";
import { withStyles } from "@material-ui/core/styles";
import BlogPostTemplate from "./BlogPosts/BlogPostTemplate";
import backgroundImg from "../img/angrycat.jpg";
import { Typography, Box, Link, List, ListItem } from "@material-ui/core";

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
  linktable: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  listLink: {
    color: theme.palette.accent1.main,
    flexBasis: "20%",
    [theme.breakpoints.down("md")]: {
      flexBasis: "100%",
    },
  },
  listBody: {
    flexBasis: "77%",
    [theme.breakpoints.down("md")]: {
      flexBasis: "100%",
    },
  },
  signature: {
    // textAlign: "right",
    margin: "0 5rem 0 0",
  },
});

class BlogPost2 extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <Navbar />
        <Box className={classes.contentArea}>
          <BlogPostTemplate
            title="Fan of Cats"
            subtitle="I like cats now"
            date="August 15, 2020 - 11:58 PM"
            image={backgroundImg}
          />
          <Typography variant="h5" className={classes.paragraphTitle}>
            When I Started Liking Cats
          </Typography>
          <Typography variant="body1" className={classes.paragraphContent}>
            4/1/20 22:18:36.
            <br /> <br />
            I've never really been a huge animal person. Don't get me wrong, I
            think animals are cool and all, but I never really had pets growing
            up, meaning I've never had the pet bond with any animal before, and
            so animals didn't cross my mind as much. Around March, I just
            started really liking cats all of a sudden. I really don't know why.
            It'd probably been building up for a few months prior - I think it
            could've had something to do with the fact that I went to Italy in
            January and stayed with a family who had 3 really soft and cute
            cats. But anyway, then when we got kicked off campus and had to
            quarantine for 5 months (and counting. it's actually been exactly 5
            months today! 😮), and so I guess I'm now like a cat lady without
            any cats. An internet cat lady. An e-cat lady.
          </Typography>

          <Typography variant="h5" className={classes.paragraphTitle}>
            e-Recommendations and Thoughts
          </Typography>
          <Typography variant="body1" className={classes.paragraphContent}>
            <List>
              <ListItem divider className={classes.linktable}>
                <Link
                  href="https://www.reddit.com/r/aww/"
                  variant="body1"
                  className={classes.listLink}
                >
                  r/aww subreddit
                </Link>
                <Typography variant="body1" className={classes.listBody}>
                  Even though this is "A subreddit for cute and cuddly
                  pictures", implying that it's a space for all cute and cuddly
                  animals, you will find an overwhelming number of cat pictures
                  because they're the best.
                </Typography>
              </ListItem>
              <ListItem divider className={classes.linktable}>
                <Link
                  href="https://www.instagram.com/pleasantcats/"
                  variant="body1"
                  className={classes.listLink}
                >
                  @pleasantcats on instagram
                </Link>
                <Typography variant="body1" className={classes.listBody}>
                  This one just showed up on my feed one day and it has some
                  pretty quality content, emphasis on the some. The content is
                  super varied, which is good, but that means some videos are
                  bad and some are good. What exactly defines a good cat video
                  vs. a bad vat video? Well that's a topic for another blog
                  post.
                </Typography>
              </ListItem>
              <ListItem divider className={classes.linktable}>
                <Link
                  href="https://www.instagram.com/cats_of_instagram"
                  variant="body1"
                  className={classes.listLink}
                >
                  @cats_of_instagram on instagram
                </Link>
                <Typography variant="body1" className={classes.listBody}>
                  I just looked up "cats" on instagram and this showed up. It
                  has 11.6 million followers at this point, so I'm at least
                  someone would recommend them. After scanning their page pretty
                  quickly, I think their videos are more on the cute side rather
                  than derpy or funny cat side. I personally like the derp, but
                  I definitely see the appeal of the cute.
                </Typography>
              </ListItem>
              <ListItem divider className={classes.linktable}>
                <Link
                  href="https://www.instagram.com/catsdoingthings"
                  variant="body1"
                  className={classes.listLink}
                >
                  @catsdoingthings on instagram
                </Link>
                <Typography variant="body1" className={classes.listBody}>
                  So this one also came up when I searched "cats" on instagram,
                  but it seems to have more of the derp vibe that I talked about
                  in the last point. It has 1.1 million followers which is
                  nothing to scoff at, but significantly less than
                  @cats_of_instagram! After looking at their page for a bit,
                  they're definitely catering towards those who like cat memes
                  other funny cat media. Definitely up my alley.
                </Typography>
              </ListItem>
            </List>
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

export default withStyles(styles)(BlogPost2);
