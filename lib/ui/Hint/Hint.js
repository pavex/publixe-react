import React from 'react';
import PropTypes from 'prop-types';


//
export default class Hint extends React.Component {


//
	static propTypes = {
		title: PropTypes.string.isRequired,
	};




//
	render() {
		return (
			<sup title={this.props.title} style={{cursor: 'help'}}>?</sup>
		);
	};





}