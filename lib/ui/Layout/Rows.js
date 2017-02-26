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
	_getHeight() {
		return this.props.stretch ? '100%' : this.props.size;
	};





/**
 */
	render() {
		return (
			<div className="px-rows" style={{height: this._getHeight()}}>
				{this.props.children}
			</div>
		);
	};


};
