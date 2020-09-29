import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component{
  constructor(props){
    super(props)
  }

  render(){
    var themeColor = this.props.themeColor
    return(
      <div style = {{color:themeColor}} >
        <button style = {{color:themeColor}} onClick ={()=>this.props.handleClick("red")} >red</button>
        <button style = {{color:themeColor}} onClick ={()=>this.props.handleClick("green")}>green</button>
      </div>
    )
  }
}

class Title extends Component{
  constructor(){
    super()
  }
  render(){
    const themeColor = this.props.themeColor
    return(
      <h2 style={{color : themeColor}}>title</h2>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      themeColor : 'red'
    }
  }

  handleClick(color){
    this.setState ({
      themeColor : color 
    })
  }

  render() {
    return (
      <div>
        <h5>app</h5>
        <Title themeColor={this.state.themeColor}></Title>
        <Button themeColor={this.state.themeColor} handleClick= {(color)=>this.handleClick(color)} ></Button>
      </div>
    );
  }
}

export default App;
