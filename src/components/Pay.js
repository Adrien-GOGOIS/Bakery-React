import React from "react";
import Button from "./Button.js";

import Card from "./Card.js";

// Onglet Pay
class Pay extends React.Component {
  constructor() {
    super();
    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.basket !== this.state.basket) {
      const actualPrice = parseInt(this.state.basket[0].price);
      const totalPrice = prevState.total + actualPrice;
      const tvaPrice =
        Math.round((prevState.totalTVA + actualPrice / 5) * 100) / 100;
      const ecoPrice = Math.round(this.state.basket.length * 0.03 * 100) / 100;
      const ttcPrice =
        Math.round((totalPrice + tvaPrice + ecoPrice) * 100) / 100;

      console.log(this.state.basket[0].price);

      this.setState({
        // ...this.state.basket,
        total: totalPrice,
        totalTVA: tvaPrice,
        totalEcoTax: ecoPrice,
        totalTTC: ttcPrice,
      });
    }
  }

  handleSelect(name, price) {
    console.log(name, price);
    this.setState((prevState) => ({
      basket: [{ name: name, price: price }, ...prevState.basket],
    }));
    console.log(this.state.basket);
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-row justify-content-center">
          <Button
            isSelected={false}
            onClick={this.props.selectAdd}
            children="Add"
          />
          <Button
            isSelected={false}
            onClick={this.props.selectList}
            children="List"
          />
          <Button
            isSelected={true}
            onClick={this.props.selectPay}
            children="Pay"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h2>PAY</h2>
          <div>
            <p>Total : {this.state.total} €</p>
            <p>TVA : {this.state.totalTVA} €</p>
            <p>Eco Taxe : {this.state.totalEcoTax} €</p>
            <p>Total TTC : {this.state.totalTTC} €</p>
          </div>
          <div>
            {this.props.productList.map((item) => {
              return (
                <Card
                  productName={item.productName}
                  price={item.productPrice}
                  onClick={() =>
                    this.handleSelect(item.productName, item.productPrice)
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;
