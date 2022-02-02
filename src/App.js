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

  // Méthodes de sélection de la page active
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

  // Méthode d'ajout d'un produit à la liste
  addItem(name, price) {
    this.setState((prevState) => ({
      items: [{ productName: name, productPrice: price }, ...prevState.items],
    }));
    console.log(this.state.items);
  }

  // Navigation entre les 3 onglets en fonction du state, lui-même changé en fonction du bouton cliqué par l'utilisateur
  render() {
    <div>
      <h1>BAKERY</h1>
    </div>;

    if (this.state.activeTab === "Add") {
      return (
        <Add
          selectAdd={this.selectAdd}
          selectList={this.selectList}
          selectPay={this.selectPay}
          addItem={this.addItem}
          isSelected={this.state.activeTab === "Add"}
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
          isSelected={this.state.activeTab === "List"}
        />
      );
    }

    if (this.state.activeTab === "Pay") {
      return (
        <Pay
          selectPay={this.selectPay}
          selectList={this.selectList}
          selectAdd={this.selectAdd}
          isSelected={this.state.activeTab === "Pay"}
          productName={this.state.items.map((item) => item.productName)}
          productPrice={this.state.items.map((item) => item.productPrice)}
        />
      );
    }
  }
}

export default App;
