import React, {Component} from 'react'

export default class Button extends Component{
    constructor(){
      super()
    }
    render(){
      return(
        <button type="button">from button.js</button>
      );
    }
  }

const Nav = function(){
    return (<div>Nav</div>)
}

export {Nav}
