import React from 'react';
import classNames from 'classnames';
import './Layout.css';


/**
 */
export default class Row extends React.Component {


/**
 */
	static propTypes = {
		size: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.number
		]),
		stretch: React.PropTypes.bool,
		padding: React.PropTypes.bool,
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		containerClassName: React.PropTypes.string,
		containerStyle: React.PropTypes.object
	};





/**
 * @private
 * @return {number|string|null}
 */
	_getHeight() {
		return this.props.stretch ? '100%' : this.props.size;
	};





/**
 * @private
 * @return {string}
 */
	_getClassName() {
		return classNames('px-row', this.props.className);
	};





/**
 * @private
 * @return {Object}
 */
	_getStyle() {
		var style = this.props.style || {};
		style.height = this._getHeight();
		return style;		
//		return [this.props.style, {
//			height: this._getHeight()
//		}];
	};





/**
 * @private
 * @return {string}
 */
	_getContainerClassName() {
		return classNames('px-row-container', this.props.containerClassName);
	};





/**
 * @private
 * @return {Object}
 */
	_getContainerStyle() {
		var style = this.props.style || {};
//		style.padding = this.props.padding ? 8 : 0;
		style.paddingTop = this.props.padding || this.props.verticalPadding ? 8 : 0;
		style.paddingBottom = this.props.padding || this.props.verticalPadding ? 8 : 0;
		style.paddingLeft = this.props.padding || this.props.horizontalPadding ? 8 : 0;
		style.paddingRight = this.props.padding || this.props.horizontalPadding ? 8 : 0;
		return style;		
//		return [this.props.containerStyle, {
//			padding: this.props.padding ? 8 : 0
//		}];
	};





/**
 */
	render() {
		return (
			<div className={this._getClassName()} style={this._getStyle()}>
				<div className={this._getContainerClassName()} style={this._getContainerStyle()}>
					{this.props.children}
				</div>
			</div>
		);
	};


};