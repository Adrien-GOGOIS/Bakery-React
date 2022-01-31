import React from "react";
import "./App.css";

import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "Add",
      items: [],
    };
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  selectAdd() {
    this.setState({ activeTab: "Add" });
    console.log(this.state.activeTab);
  }

  selectList() {
    this.setState({ activeTab: "List" });
    console.log(this.state.activeTab);
  }

  selectPay() {
    this.setState({ activeTab: "Pay" });
    console.log(this.state.activeTab);
  }

  addItem(name, price, e) {
    e.preventDefault();
    this.setState({
      items: this.state.items.push({ product: name, priceTag: price }),
    });
    console.log(this.state.items);
  }

  render() {
    if (this.state.activeTab === "Add") {
      return (
        <Add
          selectAdd={this.selectAdd}
          selectList={this.selectList}
          selectPay={this.selectPay}
          addItems={this.addItem}
        />
      );
    }

    if (this.state.activeTab === "List") {
      return (
        <List
          selectList={this.selectList}
          selectPay={this.selectPay}
          selectAdd={this.selectAdd}
          items={this.state.items}
        />
      );
    }

    if (this.state.activeTab === "Pay") {
      return (
        <Pay
          selectPay={this.selectPay}
          selectList={this.selectList}
          selectAdd={this.selectAdd}
        />
      );
    }
  }
}

export default App;
