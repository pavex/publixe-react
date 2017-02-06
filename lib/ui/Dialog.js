import React from 'react';


/**
 */
export default class Dialog extends React.Component {


/**
 * @private
 * @return {Object}
 */
	_getStyle() {
		return {
			width: this.props.width
		}
	};





/**
 */
	render() {
		return (
			<div className="publixe-dialog" style={this._getStyle()}>
				{this.props.children}
			</div>
		);
	};


};





/**
 */
class Header extends React.Component {


/**
 */
	render() {
		return (
			<header>
				{this.props.children}
			</header>
		);
	};


};





/**
 */
class Content extends React.Component {


/**
 */
	render() {
		return (
			<main>
				{this.props.children}
			</main>
		);
	};


};





/**
 */
class Actions extends React.Component {


/**
 */
	render() {
		return (
			<footer>
				{this.props.children}
			</footer>
		);
	};


};





/**
 */
Dialog.Header = Header;
Dialog.Content = Content;
Dialog.Actions = Actions;


