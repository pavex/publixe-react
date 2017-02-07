import React from 'react';
import Loader from './Loader';


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
			width: this.props.width
		}
	};





/**
 */
	render() {
		return (
			<div className="publixe-dialog" style={this._getStyle()}>
				<Loader active={this.state.loading} comment={this.state.loadingComment}>
					{this.props.children}
				</Loader>
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


