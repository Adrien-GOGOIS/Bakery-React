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
  }
  render() {
    if (this.state.activeTabs === "Add") {
      return <Add />;
    }

    if (this.state.activeTabs === "List") {
      return <List />;
    }

    if (this.state.activeTabs === "Pay") {
      return <Pay />;
    }
  }
}

export default App;
