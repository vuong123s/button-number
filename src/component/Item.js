import React, { Component } from "react";

class Item extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  Tru() {
    this.setState({
      number: this.state.number - 1
    });
  }

  Cong() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (
      <div>
        <h2>Step number</h2>
        <button id="subBtn" onClick={() => this.Tru()}>
          -
        </button>
        <span id="numberPreview"> {this.state.number} </span>
        <button id="plusBtn" onClick={() => this.Cong()}>
          +
        </button>
      </div>
    );
  }
}

export default Item;
