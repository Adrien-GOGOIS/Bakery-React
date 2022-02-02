import React from "react";

// Bouton de base de navigation entre onglets Pay, List & Add
class Button extends React.Component {
  render() {
    return (
      <div>
        <button
          className={this.props.isSelected ? "btn btn-primary" : "btn"}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
