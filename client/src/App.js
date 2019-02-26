import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Blogs from "./pages/Blogs/Blogs";
import Detail from "./pages/Detail/Detail";
import NoMatch from "./pages/NoMatch/NoMatch";
import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </ParallaxProvider>
    </Router>
  );
}

export default App;