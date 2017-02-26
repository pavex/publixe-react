import React from 'react';
import classNames from 'classnames';
import './Layout.css';


/**
 */
export default class Col extends React.Component {


/**
 */
	static propTypes = {
		size: React.PropTypes.oneOfType([	// set width
			React.PropTypes.string,
			React.PropTypes.number
		]),
		stretch: React.PropTypes.bool,		// strecth width to 100%
		container: React.PropTypes.bool		// without paddings
	};





/**
 * @private
 * @return {Object}
 */
	_getStyle() {
		if (this.props.stretch) {
			return {
				width: '100%'
			};
		}
		if (Number.isInteger(this.props.size)) {
			return {
				minWidth: this.props.size
			};
		}
		else if (this.props.size) {
			return {
				width: this.props.size
			};
		}
		return {
			width: '50%'
		};
	};





/**
 * @private
 * @return {string}
 */	
	_getClassName() {
		return classNames(
			'px-col',
			this.props.container ? 'container' : null
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