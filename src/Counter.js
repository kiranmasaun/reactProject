import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <p>{this.state.count}</p>;
  }
}
