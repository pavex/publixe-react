import React from 'react';
import './Layout.css';


/**
 */
export default class Rows extends React.Component {


/**
 */
	static propTypes = {
		size: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.number
		]),
		stretch: React.PropTypes.bool
	};





/**
 * @private
 * @return {number|string|null}
 */
//	_getHeight() {
//		return this.props.stretch ? '100%' : this.props.size;
//	};


	
	
	
/**
 * @private
 * @return {Object}
 */
	_getStyle() {
		var style = this.props.style || {};
		style.width = this.props.stretch ? '100%' : null;
		style.height = this.props.stretch ? '100%' : (this.props.size || null);
		return style;
	};
	




/**
 */
	render() {
		return (
			<div className="px-rows" style={this._getStyle()}>
				{this.props.children}
			</div>
		);
	};


};
