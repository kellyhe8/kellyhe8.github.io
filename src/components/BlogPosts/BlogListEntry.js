import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import { Box, Typography, Avatar, Link, Divider } from "@material-ui/core";

const styles = (theme) => ({
  avatarBox: {
    flexBasis: "18%",
    justifyContent: "center",
    border: "1px white solid",
    [theme.breakpoints.down("md")]: {
      flexBasis: "24%",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "32%",
    },
  },
  avatarPic: {
    width: "90%",
    height: "90%",
    minWidth: "40px",
    border: `.1rem ${theme.palette.accent1.main} solid`,
    margin: "auto",
    variant: "circle",
  },
  wordBox: {
    flexBasis: "80%",
    border: "1px white solid",
    [theme.breakpoints.down("md")]: {
      flexBasis: "74%",
    },
    [theme.breakpoints.down("sm")]: {
      flexBasis: "66%",
    },
  },
});

const BlogListEntry = (props) => {
  const { classes } = props;

  //   const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Box style={{ margin: "2rem 0 2rem 0" }}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            minHeight: "100px",
            // border: "2px white solid",
            alignItems: "center",
          }}
        >
          <Box className={classes.avatarBox}>
            <Avatar
              alt="blog picture"
              src={props.image}
              className={classes.avatarPic}
            ></Avatar>
          </Box>
          <Box className={classes.wordBox}>
            <Link href={props.bloglink} variant="h6" style={{ color: "white" }}>
              {props.title}
            </Link>
            <Typography
              variant="body1"
              style={{
                color: theme.palette.accent1.main,
                lineHeight: "1.5rem",
              }}
            >
              {props.subtitle}
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: theme.palette.primary.light,
                lineHeight: "1.5rem",
              }}
            >
              {props.date}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default withStyles(styles)(BlogListEntry);
