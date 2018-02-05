import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/**
 */
export default class MenuItem extends React.Component {


/**
 * Properties
 */
	static propTypes = {
		menu: PropTypes.object,
		selected: PropTypes.bool,
		visible: PropTypes.bool,
		onClick: PropTypes.func
	};





/**
 */
	static defaultProps = {
		selected: false,
		visible: true
	};





/**
 */
	constructor(props, context) {
		super(props, context);
//
		this.state = {
			menu: this.props.menu || null,
			selected: this.props.selected || false,
			disabled: this.props.disabled || false
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
			this.state.selected ? 'selected' : null,
			this.state.disabled ? 'disabled' : null,
		);
	};





/**
 */
	render() {
		if (!this.props.visible) {
			return false;
		}
		return (
			<div className={this._getClassName()}
				onClick={this._click.bind(this)}
			>	
				{this.props.children}
			</div>
		);
	};


};

