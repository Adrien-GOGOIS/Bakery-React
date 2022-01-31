import React from "react";
import Button from "./Button.js";

// Onglet Pay
class Pay extends React.Component {
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
      </div>
    );
  }
}

export default Pay;
