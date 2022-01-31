import React from "react";
import Button from "./Button";

class List extends React.Component {
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
        <h2>LIST</h2>
      </div>
    );
  }
}

export default List;
