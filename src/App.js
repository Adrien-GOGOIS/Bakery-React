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
  }

  selectAdd() {
    this.setState({ activeTab: "Add" });
  }

  selectList() {
    this.setState({ activeTab: "List" });
  }

  selectPay() {
    this.setState({ activeTab: "Pay" });
  }

  render() {
    if (this.state.activeTab === "Add") {
      return <Add />;
    }

    if (this.state.activeTab === "List") {
      return <List />;
    }

    if (this.state.activeTab === "Pay") {
      return <Pay />;
    }
  }
}

export default App;
