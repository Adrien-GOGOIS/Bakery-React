import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      image: "../../public/images/item.png",
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>
          <p>{this.props.productName}</p>
          <p>{this.props.price}</p>
          <img src={this.state.image} />
        </button>
      </div>
    );
  }
}

export default Card;
