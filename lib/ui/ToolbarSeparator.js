import React from 'react';
import ToolbarSeparator from './ToolbarSeparator';

/**
 */
export default class Separator extends React.Component {


/**
 */
	style = {
		default: {
			display:'inline',
			minHeight: '1em',
			verticalAlign:'baseline',
			marginRight:'0.2em',
			border: 1,
			borderStyle: 'dotted',
			borderColor: 'silver'
		}
	};





/**
 */
	render() {
		return (
			<div style={this.style.default}></div>
		);
	};


};
