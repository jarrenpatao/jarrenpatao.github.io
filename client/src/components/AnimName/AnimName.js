import React from "react";
import ReactDOM from "react-dom";
import "../../assets/css/style.css";
import { AnimatedText } from "./AnimatedName.js";

function AnimName () {
  return(
    <div className="an">
      <AnimatedText
        textColor="#fff"
        overlayColor="#008ab8"
      >
        jarren patao<hr />
        <p className="subTitle">front-end web developer</p>
      </AnimatedText>
    </div>
  )
}

export default AnimName;