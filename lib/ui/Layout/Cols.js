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