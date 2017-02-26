import React from 'react';


/**
 */
export default class Header extends React.Component {


/**
 */
	render() {
		return (
			<div className="px-dialog-header">
				{this.props.children}
			</div>
		);
	};


};
