// error at line 26
//code from https://www.youtube.com/watch?v=hzLDsxPGctY

import React, { Component } from 'react';
class API extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
	}
  }

	componentDidMount(){
		fetch('https://m1qr4x8s6b.execute-api.us-east-1.amazonaws.com/prod/single_ppk')
			.then(res => res.json())
			.then(json => {
				this.setState({
					isLoaded: true,
					items: json,
				})
			});
	}

	render() {
		var{ isLoaded, items} = this.state;

		if(!isLoaded) {
			return <div>Loading...</div>;
		}else{
			return(
                <div>
                    Data has been loaded
                </div>
            )
		}

	}
}

export default API;
