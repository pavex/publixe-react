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
			this.props.labelRight ? 'right' : null,
			this.props.important ? 'important' : null
		);
	};





/**
 * @private
 * @return {number}
 */
	_getLabelWidth() {
		return !this.props.labelAtop ? this.props.labelWidth || 100 : null;
	}





/**
 * @private
 * @return {Object}
 */
	_getLabelStyle() {
		return {
			minWidth: this._getLabelWidth(),
			lineHeight: this.props.height ? this.props.height + 'px' : null,
			verticalAlign: this.props.height ? 'top' : 'middle'
		};
	};





/**
 * @private
 * @return {Object}
 */
	_getContainerStyle() {	
		return {
			width: this.props.width ? this.props.width : 'calc(100% - ' + this._getLabelWidth() + 'px)',
			height: this.props.height ? this.props.height : null
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
 * @private
 * @return {React.Element}
 */
	_renderUnits() {
		if (!this.props.units) {
			return null;
		}
		return (
			<span>
				{this.props.units}
			</span>
		);
	};





/**
 */
	render() {
		
		if (this.props.visible === false) {
			return null;
		}
		
		
		return (
			<div className={this._getClassName()} title={this.props.hint}>
				{this._renderLabel()}
				<div className='px-field-container'
					style={this._getContainerStyle()}>
					{this.props.children}
				</div>
				{this._renderUnits()}
			</div>
		);
	};


}
