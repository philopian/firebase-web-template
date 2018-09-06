import React from "react";
import HiThere from "./components/HiThere";

import firebaseImage from "../assets/images/firebase.png";
import appseedica from "../assets/images/appseedica.png";

const Root = () => (
  <div>
    <div className="logo-container">
      <span>
        <img className="root-logo" src={appseedica} height="60px" />
        <div>+</div>
        <img className="root-logo" src={firebaseImage} height="60px" />
      </span>
    </div>

    <h1>Helo</h1>
    <HiThere />
  </div>
);

export default Root;
