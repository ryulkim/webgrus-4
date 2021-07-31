import React from "react";
import { render } from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.firstElementChild.value);
    let id = Math.random() * 5;

    const newItem = {
      id: id,
      value: e.target.firstElementChild.value,
    };

    console.log(newItem);

    this.setState({ list: this.state.list.concat(newItem) });
    e.target.firstElementChild.value = "";
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="put to-do thing" />
          <button type="submit">등록</button>
        </form>

        <br />
        {this.state.list.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </div>
    );
  }
}

export default App;
