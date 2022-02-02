import React from "react";
import Button from "./Button";

// Onglet List
class Save extends React.Component {
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
            isSelected={false}
            onClick={this.props.selectPay}
            children="Pay"
          />
          <Button
            isSelected={true}
            onClick={this.props.selectSave}
            children="Save"
          />
        </div>
        <div className="d-flex flex-column align-items-center">
          <h2>Historique</h2>
          {/* Liste des produits stockés dans le "panier" */}
        </div>
      </div>
    );
  }
}

export default Save;
