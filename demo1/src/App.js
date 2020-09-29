import React, { Component } from 'react';
import named_default, { sub } from './add'
import logo from './logo.svg';
import './App.css';

import Button, {Nav} from './Button'
import Input from './Input'

console.log(logo)  //引入图片的路径

console.log(named_default(10, 2))
console.log(sub(10, 1))

// class Animal {
//   constructor() {
//     this.type = 'animal'
//   }
// }
// class Human extends Animal {
//   constructor(height) {
//     super();
//     this.height = height
//   }
// }

// function component 
// const Button = function(){
//   return (
//     <button type="button">from button component</button>
//   )
// }

// more complicated component
// class Nav extends Component{
//   constructor(){
//     super()
//   }
//   render(){
//     return(
//       <div style={{color : "white" , backgroundColor : "black"}}>"123"</div>
//     );
//   }
// }


class App extends Component {
  constructor(){
    super()

    this.state = {
      like : false
    }
  }
  
  handleClick(){
    console.log('ur using handle click event')

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
    console.log("App component update");
    // return (<div>this is app</div>)
    // var name = 'leo1';
    // var arr = [1, 2, 3, 4, 5]
    return (
      <div>
        {/* <button type="button" style={ this.state.like ? {color: "red"} : {color : "black"} }
          onClick={()=>this.handleClick()} >
        {
          this.state.like ? "liked" : "like"
        }
        </button> */}
{/*         
        <p>js : {name === 'leo' ? 'its leo ' : 'its not leo '}</p>
        plain html : test html

        {
          arr.map((v,k)=>{
            return <li>{v}</li>
          })

        } */}

        {/* jsx comment, jsx can only have one root element/tag */}


        {/* <h1 style={{ color: 'red' }}>this is red </h1>
        {name}
        <h1 style={ name === 'leo'? {color:'red'} : {color : 'blue'} }>leo red else blue</h1>
        <label htmlFor='input'></label>
        <h2>input</h2>
        <input type='text' id='input' />

        <p onClick={()=>this.handleClick()}>click to look at THIS</p> */}

        {/* <Button />
        <Input></Input>
        <p onClick={()=>this.setState({})}>click to update app component</p> */}
        
        <Nav title={"title!"}>
          <h1>child1</h1>
          <h2>child2</h2>
          <Button name="name1 passed from app.js"></Button>
          <Button name="name2 passed from app.js"></Button>          
        </Nav>

      </div>);
  }
}

// index .jx export, then render there
export default App;
