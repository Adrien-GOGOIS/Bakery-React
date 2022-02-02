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
            <Card
              productName={this.props.productName}
              price={this.props.productPrice}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Pay;
