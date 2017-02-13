import React from 'react';
import MenuComponent from './MenuComponent';


/**
 */
export default class MenuGroup extends MenuComponent {





/**
 * Properties
 */
	static propTypes = {
		menu: React.PropTypes.object,
		title: React.PropTypes.string
	};





/**
 */
	render() {
		return (
			<div className='px-menu-group'>
				<h3>{this.props.title}</h3>
				{this._renderChildren()}
			</div>
		);
	};


};
