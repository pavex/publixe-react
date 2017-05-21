import React from 'react';
import './Layout.css';


/**
 */
export default class Cols extends React.Component {


/**
 * @private
 * @return {Object}
 */
	_getStyle() {
		var style = this.props.style || {};
		style.width = this.props.stretch ? '100%' : (this.props.size || null);
		style.height = this.props.stretch ? '100%' : null;
		return style;
	};





/**
 */
	render() {
		return (
			<div className="px-cols" style={this._getStyle()}>
				<div className="px-cols-container">
					{this.props.children}
				</div>
			</div>
		);
	};


};