import React from 'react';
import PropTypes from 'prop-types';


//
export default class Icon extends React.Component {


//
	static propTypes = {
		name: PropTypes.string
	};





//
	render() {
		return (
			<i className={'icon ' + this.props.name}></i>
		);
	};





}