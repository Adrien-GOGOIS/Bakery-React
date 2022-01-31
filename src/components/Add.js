import React from "react";
import Button from "./Button.js";

// Onglet Add
class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      productName: "",
      price: 1,
    };

    this.updatePrice = this.updatePrice.bind(this);
    this.updateProductName = this.updateProductName.bind(this);
  }

  // Méthode pour récupérer les valeurs des input produit et prix et les stocker dans le state
  updateProductName(e) {
    this.setState({
      productName: e.target.value,
    });
  }

  updatePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Button
          isSelected={this.isSelected}
          onClick={this.props.selectAdd}
          children="Add"
        />
        <Button
          isSelected={this.isSelected}
          onClick={this.props.selectList}
          children="List"
        />
        <Button
          isSelected={this.isSelected}
          onClick={this.props.selectPay}
          children="Pay"
        />
        <h2>ADD</h2>
        {/* Formulaire pour récupérer les artciles et leur prix */}
        <div>
          <form>
            <input type="text" onChange={this.updateProductName} />
            <input type="range" min={1} max={10} onChange={this.updatePrice} />
            <button onClick={this.props.addItems}>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
