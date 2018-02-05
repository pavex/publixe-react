import React from 'react';
//import Loader from './../Loader/Loader.js';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';
import classNames from 'classnames';
import './Dialog.css';


/**
 */
export default class Dialog extends React.Component {


/**
 * @cnstructor
 * @param {Object} props
 * @param {Object} context
 */
	constructor(props, context) {
		super(props, context);
//
		this.state = {
//			width: this.props.width || null,
//			height: this.props.height || null,
//			fullscreen: this.props.fullscreen || false,
			loading: this.props.loading || false,
			loadingComment: this.props.loadingComment || null
		};
	};





/**
 */
	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	};





/**
 * @private
 * @return {Object}
 */
	_getStyle() {
		return {
			width: this.props.fullscreen ? '100%' : this.props.width,
			height: this.props.fullscreen ? '100%' : this.props.height
		}
	};





/**
 * @private
 * @param {EventTarget} e
 */
	_clickPreventEvent(e) {
		e.stopPropagation();
	};





/**
 * @private
 * @return {React.Element}
 */	
	_renderHeader() {
		if (this.props.title) {
			return (
				<DialogHeader>{this.props.title}</DialogHeader>
			);
		}
		return null;
	};





/**
 * @return {string}
 */
	_getClassName() {
		return classNames('px-dialog-wrapper',
			this.props.fullscreen ? 'fullscreen' : null,
			this.props.loading ? 'loading' : null
		);
	};





/**
						{!this.props.loading ? this.props.children : null}
 */
	render() {
		return (
			<div className={this._getClassName()}>
				<div className="px-dialog-wrapper-content">
					<div className="px-dialog" style={this._getStyle()} onClick={this._clickPreventEvent.bind(this)}>
						{this._renderHeader()}
						{this.props.children}
					</div>
				</div>
			</div>
		);
	};
};





/**
 */
Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;


