import React from 'react';
import TabSheet from './TabSheet';
//import classNames from 'classnames';
import './Tabs.css';


/**
 */
export default class Tabs extends React.Component {


/**
 */
	_selectedIndex = 0;

	
	
/**
 */
	_tabClick(index) {
		this._selectedIndex = index;
		this.forceUpdate();
	};

	


/**
 * @private
 * @return {React.Element}
 */
	_renderTabs() {
/*		
		var elements = [];
		
		for (var i in this.props.children) {
			var child = this.props.children[i];
			
			var className = this._selectedIndex == i ? 'active' : null;
			
			
			elements.push(
				<a className={className} onClick={this._tabClick.bind(this, i)}>
					{child.props.caption}
				</a>
			);
		}
		return elements;
*/
		var _map = function(child, index) {
		var className = this._selectedIndex == index ? 'active' : null;
			return (
				<a className={className}
					onClick={this._tabClick.bind(this, index)}
				>
					{child.props.caption}
				</a>
			);
		};
		return React.Children.map(
			this.props.children, _map.bind(this)
		);
	};

	
	
	
/**
 * @private
 * @return {React.Element}
 */
	_renderChildren() {
		var _map = function(child, index) {
		var className = this._selectedIndex == index ? 'active' : null;
			return (
				<section className={className}>{child}</section>
			);
		};
		return React.Children.map(
			this.props.children, _map.bind(this)
		);
/**/
	};

	




/**
 */
	render() {
		return (
			<div className="px-tabs">
				<div className="px-tab-captions">{this._renderTabs()}</div>
				{this._renderChildren()}
			</div>
		);
	};


};





/**
 * Shortcuts
 */
Tabs.Sheet = TabSheet;
