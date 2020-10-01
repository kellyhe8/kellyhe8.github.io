import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const styles = (theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    minHeight: "500px",
    padding: "2rem",
    margin: "0 0 1rem 0",
    justifyContent: "flex-end",
  },
});

const BlogPostTemplate = (props) => {
  const { classes } = props;
  const theme = useTheme();

  return (
    <>
      <Box
        className={classes.header}
        style={{ background: `url(${props.image}) no-repeat center center` }}
      >
        <Typography variant="h2">{props.title}</Typography>
        <Typography variant="h5">{props.subtitle}</Typography>
      </Box>

      <Typography
        variant="body1"
        style={{
          color: theme.palette.primary.light,
          lineHeight: "1.5rem",
          padding: "0 0 .5rem 0",
          borderBottom: `1px ${theme.palette.primary.light} solid`,
          margin: "0 0 1rem 0",
        }}
      >
        {props.date}
      </Typography>
    </>
  );
};

export default withStyles(styles)(BlogPostTemplate);
