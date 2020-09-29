import React, {Component} from 'react'

export default class Button extends Component{
    constructor(){
      super()
    }
    render(){
      console.log('button component updated')
      return(
        <button type="button">
          {this.props.name}
        </button>
      );
    }
  }

const Nav = function(props){
    return (
      <div>
        {props.title}
        {props.children}
      </div>
    ) 
}

export {Nav}
