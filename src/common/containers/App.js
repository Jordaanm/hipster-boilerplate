import React, { Component } from 'react';

if ( process.env.BROWSER ) {
	require('../../styles/app.less');
}

class App extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<div>
				<h1>MY APP</h1>
				{this.props.children}
			</div>
		);
	}
}


export default App;