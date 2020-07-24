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
        <p className="subTitle">technical support agent</p>
        <p className="subSubTitle">casually Artsy guy</p>
      </AnimatedText>
    </div>
  )
}

export default AnimName;