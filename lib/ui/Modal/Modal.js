import React from 'react';
import classnames from 'classnames';
import './Modal.css';


/**
 */
export default class Modal extends React.Component {


/**
 * Push component into navigator
 * @private
 * @param {React.Component} component
 * @param {Object} props
 */
	constructor(props, context) {
		super(props, context);
		this.state = {
			show: this.props.show
		};
		this._listenEnabled = false;
		this._onKeypress = this._keyPressEvent.bind(this);
	};





/**
 */
	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	};

	
	
	
/**
 */
	componentWillUnmount() {
		this._listenKeydown(false);
	};




/** 
 */
	_doCloseEvent() {
		if (this.props.onClose) {
			this.props.onClose.call(this);
		}
	};





/**
 */
	show() {
		this.setState({
			show: true
		});
	};





/**
 */
	hide() {
		this.setState({
			show: false
		});
		this._doCloseEvent();
	};





/**
 * @private
 * @param {EventTarget} e
 */
	_clickEvent(e) {
		if (this.props.closeOnRootNodeClick) {
			this.hide();
		}
	};





/**
 * @private
 * @param {EventTarget} e
 */
	_clickPrefentEvent(e) {
		e.stopPropagation();
	};





/**
 * @private
 * @param {EventTarget} event
 */
	_keyPressEvent(event) {
		if (this.props.closeOnEscape) {
			if (event.keyCode === 27){
				this.hide();
			}
		}
	};





/**
 * @private
 * @param {boolean} enable
 */	
	_listenKeydown(enable) {
		if (enable !== this._listenEnabled) {
			if (enable) {
				document.addEventListener("keydown", this._onKeypress, false);
			}
			else {
				document.removeEventListener("keydown", this._onKeypress, false);
			}
			this._listenEnabled = enable;
		}
	};





/**
 * @private
 * @return {string}
 */
	_getDimmerClassName() {
		return classnames('dimmer', this.props.dimmer);
	};





/**
 */
	render() {
		this._listenKeydown(this.state.show);
//
		if (!this.state.show) {
			return null;
		}
//
		return (
			<div className="px-modal">
				<div className={this._getDimmerClassName()}></div>
				<div className="px-modal-window">
					<div className="px-modal-window-cell" onClick={this._clickEvent.bind(this)}>
						<div className="px-modal-window-content" onClick={this._clickPrefentEvent.bind(this)}>
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	};


};





/**
 * Default props
 */
Modal.defaultProps = {
	closeOnRootNodeClick: true,
	closeOnEscape: true
};

