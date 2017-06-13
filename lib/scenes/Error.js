/**
 * @fileoverview Publixe alert dialog
 * @author pavex@ines.cz
 */


import React from 'react';
import Scene from './../Scene.js';
import Dialog from './../ui/Dialog/Dialog.js';

// Additinal components
import {Button} from 'semantic-ui-react';





/**
 */
export default class Error extends Scene {


/**
 * @constructor
 * @param {Object} props
 * @param {Object} context
 */
	constructor(props, context) {
		super(props, context);
		this.state = {};
		this.state.title = this.props.title || 'Error!';
		this.state.message = this.props.message;
		this.state.width = this.props.width || null;
		this.state.buttonTitle = this.props.buttonTitle || 'Close';
	};





/**
 * @private
 * @param {EventTarget} e
 */
	_closeClick(e) {
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
					<Button primary inverted color="red" onClick={this._closeClick.bind(this)}>{this.state.buttonTitle}</Button>
				</Dialog.Actions>
			</Dialog>
		);
	};


};


