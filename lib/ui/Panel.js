import React from 'react';


/**
 */
export default class Panel extends React.Component {


/**
 */
	static propTypes = {
		align: React.PropTypes.string,
		padding: React.PropTypes.number,
		paddingTop: React.PropTypes.number,
		paddingRight: React.PropTypes.number,
		paddingBottom: React.PropTypes.number,
		paddingLeft: React.PropTypes.number
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





/**
 */
	render() {
		return (
			<div className="panel" style={this._getStyle()}>
				<div className="panel-content" style={this._getContainerStyle()}>
					{this.props.children}
				</div>
			</div>
		);
	};


};
