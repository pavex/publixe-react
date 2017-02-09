import React from 'react';


/**
 */
export default class Item extends React.Component {


/**
 */
	render() {
		return (
			<div className='px-menu-item'>
				<span>{this.props.children}</span>
			</div>
		);
	};


};
