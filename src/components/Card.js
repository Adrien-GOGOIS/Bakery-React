import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      image: "../../public/images/item.jpeg",
    };
  }

  componentDidMount() {
    fetch(
      `https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`
    )
      .then((res) => res.blob())
      .then((res) => {
        const imageUrl = URL.createObjectURL(res);
        this.setState({
          image: imageUrl,
        });
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>
          <p>{this.props.productName}</p>
          <p>{this.props.price} €</p>
          <img src={this.state.image} />
        </button>
      </div>
    );
  }
}

export default Card;
