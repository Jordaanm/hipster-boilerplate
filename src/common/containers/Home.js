import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		let { value, increment, decrement} = this.props;
		return (
			<div>
				<Counter
					value={value}
					onIncrement={increment}
					onDecrement={decrement}
				/>
			</div>
		);
	}
}

let mapStateToProps = function(state){
	return {
		value: state.value
	};
}

let mapDispatchToProps = function(dispatch){
	return bindActionCreators({
		increment: () => ({type: 'INCREMENT'}),
		decrement: () => ({type: 'DECREMENT'})
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);