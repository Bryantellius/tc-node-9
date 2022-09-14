import React from "react";
import { useLocation } from "react-router-dom";

function AboutPage(props) {
  let location = useLocation();

  console.log(location);

  return (
    <div className="App">
      <div className="App-header">
        <h1>About</h1>
        <p>Yada yada ydada</p>
      </div>
    </div>
  );
}

export default AboutPage;
