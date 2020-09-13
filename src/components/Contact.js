import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  // TextField,
  Typography,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";
import Arrow from "@material-ui/icons/Send";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.accent2.main,
    height: "650px",
    borderTop: `3px ${theme.palette.primary.light} solid`,
    // border: "2px white solid",
  },
  form: {
    background: theme.palette.primary.main,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // border: "2px white solid",
    padding: "2rem 2rem 3rem",
    margin: "0 0 3rem 0",
    borderRadius: ".5rem",

    width: "50%",
    [theme.breakpoints.down("xl")]: {
      width: "55%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "60%",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },

    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // position: "absolute",
  },
  button: {
    // margin: "1rem 0 0 0",
    // color: "tomato",
    // borderColor: "tomato",
    width: "100px",
    // margin: "1rem 0 0 0",
    textTransform: "capitalize",
    background: theme.palette.accent2.main,
    color: "white",
    borderRadius: ".3rem",
    border: "none",
  },
  heading: {
    // color: "tomato",
    textAlign: "center",
    // textTransform: "uppercase",
    margin: "0 0 1rem 0",
    padding: "1rem 0 0 0"
  },
  socialContainer: {
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",
  },
  socialContainerIcons: {
    display: "flex",
  },
  // socialContainerIconsLabels: {
  //   display: "flex",
  //   flexDirection
  // },
  iconStyle: {
    margin: "0 1rem",
    color: theme.palette.primary.main,
    // color: theme.palette.accent1.main, //pink icons
  },
}));

// const InputField = withStyles({
//   // https://material-ui.com/customization/components/ docs here
//   // withStyles, not makeStyles
//   root: {
//     "& label.Mui-focused": {
//       // find these classes inspect element, styles
//       color: "tomato",
//     },
//     "& label": {
//       color: "tomato",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "tan",
//       },
//       "&:hover fieldset": {
//         borderColor: "tan",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "tan",
//       },
//     },
//   },
// })(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box className={classes.contactContainer} component="div">
      <Box component="form" className={classes.form}>
        <Typography className={classes.heading} variant="h5">
          Contact Me
        </Typography>
        <iframe
          title="hidden_iframe"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }} // don't redirect to google form
        ></iframe>
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfXPkz7zpqGVB_qvbCqohfa-BBSOmlJlgBbfrph6NGGCQi_eg/formResponse"
          target="hidden_iframe"
          method="POST"
        >
          <Input
            fullWidth={true}
            placeholder="Your contact info (optional)"
            // variant="filled"
            // variant="outlined"
            // inputProps={{ style: { color: "white" } }} // this is how to change the input text color
            // margin="dense"
            // size="medium"
            multiline
            name="entry.759209484"
            id="contactInfo"
          />
          <br />
          <br />
          <Input
            fullWidth={true}
            placeholder="Tell me a joke, drop your linked in, feedback about the site, food recommendations?"
            // variant="filled"
            // margin="dense"
            // size="medium"
            multiline={true}
            name="entry.1341523667"
            id="contactBody"
          />
          <br />
          <br />
          <br />
          <Box display="flex" alignItems="center">
            <Button
              variant="contained"
              className={classes.button}
              endIcon={<Arrow/>}
              onClick={() => {
                const submittedText = document.getElementById(
                  "submittedNotification"
                );
                const errorNotification = document.getElementById(
                  "errorNotification"
                );
                const contactBody = document.getElementById("contactBody");
                // const contactInfo = document.getElementById("contactInfo");

                if (contactBody.value === "") {
                  errorNotification.style.display = "block";
                  submittedText.style.display = "none";
                } else {
                  errorNotification.style.display = "none";
                  submittedText.style.display = "block";
                  // contactBody.value = "";
                  // contactInfo.value = "";
                }
              }}
              type="submit"
            >
              Send
            </Button>
            <Typography
              id="submittedNotification"
              style={{
                padding: "0 0 0 .5rem",
                display: "none",
              }}
            >
              Submitted - Thanks! 
            </Typography>
            <Typography
              id="errorNotification"
              style={{
                padding: "0 0 0 .5rem",
                display: "none",
              }}
            >
              Please enter some text
            </Typography>
          </Box>
          <br />
        </form>
      </Box>
      <Box className={classes.socialContainer}>
        {/* <Typography className={classes.heading} variant="h5">
          find me online
        </Typography> */}
        <Box className={classes.socialContainerIcons}>
          <IconButton
            href="https://www.linkedin.com/in/kellhe/"
            target="_blank"
          >
            <Box className={classes.socialContainer}>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className={classes.iconStyle}
              />
              <Typography style={{ fontSize: "1rem" }}>Linkedin</Typography>
            </Box>
          </IconButton>

          <IconButton href="https://github.com/kellyhe8" target="_blank">
            <Box className={classes.socialContainer}>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className={classes.iconStyle}
              />
              <Typography style={{ fontSize: "1rem" }}>
                Github
              </Typography>
            </Box>
          </IconButton>
          {/* <IconButton href="https://github.com/kellyhesf" target="_blank">
            <Box className={classes.socialContainer}>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className={classes.iconStyle}
              />
              <Typography style={{ fontSize: "1rem" }}>work github</Typography>
            </Box>
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
