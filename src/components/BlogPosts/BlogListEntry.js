import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import { Box, Typography, Avatar, Link, Divider } from "@material-ui/core";

const styles = (theme) => ({});

const BlogListEntry = (props) => {
  // const { classes } = props;

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
          <Box
            style={{
              flexBasis: "14%",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="blog picture"
              src={props.image}
              style={{
                width: "130px",
                height: "130px",
                maxWidth: "200px",
                border: `.1rem ${theme.palette.accent1.main} solid`,
                margin: "auto",
                variant: "circle",
              }}
            ></Avatar>
          </Box>
          <Box style={{ flexBasis: "82%" }}>
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
