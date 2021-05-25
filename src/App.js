import React, { Component } from 'react';
import logo from './nearForm-logo.svg';
import './App.css';
import { Connector } from 'mqtt-react';
import _MessageContainer from './components/Class/MessageContainer.js';
import {subscribe} from 'mqtt-react';
import API from './API.js';
import HookMqtt from './components/Hook/';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);
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
				<HookMqtt />
				<AmplifySignOut />
			</div>
			<MessageContainer/> 
			</div>
			</Connector>
		);
	}
}

export default App;
