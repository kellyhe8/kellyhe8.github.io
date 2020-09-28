import React, { Component } from "react";
import Navbar from "../navmenu/Navbar";
import Contact from "../Contact";
import { withStyles } from "@material-ui/core/styles";
import BlogPostTemplate from "./BlogPostTemplate";
import backgroundImg from "../../img/mitpurell.jpg";
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
            title='Ahhh'
            subtitle='My fall 2020 plans'
            date="September 27, 2020 - 10:47 PM"
            image={backgroundImg}
          />

          <Typography variant="body1" className={classes.paragraphContent}>
            <Typography variant="h5" className={classes.paragraphTitle}>
            The Week of July 7th
          </Typography>
            So now that it's the end of September and I'm a month into the fall semester, 
            I think I can reflect on my choices from about 2 months ago (though I still 
            have more decisions to make now, but we'll get to that).
            <br/>
            <br/>
            From the time we got kicked off campus through July 7th, we were given
            countless surveys from administration about what we wanted our fall semester
            at MIT to look like, which I acually really appreciated. Though I know schools
            are ultimately a business, I think MIT admin care more about their students than
            maybe some other schools that I've heard about... (no shade; just from hearsay). 
            From these surveys, my friends and I gathered that our class, the Juniors of 2022,
            would most likely be allowed back on campus, and I was super naive. As the covid
            cases went up, I just kept thinking, "well yea but Northeastern and BU are allowing
            people back, so I'll be allowed back too."
            <br/>
            <br/>
            Then, the week of July 7th came around and the incomplete covid plan website was leaked.
            It was supposed to be released the next morning, but people got a hold of it prematurely
            and it spread like wildfire. I was pretty numb though; getting kicked off campus back in
            March scarred me, and I refuse to let covid hurt me more😤. Anyway, the plan stated that
            only seniors who are living on campus will have the possibility of in person classes,
            though most will be online anyway, plus a few extreme exceptions. At this point, I was in
            the middle of my Salesforce internship and I felt disconnected. The past 2 years at MIT
            were the most fun and educational years of my life. I met the coolest people and learned 
            so much, not from classes, but from other people and physical interactions and conversations.
            I didn't want an entire eighth of the best years of my life to be taken away from me.
            <br/>
            <br/>
            Initially, I was going to take an entire gap semester (or year) and push back my graduation,
            and then I was going to try to recruit for a fall internship. Recruiting for fall plus working
            at Salesforce was really strange because I hadn't even been halfway through my current internship,
            but I already had to recruit again. It was rough. Absolutely no company replied to me if I applied
            online because demand for software internships was high, but supply was very low. After all, 
            we are still in a pandemic.
            <br/>
            <br/>
            Fast forward a bit, I end up finding this cool opportunity at Cogo Labs, where I can work with
            other MIT students on a machine learning project, a field I'd never had any applicable experience
            with. It sounded really awesome (and still does), and I had to take at least one class at MIT 
            in order to work there, because it was a joint program that MIT and Cogo were putting together.
            The internship started on September 8, and now that I'm 3 weeks in, I want to do a brief reflection
            and see what I want to do in the future. Also as a side node, I already have to recruit again for
            Summer 2021. I feel like I've been filling out applications for years on end.
          </Typography>

          <Typography variant="h5" className={classes.paragraphTitle}>
            Reflection and Future Plans
          </Typography>
          <Typography variant="body1" className={classes.paragraphContent}>
            I want to start by saying that I don't really have regrets, and I think I made a really 
            great choice. I'm learning a lot at Cogo, meeting great people, and taking part time student status is actually
            really nice; I'm used to taking a lot of classes at once, but I can now focus more deeply
            on less classes rather than spread myself thin. However, I also feel like I'm working 
            a lot. I'm taking two classes, though I originally wanted to take only one. I signed up for 
            two because I wasn't sure which one I wanted to take, and I wanted to figure it out then drop,
            since MIT has a very generous drop policy. The reason for this is because I planned to take a
            gap semester and graduate late anyway - I want my full 8 semesters as an MIT undergraduate student
            because I love it here. 
            <br />
            <br />
            However, I'm also torn because I can potentially still graduate in May 2022, and so why would
            I not? One part of me is saying to just graduate "on time" and work or get a Master's or move on,
            and there will be great opportunities wherever I go. The other part of me thinks that being an
            undergraduate at MIT is my favorite thing in the world. I learn so much here, and the community 
            is so amazing and unique, and so I would really want to graduate a semester later, and work will
            always be out there, but college, especially undergrad, is only now.
            <br />
            <br />
            But yeah. I'm pretty confused. The choices are: graduate May 2022 as planned then work, or graduate Dec 2022.
            Also throw in a possible M-Eng in there, possibly after or maybe after a break. From sage advice
            I've received, I think in the grand scheme of things, these few months ultimately really don't matter
            at all. I just don't even know what to put on job / internship applications now when they ask for 
            graduation date.
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
