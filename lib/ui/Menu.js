import React from 'react';
import MenuHeader from './MenuHeader';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import './Menu.css';


/**
 */
export default class Menu extends React.Component {


/**
 */
	render() {
		return (
			<div className='px-menu'>
				<div className='px-menu-container'>
					{this.props.children}
				</div>
			</div>
		);
	};


};





/**
 */
Menu.Header = MenuHeader;
Menu.Group = MenuGroup;
Menu.Item = MenuItem;
