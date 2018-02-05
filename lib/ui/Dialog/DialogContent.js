import React from 'react';


/**
 */
export default class Content extends React.Component {





/**
 */	_getStyle() {
		var style = {};
		style.padding = this.props.padding ? 16 : null;
		return style;
	};





/**
 */
	render() {
		return (
			<div className="px-dialog-content" style={this._getStyle()}>
				{this.props.children}
			</div>
		);
	};


};
