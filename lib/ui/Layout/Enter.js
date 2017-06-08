import React from 'react';
import classNames from 'classnames';
import './Layout.css';


/**
 */
export default class Enter extends React.Component {


/**
 */
	static propTypes = {
		size: React.PropTypes.number
	};





/**
 * @private
 * @return {Object}
 */
	_getStyle() {
		var style = this.props.style || {};
		style.height = this.props.size || 8;
		return style;
	};





/**
 * @private
 * @return {string}
 */	
	_getClassName() {
		return classNames('px-enter');
	};





/**
 */
	render() {
		return (
			<div className={this._getClassName()} style={this._getStyle()}></div>
		);
	};


};