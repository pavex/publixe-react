import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Layout.css';


/**
 */
export default class Rows extends React.Component {


/**
 */
	static propTypes = {
		size: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		stretch: PropTypes.bool
	};





/** 
 * @private
 * @return {boolean}
 */
	_hasHeight() {
		return this.props.stretch || this.props.size > 0;
	}





/**
 * @private
 * @return {number|string|null}
 */
	_getHeight() {
		return this.props.stretch ? '100%' : (this.props.size || null);
	};





/**
 * @private
 * @return {Object}
 */
	_getStyle() {
		var style = this.props.style || {};
//		style.width = this.props.stretch ? '100%' : null;
		style.height = this._getHeight();
		return style;
	};





/**
 * @private
 * @return {string}
 */
	_getClassName() {
		return classNames('px-rows', this.props.className,
			!!this._hasHeight() ? 'set-size' : null
		);
	};





/**
 */
	render() {
		return (
			<div className={this._getClassName()} style={this._getStyle()}>
				{this.props.children}
			</div>
		);
	};


};
