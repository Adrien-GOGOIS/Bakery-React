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
    // console.log("productName", this.state.productName);
  }

  updatePrice(e) {
    this.setState({
      price: e.target.value,
    });
    // console.log("price", this.state.price);
  }

  addProduct(e) {
    e.preventDefault();
    this.props.addItem(this.state.productName, this.state.price);
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-row justify-content-center">
          <Button
            isSelected={true}
            onClick={this.props.selectAdd}
            children="Add"
          />
          <Button
            isSelected={false}
            onClick={this.props.selectList}
            children="List"
          />
          <Button
            isSelected={false}
            onClick={this.props.selectPay}
            children="Pay"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h2>ADD</h2>
          {/* Formulaire pour récupérer les articles et leur paramètres*/}
          <div>
            <form className="m-2">
              <input
                className="m-2 w-100"
                type="text"
                onChange={this.updateProductName}
              />
              <br />
              <input
                type="range"
                min={1}
                max={10}
                onChange={this.updatePrice}
                className="m-2 w-100"
              />
              <p className="m-2 text-center">{this.state.price + " €"}</p>
              <button
                type="submit"
                onClick={(e) => this.addProduct(e)}
                className="btn btn-success w-100 m-2"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
