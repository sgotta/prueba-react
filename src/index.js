import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./components/Card";
import Welcome from "./components/Welcome";
const container = document.getElementById("root");

// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(
  <React.StrictMode>
    <div>
      <Welcome username="Simón" />
      <Card
        title="Technique Guides"
        description="Learn amazing street workout and calisthenics"
        img="https://raw.githubusercontent.com/rulpalacios/FitnessApp/styles/src/images/exercise.png"
        leftColor="#a74cf2"
        rightColor="#617bfb"
      />
    </div>
  </React.StrictMode>,
  container
);
