import React from 'react';
import Loader from './Loader';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';


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
Dialog.Header = DialogHeader;
Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;


