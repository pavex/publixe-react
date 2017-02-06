import React from 'react';


/**
 */
export default class Block extends React.Component {


/**
 */
	render() {
		return this.props.visible ? (
			<span>{this.props.children}</span>
		) : null;
	};
	
};

