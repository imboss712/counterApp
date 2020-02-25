import React, { Component } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

export default App;
