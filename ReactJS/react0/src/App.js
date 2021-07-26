import React from "react";
import { render } from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 1: "sjkdjfkdjfkdjfkdjfdkjfdkfj", 2: "sdfsfsdfsdf" };
  }
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        {this.state[1]}
        <br />
        {this.state[2]}
      </div>
    );
  }
}

export default App;
