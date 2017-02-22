import React from 'react';
import classNames from 'classnames';
import './Field.css';


/**
 */
export default class Field extends React.Component {


/**
 * @private
 * @return {string}
 */
	_getClassName() {
		return classNames(
			'px-field',
			this.props.inline ? 'inline' : null,
			this.props.labelAtop ? 'atop' : null,
			this.props.labelRight ? 'right' : null
		);
	};





/**
 * @private
 * @return {Object}
 */
	_getLabelStyle() {
		return {
			minWidth: this.props.labelWidth || 100
		};
	};





/**
 * @private
 * @return {Object}
 */
	_getSectionStyle() {
		return {
			width: this.props.width
		};
	};





/**
 * @private
 * @return {React.Element}
 */
	_renderLabel() {
		if (!this.props.label) {
			return null;
		}
		return (
			<label style={this._getLabelStyle()}>
				{this.props.label}
				{this.props.hint ? <sup>?</sup> : null}
			</label>
		);
	};





/**
 */
	render() {
		return (
			<div className={this._getClassName()} title={this.props.hint}>
				{this._renderLabel()}
				<div className='px-field-container'
					style={this._getSectionStyle()}>
					{this.props.children}
				</div>
			</div>
		);
	};


}
