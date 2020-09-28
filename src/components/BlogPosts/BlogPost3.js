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
            title='Making Decisions'
            subtitle='Fall 2020'
            date="September 27, 2020 - 10:47 PM"
            image={backgroundImg}
          />
          <Typography variant="h5" className={classes.paragraphTitle}>
            The Week of July 7th
          </Typography>
          <Typography variant="body1" className={classes.paragraphContent}>
            
            So now that it's the end of September, I can reflect on my 
            choices from 2 months ago about what to do this fall, though
            I now have to make decisions about the long run future 
            <span role="img" aria-label="thinking emoji"> 😬</span>.
            <br/>
            <br/>
            From March 11th, when we got kicked off campus, to July 7th, we were given
            countless surveys from administration about what we wanted our fall semester
            at MIT to look like, which I acually really appreciated. Though I know schools
            are ultimately a business, I think MIT admin really tried to take into account
            students wants while considering the obvious health concerns. 
            From these surveys, my friends and I were under the impression that the Juniors of 2022,
            would most likely be allowed back on campus, and everything would be great
            (super naive, I know, but maybe just in denial). As the covid
            cases went up, I just kept thinking, "well yeah, but Northeastern and BU are allowing
            people back, so I'll be allowed back too, and it'll be great."
            <br/>
            <br/>
            Then, the week of July 7th came around, the incomplete covid plan website was leaked.
            Only seniors were allowed back, and everything was virtual. Looking back now, this was
            definitely the right call in terms of safety, but it was tragic for all the students
            like me who feel that being on campus with the MIT community is the majority
            of the learning experience. Classes and learning just aren't the same without that aspect.
            I was pretty numb though after hearing the news; getting kicked off campus back in
            March scarred me, and I refused to let covid hurt me more 
            <span role="img" aria-label="smoke nose emoji"> 😤</span>. 
            <br/>
            <br/>
            At this point, I was in the middle of my Salesforce internship and I felt lost and disconnected. 
            I didn't want an entire eighth of the best years of my life to be taken away from me.
            So what do I do? Take a gap semester and graduate in Dec 2020 instead? What would I do in
            the gap semester? Work? Personal projects? ~Startup~?
            <br/>
            <br/>
            From all the LinkedIn and Facebook groups, I knew I wasn't the only one in this position.
            So many people wanted to now find fall internships because they also didn't want to 
            sign up for Zoom University, which meant that it was going to be pretty difficult to get
            any company to respond to online applications.
            Recruiting for fall plus working at Salesforce was also really strange because I hadn't 
            even been halfway through my internship and I was already looking for another job.
            <br/>
            <br/>
            Fast forward a bit, I end up finding this really cool opportunity at Cogo Labs, where I would work with
            other MIT students on a machine learning and big data project (oOoOh hot *buzz* words), 
            while taking at least one class. It was an internship that Cogo put together with MIT to help 
            make up for some of the interaction lost with virtual learning. 
            The internship started on September 8, and now that I'm 3 weeks in, I want to do a brief reflection
            and think what I want to do in the future. Also as a side node, I already have to recruit again for
            Summer 2021. I feel like I've been filling out applications for years on end.
          </Typography>

          <Typography variant="h5" className={classes.paragraphTitle}>
            Reflection and Future Plans
          </Typography>
          <Typography variant="body1" className={classes.paragraphContent}>
            I'm learning a lot at Cogo, meeting great people, and taking part time student status is actually
            really nice; I'm used to taking a lot of classes at once, but I can now focus more deeply
            on less classes rather than spread myself thin. However, I also feel like I'm constantly working. 
            I'm taking two classes, though I originally wanted to take only one. I signed up for 
            two because I wasn't sure which one I wanted to take, and I wanted to figure it out then drop,
            since MIT has a very generous drop policy. 
            <br />
            <br />
            Because I'm taking part time student status, it's very feasible for me to still graduate in May 2022,
            which is where I'm starting to get confused about what to do. One part of me says, why would I stay 
            in school longer than I need to? Most people jump at the oopportunity to graduate early. But the 
            other part of me says that MIT provides an experience that you just can't get many other places, if at all.
            The community is so supportive, driven, passionate, and smart. But then again - maybe industry work 
            will be just as great at the right copmany; I don't exactly know everything that's out there, and the
            only way to find out would be to experience it myself. I guess my main debate is whether
            I want to graduate later because I think undergrad is a *once--in--a--lifetime* experience, 
            or whether that would be a "waste of time" and work or higher education and whatnot would
            be better.
            <br />
            <br />
            I think that in the grand scheme of things, these few months difference really won't matter
            at all, but it's still a decision I need to make. As for short term consequences,
            I don't know what to put in the "Graduation Date" field of job applications anymore.
            Also am I still a '22? Do I still hold the privilege of wearing the 2022 brass rat 
            <span role="img" aria-label="thinking emoji"> 🤔</span>?
            <br />
            <br />
          </Typography>

          <Typography variant="h6" className={classes.signature}>
            Cheerio, <br />
            Kelly
          </Typography>

          <Typography variant="body1" className={classes.paragraphContent}>
            <br />
            <br />
            P.S. I apologize for using so many emojis <span role="img" aria-label="pleading emoji">🥺</span>
          </Typography>

        </Box>
        <Contact />
      </>
    );
  }
}

export default withStyles(styles)(BlogPost1);
