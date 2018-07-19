import React, { Component } from "react";

class Promiser extends Component {
  state = {
    result: null,
    isError: false,
    error: null,
    pending: true
  };

  componentDidMount() {
    this.props.promise
      .then(data => {
        this.setState({ result: data, pending: false });
      })
      .catch(err => {
        this.setState({
          isError: true,
          pending: false,
          error: err
        });
      });
  }

  render() {
    const { result, isError, error, pending } = this.state;
    const { preload, preloadComponent, render, catch: throwError } = this.props;

    if (preload && pending) {
      return preloadComponent || "loading...";
    }

    return !isError && result ? render(result) : throwError(error);
  }
}

export default Promiser;
