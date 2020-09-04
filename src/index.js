import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Excercises from "./pages/Exercises";

const container = document.getElementById("root");

// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(
  <React.StrictMode>
    <Excercises />
  </React.StrictMode>,
  container
);
