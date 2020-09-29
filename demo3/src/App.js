import React, { Component } from 'react';
import './App.css';
import Test from './Test';
import Demo from './Demo'
import PropTypes from 'prop-types'
class Title extends Component{
	static propTypes = {
		title : PropTypes.string
	}
	// react
	static defaultProps = {
		title : "default title"
	}

	render(){
		return(
			<div>{this.props.title}</div>
		)
	}
}

// es6
// Title.defaultProps = {
// 	title : "defaultdefault"
// }

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isRenderTest: true
		}
	}
	render() {
		return (
			<div>				
				<Title title={123}></Title>

				{/* <Title></Title> */}

				{/* {this.state.isRenderTest ? <Demo /> : "don't render demo"}
				<p>app</p>
				<button type="button" onClick={() => this.setState({})}> app set state</button>
				<button type="button" onClick={() => this.setState({ isRenderTest : !this.state.isRenderTest })}>change isrender demo</button> */
				} 
			</div>
		);
	}
}
export default App;

// "If I quit now, I'll be back to where I started. And when I started, I desperately wished I was where I am now."
// "He who conquers himself, conquers the world"


