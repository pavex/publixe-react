import React from 'react';
import PropTypes from 'prop-types';
import Panel from './../Panel';


/**
 */
export default class Section extends React.Component {


/**
 */
	static propTypes = {
		width: PropTypes.number,
		height: PropTypes.number,
		stretch: PropTypes.bool,
		padding: PropTypes.number
	};





/**
 * @private
 * @return {Object}
 */	
	_getStyle() {
		var style = {};
		
		if (this.props.vertical) {
			style.display = 'table-cell';
			style.verticalAlign = 'top';
		}
		else {
			style.display = 'table-row';
		}
//
		if (this.props.minWidth) {
			style.minWidth = this.props.minWidth;
		}
//		
		if (this.props.width > 0) {
			style.width = this.props.width;
			style.minWidth = this.props.width;
		}
		else if (this.props.stretch) {
			style.width = '100%';
		}
//
		if (this.props.height > 0) {
			style.height = this.props.height;
		}
		else if (this.props.stretch) {
			style.height = '100%';
		}
//
		return style;
	};





/**
 * @pivate
 * @param {Object}
 * @return {Object}
 */
	_renderContent() {
		if (this.props.padding > 0) {
			return (
				<Panel padding={this.props.padding} stretch={this.props.stretch}>
					{this.props.children}
				</Panel>
			);
		}
		return this.props.children;
	};





/**
 */
	render() {
		return (
			<div className="px-layout-section" style={this._getStyle()}>
				{this._renderContent()}
			</div>
		);
	};
	

};
