import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.state.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.productName}</h5>
          <p className="card-text">{this.props.price} €</p>
          <button className="btn btn-primary" onClick={this.props.onClick}>
            Add to basket
          </button>
        </div>
      </div>

      //   <div className="card">
      //     <p>{this.props.productName}</p>
      //     <p>{this.props.price} €</p>
      //     <img src={this.state.image} />
      //     <button className="btn btn-primary" onClick={this.props.onClick}>
      //       Add to basket
      //     </button>
      //   </div>
    );
  }
}

export default Card;
