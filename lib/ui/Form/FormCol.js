import React from 'react';


/**
 */
export default class FormCol extends React.Component {


	_getStyle() {
		var style = {};
		style.width = this.props.width || '50%'; // Half of col as default value
		style.height = this.props.height || null;
		return style;
	};


	render() {
		return (
			<div className="px-col" style={this._getStyle()}>
				{this.props.children}
			</div>
		);
	};


}