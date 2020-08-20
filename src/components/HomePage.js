import React from "react";
import Navbar from "./navmenu/Navbar";
import Intro from "./Intro";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";
import WorkExperience from "./timeline/WorkExperience";
import Contact from "./Contact";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  // making particles span the whole screen. play around with params, enable, valuearea, etc
  particlesCanva: {
    position: "absolute",
    obacity: "0.3",
  },
  bodyContent: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Particles
        canvasClassName={classes.particlesCanva}
        height="600px"
        width="100%"
        params={{
          particles: {
            number: {
              value: 36,
              density: {
                enable: true,
                value_area: 1000,
              },
              speed: 1,
            },
            shape: {
              type: "star",
              stroke: {
                width: 1,
                // color: "tomato", // doesn't work?
              },
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: true,
              },
            },
            // opacity: {
            //   value: 1,
            //   random: true,
            //   anim: {
            //     enable: true,
            //     speed: 1,
            //     opacity_min: 0.1,
            //     sync: true,
            //   },
            // },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
        }}
      />
      <Intro />
      <WorkExperience />
      <Contact />
    </div>
  );
};

export default Home;

/* react-particles-js docs https://www.npmjs.com/package/react-particles-js
  type: star or circle
  value property is size of the dots

          Home
  Intro, Work Experience, Contact
      Work ExperienceEntry
*/
