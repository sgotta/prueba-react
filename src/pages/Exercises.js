import React from "react";
import Card from "../components/Card";
import Welcome from "../components/Welcome";

class Exercises extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Exercises;
