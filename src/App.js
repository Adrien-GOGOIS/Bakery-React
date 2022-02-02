import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Save from "./components/Save";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "Add",
      items: [{ productName: "coffee", productPrice: 1 }],
    };
    this.selectAdd = this.selectAdd.bind(this);
    this.selectList = this.selectList.bind(this);
    this.selectPay = this.selectPay.bind(this);
    this.selectSave = this.selectSave.bind(this);
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

  selectSave() {
    this.setState({ activeTab: "Save" });
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
          selectSave={this.selectSave}
          addItem={this.addItem}
          // isSelected={this.state.activeTab}
        />
      );
    }

    if (this.state.activeTab === "List") {
      return (
        <List
          selectList={this.selectList}
          selectPay={this.selectPay}
          selectAdd={this.selectAdd}
          selectSave={this.selectSave}
          items={this.state.items}
          // isSelected={this.state.activeTab}
        />
      );
    }

    if (this.state.activeTab === "Pay") {
      return (
        <Pay
          selectPay={this.selectPay}
          selectList={this.selectList}
          selectAdd={this.selectAdd}
          selectSave={this.selectSave}
          // isSelected={this.state.activeTab}
          productList={this.state.items}
        />
      );
    }

    if (this.state.activeTab === "Save") {
      return (
        <Save
          selectPay={this.selectPay}
          selectList={this.selectList}
          selectAdd={this.selectAdd}
          selectSave={this.selectSave}
        />
      );
    }
  }
}

export default App;
