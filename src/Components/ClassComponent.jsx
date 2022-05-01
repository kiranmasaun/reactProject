import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidMount() {
    // This will run after page reload
    console.log("component is mounted");
  }

  componentDidUpdate() {
    console.log("component is updated");
  }

  componentWillUnmounted() {
    console.log("component is unmounted");
  }

  updateClicks = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <button onClick={this.updateClicks}>
        Click Me {this.state.count} times
      </button>
    );
  }
}
