import React, {Component} from 'react'

export default class Demo extends Component{
    constructor(props){
        super(props)
        this.state = {
            time : new Date()
        }
        // irelvant to state
        this.timeId = setInterval(()=>this.tick())
    }

    tick(){
        this.setState({
            time : new Date()
        })
    }
    static getDerivedStateFromProps(nextProps,prevState){
        // returned result will be update state, null state means no update to state
        console.log("static derived")
        // return {
        //     like : true
        // };
        return null;
    }
    getSnapshotBeforeUpdate(){
        console.log('snapshot before update')
        return "this is from snapshot before update";
    }
    render(){
        console.log('render',this.state)
        return (
            <div>
                <p>Demo</p> 
                {this.state.time.getSeconds()}
                {/* <button type="button"
                    onClick={()=>this.setState({})}> empty state
                </button> */}
            </div>
        )
}
    componentDidMount(){
        console.log('did mount')
    } 
    shouldComponentUpdate(){
        console.log('should update')
        return true;
    }
    componentDidUpdate(prevProps,prevState,info){
        console.log('did update')
        console.log(info)
    }
    componentWillUnmount(){
        console.log('will unmount')
        clearInterval(this.timeId)
    } 
}