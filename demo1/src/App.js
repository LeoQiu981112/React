import './App.css'; //css loader

import React, { Component } from 'react';

import named_default, { sub } from './add'
import logo from './logo.svg';

console.log(logo)  //引入图片的路径

console.log(named_default(10, 2))
console.log(sub(10, 1))

class Animal {
  constructor() {
    this.type = 'animal'
  }
}
class Human extends Animal {
  constructor(height) {
    super();
    this.height = height
  }
}

console.log(new Human)




class App extends Component {
  constructor(){
    super()

    this.state = {
      like : false
    }
  }
  
  handleClick(){
    // use component setstate method, pass in state object 
    this.setState(
      {
        like : !this.state.like
      }
    )
  }

  render() {
    // const app = <div>this is app</div>
    // return app

    // return (<div>this is app</div>)
    var name = 'leo1';
    var arr = [1, 2, 3, 4, 5]
    return (

      <div className='App'>
        {/* <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>  */}
        <button type="button" style={ this.state.like ? {color: "red"} : {color : "black"} }
          onClick={()=>this.handleClick()} >
        {
          this.state.like ? "liked" : "like"
        }
        </button>
        
        <p>js : {name === 'leo' ? 'its leo ' : 'its not leo '}</p>
        plain html : test html

        {
          arr.map((v,k)=>{
            return <li>{v}</li>
          })

        }

        {/* jsx comment, jsx can only have one root element/tag */}


        <h1 style={{ color: 'red' }}>this is red </h1>
        {name}
        <h1 style={ name === 'leo'? {color:'red'} : {color : 'blue'} }>leo red else blue</h1>
        <label htmlFor='input'></label>
        <h2>input</h2>
        <input type='text' id='input' />
      </div>);
  }
}

export default App;
