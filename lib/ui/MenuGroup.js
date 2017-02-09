import React from 'react';


/**
 */
export default class Group extends React.Component {


/**
 */
	render() {
		return (
			<div className='px-menu-group'>
				<h3>{this.props.title}</h3>
				{this.props.children}
			</div>
		);
	};


};
