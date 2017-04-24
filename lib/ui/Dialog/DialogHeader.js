import React from 'react';


/**
 */
export default class Header extends React.Component {


/**
 */
	render() {
		return (
			<div className="px-dialog-header">
				<h2>{this.props.children}</h2>
			</div>
		);
	};


};
