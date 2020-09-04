import React from "react";
import "./styles/Card.css";

const urlImage =
  "https://raw.githubusercontent.com/rulpalacios/FitnessApp/styles/src/images/circles.png";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "70%",
      image: "https://pngimg.com/uploads/pokemon/pokemon_PNG149.png",
      //image:
      //"https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2018/04/O-Poderoso-Chefinho-Baby-Boss-e-Tim-PNG-197x300.png",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        width: "50%",
        image:
          "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2018/04/O-Poderoso-Chefinho-Baby-Boss-Jimbo-PNG-220x300.png",
      });
    }, 5000);
  }

  render() {
    const { title, description, img, leftColor, rightColor } = this.props;
    return (
      <div
        className="card mx-auto Fitness-Card"
        style={{
          backgroundImage: `url(${urlImage}), linear-gradient(to right, ${leftColor}, ${rightColor})`,
        }}
      >
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img
                src={this.state.image}
                className="float-right"
                alt={"Imagen gente ejercitando"}
                style={{ width: `${this.state.width}`, height: "auto" }}
              />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
