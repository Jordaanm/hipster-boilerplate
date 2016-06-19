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
				{this.props.children}
			</div>
		);
	}
}


export default App;