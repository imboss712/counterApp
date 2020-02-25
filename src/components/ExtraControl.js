import React, { Component } from "react";
import "../styles/Control.css";

class ExtraControl extends Component {
  render() {
    return (
      <section className="Control">
        <button
          style={{
            color: "white",
            backgroundColor: "#009688",
            borderRadius: "0 0 0 5px",
            outline: "none"
          }}
          onClick={this.props.onIncTen}
          title="Increase 10"
        >
          <i class="fa fa-plus"> 10</i>
        </button>

        <button
          style={{
            color: "white",
            backgroundColor: "#9e9d24",
            borderRadius: "0 0 5px 0",
            outline: "none"
          }}
          onClick={this.props.onDecTen}
          title="Decrease 10"
        >
          <i class="fa fa-minus"> 10</i>
        </button>
      </section>
    );
  }
}

export default ExtraControl;
