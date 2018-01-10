import React from 'react';


//
export default class Hint extends React.Component {


//
	static propTypes = {
		title: React.PropTypes.string.isRequired,
	};




//
	render() {
		return (
			<sup title={this.props.title} style={{cursor: 'help'}}>?</sup>
		);
	};





}