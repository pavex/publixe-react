import React from 'react';


/**
 */
export default class MenuHeader extends React.Component {


/**
 */
	render() {
		return (
			<div className='px-menu-header'>
				{this.props.children}
			</div>
		);
	};


};
