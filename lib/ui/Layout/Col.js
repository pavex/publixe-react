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
		
		var style = this.props.style || {};

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
		
/*		
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
*/
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
 * @private
 * @return {React.Element}
 */
	_renderChildren() {
		if (this.props.container) {
			return (
				<div className="px-col-container">{this.props.children}</div>
			);
		}
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