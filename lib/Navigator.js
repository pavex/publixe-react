import React from 'react';
import Modal from './ui/Modal/Modal.js';


/**
 */
class Navigator extends React.Component {


/**
 */
/*	constructor(props, context) {
		super(props, context);
		this._push(props.initialComponent, {});
	};
*/




/**
 * @private
 * @type {array)
 */
	_childs = [];





/**
 * Push component into navigator
 * @private
 * @param {React.Component} component
 * @param {Object} props
 */
	_push(component, props) {
		this._childs.push({
			component: component,
			props: props
		});
	};





/**
 * Pop component from navigator
 * @private
 */
	_pop() {
		this._childs.splice(this._childs.length - 1, 1);
	};





/**
 * @param {React.Component} component
 * @param {Object} props
 */	
	open(component, props) {
		this._push(component, props);
		this.forceUpdate();
	};





/**
 */
	close() {
		this._pop();
		this.forceUpdate();
	};





/**
 * Modal close event by another way rhan manual close()
 * @private
 * @param {EventTarget} e
 * @param {Object} props
 */
	_modalCloseEvent(e, props) {
		this._pop();
	};





/**
 * Unmount modal dialog
 * @private
 * @param {EventTarget} e
 * @param {Object} props
 */	
	_modalUnmountEvent(e, props) {
		this.forceUpdate();
	};





/**
 * @private
 * @return {boolean}
 */
	_hasChildren() {
		return this._childs.length > 0;
	};





/**
 * Return last parent component
 * @private
 * @return {Object}
 */
/*
	_getParentComponent() {
//console.log('_getParentComponent=', this._childs.length, this._childs.length > 0);
		if (this._childs.length > 0) {
//console.log('_getParentComponent object=', this._childs[this._childs.length - 1]);
			return this._childs[this._childs.length - 1];
		}
		return null;
	}





/**
 */	
/*
	getParentComponent() {
console.log('childs=', this._childs);
//		if (this._childs.length > 0) {
//			return this._childs[this._childs.length - 1];
//		}
		return this.props.initialComponent;
	};





/**
 * @private
 * @param {number} idnex
 * @return {React.Element}
 */
	_renderIndex(index) {
		const child = this._childs[index];
		const nextIndex = index + 1;
		const hasChildren = this._childs.length > nextIndex;
//
		child.props.navigator = this;
		child.props.application = this.props.application;
//		child.parent = this._getParentComponent();
//
/*
			<Modal
				defaultOpen={true}
				width={child.props.width}
				onClose={this._modalCloseEvent.bind(this)}
				onUnmount={this._modalUnmountEvent.bind(this)}
			>	
				<Modal.Header>{child.props.title}</Modal.Header>
				<Modal.Content>
					{React.createElement(child.component, child.props)}
				</Modal.Content>

				{hasChildren ? this._renderIndex(nextIndex) : null}
			</Modal>
*/
		return (
			<Modal
//				defaultOpen={true}
//				width={child.props.width}
				show={true}
				onClose={this._modalCloseEvent.bind(this)}
				onUnmount={this._modalUnmountEvent.bind(this)}
			>	
				{React.createElement(child.component, child.props)}
				{hasChildren ? this._renderIndex(nextIndex) : null}
			</Modal>
		);
	}





/**
 * @private
 * @return {React.Element}
 */
	_renderChilds() {
		if (this._hasChildren()) {
			return this._renderIndex(0);
		}
		return null;
	};





/**
 */
	render() {
		const props = {
			navigator: this,
			application: this.props.application,
//			parent: this._getParentComponent()
		};
//
		return (
			<div>
				{React.createElement(this.props.initialComponent, props)}
				{this._renderChilds()}
			</div>
		);
	};


}





/**
 * Properties
 */
//Navigator.propTypes.initialComponent = React.PropTypes.element;





/**
 */
export default Navigator;
