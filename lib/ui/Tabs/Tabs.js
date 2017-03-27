import React from 'react';
import TabSheet from './TabSheet';
import classNames from 'classnames';


/**
 */
export default class Tabs extends React.Component {


/** @private @param {Number}
 */
	_selectedIndex = 0;





/**
 */
	_tabClick(index, child) {
		this._selectedIndex = index;
		if (child.props.onSelect) {
			child.props.onSelect.call(this, index);
		}
		this.forceUpdate();
	};





/**
 * @private
 * @return {React.Element}
 */
	_renderTabs() {
		var _map = function(child, index) {
		var className = this._selectedIndex == index ? 'active' : null;
			return (
				<a className={className}
					onClick={this._tabClick.bind(this, index, child)}
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
			var className = classNames('px-tab-section',
				this._selectedIndex == index ? 'active' : null
			);
			return (
				<div className={className}>{child}</div>
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
				<div className="px-tab-captions">
					<div className="px-tab-captions-container">
						{this._renderTabs()}
					</div>
				</div>
				{this._renderChildren()}
			</div>
		);
	};


};





/**
 * Shortcuts
 */
Tabs.Sheet = TabSheet;
