import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { LinkedIn, GitHub } from "@material-ui/icons";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiBottomNavigationAction-root": {
      // TODO is this "& space or no space"
      minwidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "white",
      "&:hover": {
        fill: theme.palette.accent1.main,
        fontSize: "3.8em",
      },
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <BottomNavigation
      width="auto"
      style={{ background: theme.palette.primary.dark }}
    >
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        href="https://www.linkedin.com/in/kellhe/"
        target="_blank"
        icon={<LinkedIn fontSize="large" />}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        href="https://github.com/kellyhe8"
        target="_blank"
        icon={<GitHub fontSize="large" />}
      />
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0 }}
        href="https://github.com/kellyhesf"
        target="_blank"
        icon={<GitHub fontSize="large" />}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
};

export default Footer;
