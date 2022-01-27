import React from "react";
import Button from "./Button.js";

class Add extends React.Component {
  isSelected() {}

  render() {
    return (
      <div>
        ADD
        <Button isSelected={this.isSelected} children="Add" />
        <Button isSelected={this.isSelected} children="List" />
        <Button isSelected={this.isSelected} children="Pay" />
      </div>
    );
  }
}

export default Add;
