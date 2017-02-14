import React from 'react';


/**
 */
export default class Content extends React.Component {


/**
 */
	render() {
		return (
			<main className="px-dialog-content">
				{this.props.children}
			</main>
		);
	};


};
