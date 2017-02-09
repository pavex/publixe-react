import React from 'react';
import LayoutSection from './LayoutSection';
import LayoutHeader from './LayoutHeader';
import LayoutContent from './LayoutContent';


/**
 */
export default class Layout extends React.Component {


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
 * Shortcuts
 */
Layout.Section = LayoutSection;
Layout.Header = LayoutHeader;
Layout.Footer = LayoutHeader;
Layout.Content = LayoutContent;

