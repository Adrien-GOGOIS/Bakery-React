import React from "react";
import Button from "./Button";

// Onglet List
class List extends React.Component {
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
            isSelected={true}
            onClick={this.props.selectList}
            children="List"
          />
          <Button
            isSelected={false}
            onClick={this.props.selectPay}
            children="Pay"
          />
          <Button
            isSelected={false}
            onClick={this.props.selectSave}
            children="Save"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h2 className="m-4">LIST</h2>
          {/* Liste des produits stockés dans le "panier" */}
          <div className="m-3">
            <ul>
              {this.props.items.map((item) => {
                return (
                  <li>
                    <p>
                      {item.productName} {item.productPrice + " €"}
                    </p>
                    <p></p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
