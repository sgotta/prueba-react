import React from "react";
import Card from "./Card";

function ExerciseList(props) {
  return (
    <div>
      {props.exercises.map((exercise) => {
        return (
          <Card
            title={exercise.title}
            description={exercise.description}
            //img="https://raw.githubusercontent.com/rulpalacios/FitnessApp/styles/src/images/exercise.png"
            img={exercise.img}
            leftColor={exercise.leftColor}
            rightColor={exercise.rightColor}
          />
        );
      })}
    </div>
  );
}

export default ExerciseList;
