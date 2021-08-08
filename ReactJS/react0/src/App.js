import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:
        JSON.parse(localStorage.getItem("list")) != null
          ? JSON.parse(localStorage.getItem("list"))
          : [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.random() * 5;

    const newItem = {
      id: id,
      value: e.target.firstElementChild.value,
      oncheck: false,
    };
    const li = this.state.list.concat(newItem);
    this.setState({ list: li });
    e.target.firstElementChild.value = "";
    this.storeLocal(li);
  };

  removeLi = (e) => {
    const btnId = e.target.id;
    let li = this.state.list;
    li = li.filter((li) => li.id != btnId);
    this.setState({ list: li });
    this.storeLocal(li);
  };

  storeLocal = (list) => {
    localStorage.setItem("list", JSON.stringify(list));
  };

  checkLi = (e) => {
    console.log(e);
    e.target.parentElement.className == ""
      ? (e.target.parentElement.className = "check")
      : (e.target.parentElement.className = "");
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
          return (
            <li key={item.id}>
              {item.value}
              <button id={item.id} onClick={this.removeLi}>
                ⚔
              </button>
              <button id={item.id} onClick={this.checkLi}>
                ✅
              </button>
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;
