import React, { Component } from "react";
import numToWords from "num-to-words";
import numeral from "numeral";
import Control from "./Control";
import ExtraControl from "./ExtraControl";
import "../styles/Counter.css";

class Counter extends Component {
  state = {
    counter: 0
  };

  increaseOne = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  decreaseOne = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };

  reset = () => {
    this.setState(() => ({ counter: 0 }));
  };
  increaseTen = () => {
    this.setState(prevState => ({ counter: prevState.counter + 10 }));
  };
  decreaseTen = () => {
    this.setState(prevState => ({ counter: prevState.counter - 10 }));
  };

  render() {
    let words = numToWords(this.state.counter);
    let digit = numeral(this.state.counter).format("0,0");
    return (
      <div>
        <section className="Counter">
          <h1>{digit}</h1>
          <h3>{words}</h3>
        </section>
        <Control
          onInc={this.increaseOne}
          onDec={this.decreaseOne}
          onRes={this.reset}
        />
        <ExtraControl onIncTen={this.increaseTen} onDecTen={this.decreaseTen} />
      </div>
    );
  }
}

export default Counter;
