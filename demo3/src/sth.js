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
				{this.state.isRdenderTest ? <Test></Test> : "don't render"}
				<p>app</p>
				<button type="button" onClick={() => this.setState({})}> app set state</button>
				<button type="button" onClick={() => this.setState({ isRenderTest : !this.state.isRenderTest })}>change isrender</button>
			</div>
		);
	}
}
export default App;