/**
 * @fileoverview Publixe UI scene for React Native
 * @author pavex@ines.cz
 */
import React from 'react';


/**
 */
export default class Scene extends React.Component {


/**
 * @contructor
 * @param {Object} props
 * @param {string=} context
 */
	constructor(props, context) {
		super(props, context);
//
		this._application = props.application;
		this._navigator = props.navigator;
		this._parent = props.parent;
//
		this._onWillUnmount = props.onWillUnmount;	
	};





/**
 */
	componentWillUnmount() {
		if (this._onWillUnmount) {
			this._onWillUnmount.call(this);
		}
	}





/**
 * Get navigator component
 * @return {Publixe.Navigator}
 */
	getNavigator() {
		return this._navigator;
	};





/**
 * Get parent scene on React.Navigator
 * @return {Publixe.Scene}
 */
	parent() {
		return this._parent;
	};





/**
 * Get main application controller with React.Navigator
 * @return {Publixe.Application}
 */
	application() {
		return this._application;
	};





/**
 * Open/push new scene into React.Navigator
 * @param {Publixe.Scene}
 * @param {Object}
 */
	open(component, opt_props) {
		var props = opt_props || {};
		props.parent = this;
		this.application().openScene(component, opt_props);
	};





/**
 * Close current scene
 */
	close() {
		this.application().closeScene();
	};





/**
 * Show alert dialog helper with custom message
 * @param {string} message
 * @param {Object=} opt_props
 */
	alert(message, opt_props) {
		var props = opt_props || {};
		props.message = message;
		this.application().showAlert(props);
	};





/**
 * Show confirm dialog helper with custom message
 * @param {string} message
 * @param {function=} opt_confirmEvent
 * @param {Object=} opt_props
 */
	confirm(message, opt_confirmEvent, opt_props) {
		var props = opt_props || {};
		props.message = message;
		props.onConfirm = opt_confirmEvent || null;
		this.application().showConfirm(props);
	};





/**
 * Show error dialog helper with custom message
 * @param {string} message
 * @param {Object=} opt_props
 */
	error(message, opt_props) {
		var props = opt_props || {};
		props.message = message;
		this.application().showError(props);
	};


};

