import React from "react";

//state를 사용하기 위해 class component 사용
//Mount: constructor가 실행되고 그 담에 render가 실행된다. constructor->render->componentDidMount
//Update: componentDidUpdate: render가 더 실행되면 (업데이트 되면) 발동!
class App extends React.Component {
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState(current=>({count:current.count+1}));
  };
  minus = () => {
    this.setState(current=>({count:current.count-1}));
  };
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated!");
  }
  componentWillUnmount(){
    console.log("Good Bye, cruel world!")
  }
  render() {
    console.log("I'm rendering.");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
