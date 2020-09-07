import React from "react";

class ExerciseNew extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   console.log(this);
  // }

  handleClick = () => {
    console.log("Clicked");
  };

  render() {
    return (
      <button onClick={this.handleClick} className="btn btn-primary">
        Crear rutina
      </button>
    );
  }
}

export default ExerciseNew;
