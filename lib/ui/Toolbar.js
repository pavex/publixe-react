import React from 'react';


/**
 */
class Toolbar extends React.Component {


/**
 * @priate
 * @return {Object}
 */
	_getStyle() {
		var style = {};
//
		if (this.props.left === true) {
			style.float = 'left';
		}
		else if (this.props.right === true) {
			style.float = 'right';
		}
		else if (!this.props.flat) {
			style.padding = 10;
		}
//
		return style;
	};





/**
 */
	render() {
		return (
			<div className="toolbar" style={this._getStyle()}>
				{this.props.children}
			</div>
		);
	};


};





/**
 */
class Separator extends React.Component {


/**
 */
	style = {
		default: {
			display:'inline',
			minHeight: '1em',
			verticalAlign:'baseline',
			marginRight:'0.2em',
			border: 1,
			borderStyle: 'dotted',
			borderColor: 'silver'
		}
	};





/**
 */
	render() {
		return (
			<div style={this.style.default}></div>
		);
	};


};





/**
 * Separator
 */
Toolbar.Separator = Separator;





/**
 */
export default Toolbar;
