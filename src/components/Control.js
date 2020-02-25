import React, { Component } from "react";
import "../styles/Control.css";

class Control extends Component {
  render() {
    return (
      <section className="Control">
        <button
          style={{
            color: "white",
            backgroundColor: "#f44336"
          }}
          onClick={this.props.onInc}
          title="Increase 1"
        >
          <i class="fa fa-plus"></i>
        </button>

        <button
          style={{ color: "white", backgroundColor: "#e91e63" }}
          onClick={this.props.onRes}
          title="Reset 0"
        >
          <i class="fa fa-refresh"></i>
        </button>
        <button
          style={{
            color: "white",
            backgroundColor: "#9c27b0"
          }}
          onClick={this.props.onDec}
          title="Decrease 1"
        >
          <i class="fa fa-minus"></i>
        </button>
      </section>
    );
  }
}

export default Control;
