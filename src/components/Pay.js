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
      const actualPrice = this.state.basket.price;

      console.log(this.state.basket);

      this.setState({
        // ...this.state.basket,
        total: prevState.total + actualPrice,
        totalTVA: prevState.totalTVA + actualPrice / 5,
        totalEcoTax: this.state.basket.length * 0.03,
        totalTTC:
          prevState.totalTTC +
          this.state.total +
          this.state.totalTVA +
          this.state.totalEcoTax,
      });
    }
  }

  handleSelect(name, price) {
    console.log(name, price);
    this.setState((prevState) => ({
      basket: [...prevState.basket, { name: name, price: price }],
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
