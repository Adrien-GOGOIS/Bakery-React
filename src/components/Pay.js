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
        <h2>PAY</h2>
        <div>
          <p>{this.state.total}</p>
          <p>{this.state.totalTVA}</p>
          <p>{this.state.totalEcoTax}</p>
          <p>{this.state.totalTTC}</p>
        </div>
        <div>
          <Card
            productName={this.props.productName}
            price={this.props.productPrice}
          />
        </div>
      </div>
    );
  }
}

export default Pay;
