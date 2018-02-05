/**
 * @fileoverview Publixe confirm dialog
 * @author pavex@ines.cz
 */


import React from 'react';
import Scene from './../Scene.js';
import Dialog from './../ui/Dialog/Dialog.js';
import Button from './../ui/Button';





/**
 */
export default class Confirm extends Scene {


/**
 * @constructor
 * @param {Object} props
 * @param {Object} context
 */
	constructor(props, context) {
		super(props, context);
		this.state = {};
		this.state.title = this.props.title || 'Confirm';
		this.state.message = this.props.message;
		this.state.width = this.props.width || null;

		this.state.confirmButtonTitle = this.props.buttonTitle || 'Ok';
		this.state.cancelButtonTitle = this.props.buttonTitle || 'Cancel';
		
		this._confirmEvent = this.props.onConfirm || null;
		this._cancelEvent = this.props.onCancel || null;
	};





/**
 * @private
 * @param {EventTarget} e
 */
	_confirmClick(e) {
		if (this._confirmEvent) {
			this._confirmEvent.call(this);
		}
		this.close();
	};





/**
 * @private
 * @param {EventTarget} e
 */
	_cancelClick(e) {
		if (this._cancelEvent) {
			this._cancelEvent.call(this);
		}
		this.close();
	};





/**
 */	
	render() {
		return (
			<Dialog width={this.state.width} title={this.state.title}>
				<Dialog.Content padding>
					{this.state.message}
				</Dialog.Content>

				<Dialog.Actions>
					<Button negative onClick={this._cancelClick.bind(this)}>{this.state.cancelButtonTitle}</Button>
					<Button primary onClick={this._confirmClick.bind(this)} icon='checkmark' labelPosition='right' content={this.state.confirmButtonTitle} />
				</Dialog.Actions>
			</Dialog>
		);
	};


};


