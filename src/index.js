import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { deepPurple, lightBlue, blue, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: grey[600],
      main: grey[800],
      dark: grey[900],
    },
    secondary: {
      light: lightBlue[600],
      main: lightBlue[800],
      dark: lightBlue[900],
    },
    accent1: {
      light: "#c59db9",
      main: "#b784a7", // mauve
      dark: "#a15f8c",
    },
    accent2: {
      main: "#8BB7CA", // blue
      // main: "#84b794", // green
      light: blue[100],
      // main: blue[200],
      dark: blue[500],
    },
    accent3: {
      light: deepPurple[100],
      main: deepPurple[200],
      dark: deepPurple[500],
    },
    textColors: {
      light: "#ffffff",
      dark: "#000000",
    },
  },
  typography: {
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500, // unused?
    fontWeightBold: 900,
    fontFamily: [
      "Lato",
      "Futura",
      "Source Sans Pro",
      "Helvetica",
      "sans-serif",
    ].join(","),
  },
  overrides: {
    a: {
      color: "white",
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
