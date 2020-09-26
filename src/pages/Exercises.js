import React from "react";
import ExersiceList from "../components/ExerciseList";
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";

const Exercices = ({ data }) => (
  <React.Fragment>
    <Welcome username="Simón" />
    <ExersiceList exercises={data} />
    <AddButton />
  </React.Fragment>
);

export default Exercices;
