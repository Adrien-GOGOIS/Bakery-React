import React from "react";
import Button from "./Button";

// Onglet List
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
        {/* Liste des produits stockés dans le "panier" */}
        <div>
          <ul>
            {this.props.items.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default List;
