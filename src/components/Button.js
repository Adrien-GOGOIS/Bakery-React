import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick} style={this.props.isSelected}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
