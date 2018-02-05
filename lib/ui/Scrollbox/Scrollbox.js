import React from 'react';
import PropTypes from 'prop-types';


/**
 */
export default class Scrollbox extends React.Component {


/**
 */
	static propTypes = {
		align: PropTypes.string,
		padding: PropTypes.number,
		paddingTop: PropTypes.number,
		paddingRight: PropTypes.number,
		paddingBottom: PropTypes.number,
		paddingLeft: PropTypes.number
	};





/**
 * @return {Object}
 */
	_getStyle() {
		var style = {};
//
		if (this.props.stretch) {
			style.position = 'relative';
			style.width = '100%';
			style.height = '100%';
		}
		else {
//
			if (this.props.padding > 0) {
				style.padding = this.props.padding;
			}

			if (this.props.paddingTop > 0) {
				style.paddingTop = this.props.paddingTop;
			}
			if (this.props.paddingRight > 0) {
				style.paddingRight = this.props.paddingRight;
			}
			if (this.props.paddingBottom > 0) {
				style.paddingBottom = this.props.paddingBottom;
			}
			if (this.props.paddingLeft > 0) {
				style.paddingLeft = this.props.paddingLeft;
			}
		}
//
		return style;
	};





/**
 * @private
 * @return {Object}
 */
	_getContainerStyle() {
		var style = {};
		
		if (this.props.stretch) {
			style.position = 'absolute';
			style.top = this.props.padding;
			style.right = this.props.padding;
			style.bottom = this.props.padding;
			style.left = this.props.padding;
		}
		else {
		}
		return style;
	};





//
	render() {
		return (
			<div className="px-scrollbox" style={this._getStyle()}>
				<div className="px-scrollbox-content" style={this._getContainerStyle()}>
					{React.Children.map(this.props.children, (child) => {return child})}
				</div>
			</div>
		);
	};


};
