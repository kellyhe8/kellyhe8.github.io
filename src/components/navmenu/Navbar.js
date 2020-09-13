import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import Footer from "./Footer";
import favicon from "../../img/drawavatarnobkg.png";

import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

import {
  Menu,
  AssignmentInd,
  Home,
  Book,
  ThumbsUpDown,
} from "@material-ui/icons";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "1rem auto",
    width: theme.spacing(15), // different way to set size of avatar pic
    height: theme.spacing(15),
    // borderRadius: "0.5rem",
    // border: `.1rem ${theme.palette.accent2.main} solid`,
  },
  menuItem: {
    margin: "1rem auto",
  },
  appbarContent: {
    borderBottom: `3px ${theme.palette.primary.light} solid`,
    alignItems: "center",
    background: theme.palette.primary.dark,
  },
  contentArea: {
    display: "flex",
    justifyContent: "space-between",
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
  highlight1: {
    color: theme.palette.accent1.main,
  },
  highlight2: {
    color: theme.palette.accent2.main,
  },
}));

const menuIcons = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/resume",
  },
  {
    listIcon: <Book />,
    listText: "Blog",
    listPath: "/blogs",
  },
  {
    listIcon: <ThumbsUpDown />,
    listText: "Recs and Faves",
    listPath: "/recsandfaves",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <img className={classes.avatar} src={favicon} alt=""></img>
      <Typography variant="h5" align="center" style={{ margin: "1rem" }}>
        Kelly He
      </Typography>
      <Divider />
      <List>
        {menuIcons.map((lsItem, key) => (
          <ListItem button key={key} component={Link} to={lsItem.listPath}>
            <ListItemIcon
              className={`${classes.listItem} ${classes.highlight2}`}
            >
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={lsItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" className={classes.appbarContent}>
          <Toolbar className={classes.contentArea}>
            <Link to="/">
              <Avatar src={favicon} variant="square" alt="kh"></Avatar>
            </Link>

            {/* <Typography variant="h5">
              <span className={classes.highlight2}>k</span>
              <span className={classes.highlight1}>h</span>
  </Typography> */}
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu />
            </IconButton>

            <MobileRightMenuSlider
              anchor="right"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

/*
- adding the button tag makes it do the clicky animation
- anchor="right" makes menu open from the right side instead of left. can also do "top" or "bottom"
*/
