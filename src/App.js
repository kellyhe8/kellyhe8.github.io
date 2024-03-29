import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/HomePage";
import Resume from "./components/Resume";
import Blogs from "./components/BlogsPage";
import RecsFaves from "./components/RecsFaves";
import BlogPost1 from "./components/BlogPosts/BlogPost1";
import BlogPost2 from "./components/BlogPosts/BlogPost2";
import BlogPost3 from "./components/BlogPosts/BlogPost3";
import BlogPost4 from "./components/BlogPosts/BlogPost4";
import BlogPost5 from "./components/BlogPosts/BlogPost5";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/recsandfaves" component={RecsFaves} />
          <Route path="/blogpost1" component={BlogPost1} />
          <Route path="/blogpost2" component={BlogPost2} />
          <Route path="/blogpost3" component={BlogPost3} />
          <Route path="/blogpost4" component={BlogPost4} />
          <Route path="/blogpost5" component={BlogPost5} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
