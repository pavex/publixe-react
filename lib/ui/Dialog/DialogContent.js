import React from 'react';


/**
 */
export default class Content extends React.Component {


/**
 */
	render() {
		return (
			<div className="px-dialog-content">
				{this.props.children}
			</div>
		);
	};


};
