import React, { Component } from 'react';
import logo from './nearForm-logo.svg';
import './App.css';
import { Connector } from 'mqtt-react';
import _MessageContainer from './MessageContainer.js';
import {subscribe} from 'mqtt-react';
import API from './API.js';

const MessageContainer = subscribe({topic: '@near/demo'})(_MessageContainer);


class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
	}
  }

	componentDidMount(){
		fetch('https://m1qr4x8s6b.execute-api.us-east-1.amazonaws.com/prod/single_ppk?email=max@microgreen.ca')
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json,
				})
			});
	}

	render() {

		return (
			<Connector mqttProps="ws://test.mosca.io/">
			<div className="App">
			<div className="App-header">
				<h2>Microgreen</h2>
				<API />
			</div>
			<MessageContainer/> 
			</div>
			</Connector>
		);
	}
}

export default App;
