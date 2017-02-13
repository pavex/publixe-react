import React from 'react';
import classNames from 'classnames';


/**
 */
export default class Item extends React.Component {


/**
 * Properties
 */
	static propTypes = {
		menu: React.PropTypes.object,
		selected: React.PropTypes.bool,
		onClick: React.PropTypes.func
	};





/**
 */
	constructor(props, context) {
		super(props, context);
//
		this.state = {
			menu: this.props.menu || null,
			selected: this.props.selected || false
		};
	};





/**
 */
	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	};





/**
 * @param {boolean} selected
 */
	setSelected(selected) {
		this.setState({
			selected: selected
		});
	};





/**
 * @return {boolean}
 */	
	hasMenu() {
		return typeof this.props.menu === 'object';
	};





/**
 * Return instance of menu component
 * @param {React.Component}
 */
	getMenu() {
		return this.props.menu;
	};





/**
 * @private
 */
	_click() {
		if (this.hasMenu()) {
			this.getMenu().setSelected(this);
		}
		if (this.props.onClick) {
			this.props.onClick.call(this);
		}
	};





/**
 * @private
 * @return {string}
 */
	_getClassName() {
		return classNames('px-menu-item',
			this.state.selected ? 'selected' : null);
	};





/**
 */
	render() {	
		return (
			<div className={this._getClassName()}
				onClick={this._click.bind(this)}
			>	
				{this.props.children}
			</div>
		);
	};


};

