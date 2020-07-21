import React, { Component } from 'react';
import Display from './components/Display';

class App extends Component {
	state = {
		counter: 0,
		alert: '',
		presses: [
			'you pressed plus',
			'you pressed reset',
			'you pressed minus',
			'some error occured',
		],
	};

	plus = () => {
		let temp = this.state;
		let current = temp.counter + 1;
		this.setState({
			counter: current,
			alert: temp.presses[0],
		});
	};

	minus = () => {
		let temp = this.state;
		if (!(this.state.counter >= 1)) {
			this.setState({
				counter: 0,
				alert: temp.presses[2],
			});
		} else {
			let current = this.state.counter - 1;
			this.setState({
				counter: current,
				alert: temp.presses[2],
			});
		}
	};

	reset = () => {
		let temp = this.state;
		this.setState({
			counter: 0,
			alert: temp.presses[1],
		});
	};

	render() {
		return (
			<div className="center">
				<h2 className="h2">{this.state.alert}</h2>
				<Display
					plus={this.plus}
					reset={this.reset}
					minus={this.minus}
					counter={this.state.counter}
				/>
			</div>
		);
	}
}

export default App;
