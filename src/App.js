import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/HomePage";
import Resume from "./components/Resume";
import Blogs from "./components/BlogsPage";
import RecsFaves from "./components/RecsFaves";
import BlogPost1 from "./components/BlogPosts/BlogPost1";
import BlogPost2 from "./components/BlogPosts/BlogPost2";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/recsandfaves" component={RecsFaves} />
      <Route path="/blogpost1" component={BlogPost1} />
      <Route path="/blogpost2" component={BlogPost2} />
    </>
  );
}

export default App;