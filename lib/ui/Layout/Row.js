import React from 'react';
import './Layout.css';


/**
 */
export default class Row extends React.Component {


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
	_getHeigth() {
		return this.props.stretch ? '100%' : this.props.size;
	};





/**
 */
	render() {
		return (
			<div className="px-row" style={{height: this._getHeigth()}}>
				<div className="px-row-container">
					{this.props.children}
				</div>
			</div>
		);
	};


};