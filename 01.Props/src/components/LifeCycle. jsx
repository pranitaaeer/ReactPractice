import React from "react";

class LifeCycle extends React.Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };

    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    console.log("Render");

    return (
      <>
        <h1>{this.state.count}</h1>

        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          Increase
        </button>
      </>
    );
  }
}

export default LifeCycle;
