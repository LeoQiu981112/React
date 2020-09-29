import React, { Compon, Component} from 'react';
import logo from './logo.svg';
import './App.css';

import PropTypes from 'prop-types'

// context test, too many layers of components, better to use context, else props is enough
class Title extends Component{
  static contextTypes = {
    themeColor : PropTypes.string,
    handleChangeThemeColor : PropTypes.func
  }
  render(){
    console.log(this.props)
    console.log(this.context)
    const themeColor = this.context.themeColor
    return(
      <h1 style={{color : themeColor}}>some title</h1>
    )
  }
}

class Button extends Component{
  static contextTypes = {
    themeColor : PropTypes.string,
    handleChangeThemeColor : PropTypes.func
  }

  render(){
    const {themeColor,handleChangeThemeColor} = this.context
    return(
      <div>
        <button type="button" style={{color : themeColor}}
          onClick={()=>handleChangeThemeColor('red')}
        >red</button>
        <button type="button" style={{color : themeColor}}
          onClick={()=>handleChangeThemeColor('green')}
        >green</button>
      </div>
    )
  }
}

class App extends Component{
  static childContextTypes = {
    themeColor : PropTypes.string,
    handleChangeThemeColor : PropTypes.func
  }

  constructor(){
    super()
    this.state = {
      themeColor : ''
    }
  }
  handleChangeThemeColor(color){
    this.setState({
      themeColor : color
    })
  }
  getChildContext(){
    return {
      themeColor: this.state.themeColor,
      handleChangeThemeColor : (color)=>this.handleChangeThemeColor(color)
    }
  }
  render() {
    return (
      <div>
        <Title></Title>
        <Button></Button>
      </div>
    );
  }
}

export default App;
