import React from "react";
import './App.css';

class GuGuDan extends React.Component{
  constructor(props){
    super(props);
    this.state={
      first: Math.ceil(Math.random()*9),
      second: Math.ceil(Math.random()*9),
      value: '',
      result: '',
    };
  }

  onSubmit=(e)=>{
    e.preventDefault();
    if(parseInt(this.state.value)===this.state.first*this.state.second){
      const value=this.state.value;
      this.setState({
        result: value+' 정답',
        first: Math.ceil(Math.random()*9),
        second: Math.ceil(Math.random()*9),
        value: '',
      });
    }else{
      this.setState({
        result: '땡',
        value: '',
      });
    }
  }

  render(){
    return(
      <div>
        <div>{this.state.first}곱하기{this.state.second}는?</div>
        <form onSubmit={this.onSubmit}>
          <input type="number" value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}/>
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

export default GuGuDan;
