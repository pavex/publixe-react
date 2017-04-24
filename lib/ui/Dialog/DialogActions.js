import React from 'react';


/**
 */
export default class Actions extends React.Component {


/**
 */
	render() {
		return (
			<div className="px-dialog-footer">
				<span>
					{this.props.children}
				</span>
			</div>
		);
	};


};
