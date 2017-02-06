import React from 'react';
import Navigator from './Navigator.js';


/**
 */
class Application extends React.Component {


/**
 * @return {Publixe.Navigator}
 */	
	getNavigator() {
		return this.refs.navigator;
	};





/**
 * @type {Publixe.Scene}
 */
	_initialComponent = null;





/**
 * Set initial scene view
 * @param {Publixe.Scene}
 */
	setInitialComponent(component) {
		this._initialComponent = component;
	};





/**
 * Open/push new scene into React.Navigator
 * @param {Publixe.Scene}
 * @param {Object}
 */
	openScene(component, opt_props) {
		this.getNavigator().open(component, opt_props);
	};





/**
 * Close current scene
 */
	closeScene() {
		this.getNavigator().close();
	};





/**
 * @param {Object} props
 */	
	showAlert(props) {
		this.openScene(require('./scenes/Alert.js').default, props);
	};





/**
 * @param {Object} props
 */	
	showConfirm(props) {
		this.openScene(require('./scenes/Confirm.js').default, props);
	};





/**
 * @param {Object} props
 */	
	showError(props) {
		this.openScene(require('./scenes/Error.js').default, props);
	};





/**
 * Close specific N scenes
 * @param {number} n
 */
//	closeScenes(n) {
//		this.getNavigator().popN(n);
//	};





/** 
 * @private
 * @return {Publixe.Scene}
 */
	_getInitialComponent() {
		return this._initialComponent;
	};





/**
 * Render/JSX component
 * @return {Object}
 */
	render() {
/*
		return (
			<div>
				<div>APP.Navigtor</div>
				<div><Main /></div>
				<div>{this._getInitialComponent()}</div>
			</div>
		);
*/
		return (
			<Navigator ref="navigator"
				application={this}
				initialComponent={this._getInitialComponent()}
			/>
		);
	};


}




/**
 */
export default Application;
