import React from 'react';


/**
 */
export default class Content extends React.Component {


/**
 */
	render() {
		return (
			<div className="px-dialog-content">
				<div className="px-dialog-content-container">
					{this.props.children}
				</div>
			</div>
		);
	};


};
