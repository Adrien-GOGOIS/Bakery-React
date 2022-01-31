import React from "react";
import Button from "./Button.js";

class Add extends React.Component {
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
      </div>
    );
  }
}

export default Add;
