import React from "react";
import Card from "./Card";

const ExerciseList = ({ exercises }) => (
  <div>
    {exercises.map((exercise) => {
      return (
        <Card
          key={exercise.id}
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

export default ExerciseList;
