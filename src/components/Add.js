import React from "react";
import Button from "./Button.js";

class Add extends React.Component {
  render() {
    return (
      <div>
        <Button
          isSelected={this.isSelected}
          onClick={this.selectAdd}
          children="Add"
        />
        <Button
          isSelected={this.isSelected}
          onClick={this.selectList}
          children="List"
        />
        <Button
          isSelected={this.isSelected}
          onClick={this.selectPay}
          children="Pay"
        />
        <h2>ADD</h2>
      </div>
    );
  }
}

export default Add;
