import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import Projects from "./components/pages/Projects/Projects";
import NoMatch from "./components/pages/NoMatch/NoMatch";
import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <ParallaxProvider>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route component={NoMatch} />
          </Switch>
      </ParallaxProvider>
    </Router>
  );
}

export default App;