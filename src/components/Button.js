import React from "react";

// Bouton de base de navigation entre onglets Pay, List & Add
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      star: "",
    };
  }

  componentDidUpdate(prevProps, _prevState) {
    if (prevProps.isSelected !== this.props.isSelected) {
      this.setState({
        star: "*",
      });
    }
  }

  render() {
    return (
      <div>
        <button
          className={this.props.isSelected ? "btn btn-primary m-2" : "btn m-2"}
          onClick={this.props.onClick}
        >
          {this.props.children}
          {this.state.star}
        </button>
      </div>
    );
  }
}

export default Button;
