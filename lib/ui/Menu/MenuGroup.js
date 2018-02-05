import React from 'react';
import PropTypes from 'prop-types';
import MenuComponent from './MenuComponent';


/**
 */
export default class MenuGroup extends MenuComponent {





/**
 * Properties
 */
	static propTypes = {
		menu: PropTypes.object,
		title: PropTypes.string,
		visible: PropTypes.bool
	};





/**
 */
	static defaultProps = {
		visible: true
	};





/**
 */
	render() {
		if (!this.props.visible) {
			return false;
		}
		return (
			<div className='px-menu-group'>
				<h3>{this.props.title}</h3>
				{this._renderChildren()}
			</div>
		);
	};


};
