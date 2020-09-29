import React, {Component} from 'react';

export default class Test extends Component{
    constructor(props){
        super(props)
        console.log('constructor')
        this.state = {
            time : new Date()
        }
    }

    tick(){
        this.setState({
            time : new Date()
        })
    }
    //load lifespan
    componentWillMount(){
        console.log('will mount')
        this.timeId = setInterval(()=>this.tick(),1000)
    }

    componentDidMount(){
    console.log('did mount')
    }

    // update lifespan
    componentWillReceiveProps(){
        console.log('will receive props')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('should update')
        console.log(nextState)
        if(nextState.time.getSeconds()% 2 == 0){
            return true
        }
        return false
    }
    componentWillUpdate(){
        console.log('will update')
    }
    // getSnapshotBeforeUpdate(){
    //     console.log('get snapshot')
    // }
    componentDidUpdate(){
        console.log('update finished')
    }

    // unload
    componentWillUnmount(){
        console.log('unmount')
        clearInterval(this.timeId)
    }
    render(){
        console.log('render')
        return(
            <div style={{border : "solid black 1px" }}>
                <p>Test</p>
        <p>{this.state.time.getSeconds()}</p>
                <button type="button" onClick={()=>this.setState({})}> setSstate update</button>
                <button type="button" onClick={()=>this.forceUpdate()}> force update</button>

            </div>
        )
    }

}