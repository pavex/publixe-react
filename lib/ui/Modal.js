import React from 'react';
import classnames from 'classnames';


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
//
//console.log('modal.constructor', this.props);
		this.state = {
			show: this.props.show
		};
		this._listenEnabled = false;
		this._onKeypress = this._keyPressEvent.bind(this);
	};





/**
 */
	componentWillReceiveProps(nextProps) {
//console.log('componentWillReceiveProps', nextProps);

		this.setState(nextProps, function() {
//			console.log('after componentWillReceiveProps');
		});
//		this.setState({
//			show: nextProps.show
//		});
	};

	
	
	
/**
 */
	componentWillUnmount() {
//		console.info('modal componentWillUnmount');
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
//console.log('hide');
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
//		event.preventDefault();
	};





/**
 * @private
 * @param {boolean} enable
 */	
	_listenKeydown(enable) {
		if (enable !== this._listenEnabled) {
			if (enable) {
//console.log('modal listen');
				document.addEventListener("keydown", this._onKeypress, false);
			}
			else {
//console.log('modal unlisten');
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
		return classnames(
			'dimmer',
			this.props.dimmer,
		);
	};





/**
 */
	render() {
//console.log('modal.render', this.state);
		this._listenKeydown(this.state.show);
		if (!this.state.show) {
			return null;
		}

// Include stylesheet
//		require('./App.css');
//
		return (
			<div className="publixe-modal">
				<div className={this._getDimmerClassName()}></div>
				<div className="window">
					<div className="window-cell" onClick={this._clickEvent.bind(this)}>
						<div className="window-content" onClick={this._clickPrefentEvent.bind(this)}>
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

