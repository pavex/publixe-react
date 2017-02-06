import React from 'react';
import Panel from './Panel.js';


/**
 */
class Layout extends React.Component {


/**
 */
	static propTypes = {
		width: React.PropTypes.number,
		height: React.PropTypes.number
	};





/**
 * @private
 * @return {Object}
 */	
	_getStyle() {
		return {
			display: 'table',
			width: this.props.width || '100%',
			height: this.props.height || '100%'
		};
	};





/**
 */
	render() {
		return (
			<div className="layout" style={this._getStyle()}>
				{this.props.children}
			</div>
		);
	};
	
};





/**
 */
class Section extends React.Component {


/**
 */
	static propTypes = {
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		stretch: React.PropTypes.bool,
		padding: React.PropTypes.number
	};





/**
 * @private
 * @return {Object}
 */	
	_getStyle() {
		var style = {};
		style.display = 'table-row';
//		
		if (this.props.width > 0) {
			style.width = this.props.width;
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
			<div className="layout-section" style={this._getStyle()}>
				{this._renderContent()}
			</div>
		);
	};
	

};





/**
 */
class Header extends React.Component {


/**
 */
	render() {
		return (
			<Layout.Section {...this.props}>
				{this.props.children}
			</Layout.Section>
		);
	};
	
};





/**
 */
class Content extends React.Component {


/**
 */
	render() {
		return (
			<Layout.Section {...this.props} strecth>
				{this.props.children}
			</Layout.Section>
		);
	};
	
};





/**
 * Shortcuts
 */
Layout.Section = Section;
Layout.Header = Header;
Layout.Footer = Header;
Layout.Content = Content;





/**
 */
export default Layout; 
