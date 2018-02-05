import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Layout.css';


/**
 */
export default class Col extends React.Component {


/**
 */
	static propTypes = {
		size: PropTypes.oneOfType([	// set width
			PropTypes.string,
			PropTypes.number
		]),
		stretch: PropTypes.bool,		// strecth width to 100%
		paddingLeft: PropTypes.number
	};





/**
 * @private
 * @return {Object}
 */
	_getStyle() {
		
		var style = this.props.style || {};

//
		style.paddingLeft = this.props.paddingLeft || null;
		
		
//		
		if (this.props.stretch) {
			style.width = '100%';
			return style;
		}
		if (Number.isInteger(this.props.size)) {
			style.minWidth = this.props.size;
			return style;
		}
		else if (this.props.size) {
			style.width = this.props.size;
			return style;
		}
		style.width = '50%';
		return style;
	};





/**
 * @private
 * @return {string}
 */	
	_getClassName() {
		return classNames('px-col');
	};





/**
 * @private
 * @return {React.Element}
 */
	_renderChildren() {
		return this.props.children;
	};





/**
 */
	render() {
		return (
			<div className={this._getClassName()} style={this._getStyle()}>
				{this._renderChildren()}
			</div>
		);
	};


};