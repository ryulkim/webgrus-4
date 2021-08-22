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
    console.log(e);
    e.preventDefault();
    let id = Math.random() * 5;

    const newItem = {
      id: id,
      value: e.target.firstElementChild.value,
      date:
        e.target.children[1].value === "" ? "없음" : e.target.children[1].value,
      toggle: false,
      checked: false,
    };
    const li = this.state.list.concat(newItem);
    this.setState({ list: li });
    e.target.firstElementChild.value = "";
    this.storeLocal(li);
  };

  removeLi = (e) => {
    const btnId = e.target.id;
    let li = this.state.list;
    li = li.filter((li) => li.id !== Number(btnId));
    this.setState({ list: li });
    this.storeLocal(li);
  };

  storeLocal = (list) => {
    localStorage.setItem("list", JSON.stringify(list));
  };

  checkLi = (e) => {
    console.log(e);
    const btnId = e.target.id;
    let li = this.state.list;
    for (let i in li) {
      if (li[i].id === Number(btnId)) {
        if (li[i].checked === false) {
          li[i].checked = true;
        } else {
          li[i].checked = false;
        }
      }
    }
    this.setState({ list: li });
    this.storeLocal(li);
  };

  updateToggle = (e) => {
    const btnId = e.target.id;
    let li = this.state.list;
    for (let i in li) {
      if (li[i].id === Number(btnId)) {
        li[i].toggle = true;
      }
    }
    this.setState({ list: li });
    this.storeLocal(li);
  };

  updateLi = (e) => {
    console.log(e);
    const btnId = e.target.id;
    let li = this.state.list;
    for (let i in li) {
      if (li[i].id === Number(btnId)) {
        li[i].toggle = false;
        li[i].value = e.target.parentElement.firstChild.value;
        li[i].date = e.target.parentElement.children[1].value;
      }
    }
    this.setState({ list: li });
    this.storeLocal(li);
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="put to-do thing" />
          <input type="date" />
          <button type="submit">등록</button>
        </form>
        <br />
        {this.state.list.map((item) => {
          return (
            <div>
              {item.toggle ? (
                <li>
                  <input type="text" defaultValue={item.value}></input>
                  <input type="date" defaultValue={item.date}></input>
                  <button id={item.id} onClick={this.updateLi}>
                    적용
                  </button>
                </li>
              ) : (
                <li key={item.id} className={item.checked ? "check" : ""}>
                  {item.value},&nbsp; 마감 기한: {item.date}
                  <button id={item.id} onClick={this.removeLi}>
                    ⚔
                  </button>
                  <button id={item.id} onClick={this.checkLi}>
                    ✅
                  </button>
                  <button id={item.id} onClick={this.updateToggle}>
                    수정
                  </button>
                </li>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
