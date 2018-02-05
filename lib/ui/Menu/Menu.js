import React from 'react';
import PropTypes from 'prop-types';
import MenuComponent from './MenuComponent';
import MenuHeader from './MenuHeader';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import './Menu.css';


/**
 */
export default class Menu extends MenuComponent {


/**
 * Properties
 */
	static propTypes = {
		onSelect: PropTypes.func
	};





/** @private @type {React.Component|NULL} Selected menu item */
	_selected;





/**
 * @private
 * @param {boolean} selected
 */	
	_setItemSelected(selected) {
		this._selected.setState({
			selected: selected
		});
	};





/**
 * @param {menuItem} selected  Menu item instance
 */
	setSelected(menuItem) {
		if (this._selected) {
			this._setItemSelected(false);
		}
		if (menuItem !== null) {
			this._selected = menuItem;
			this._setItemSelected(true);
		}
		if (this.props.onSelect) {
			this.props.onSelect.call(this, menuItem);
		}
	};





/**
 */
	render() {
		return (
			<div className='px-menu'>
				<div className='px-menu-container'>
					{this._renderChildren()}
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
