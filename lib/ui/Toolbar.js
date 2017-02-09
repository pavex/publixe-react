import React from 'react';


/**
 */
export default class Toolbar extends React.Component {


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
 * Shortcuts
 */
Toolbar.Separator = ToolbarSeparator;
