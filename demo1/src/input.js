import React , {Component} from 'react'

// controlled component, what you see is not what originally inputted, data is from state
export default class Input extends Component{
    constructor(){
        super()
        this.state = {
            value: ""
        }
    }
    handleInput(e) {
        console.log(e.target.value)  // target is html tag
        console.log(e.nativeEvent)
        if(e.target.value.length > 10){
            return
        }
        this.setState(
            {
                value: e.target.value
            }
        )
    }
    render(){
        console.log('input component updated')
        return(
            <input type="text" onInput={(e)=>this.handleInput(e)} value={this.state.value}/>
        )
    }

}