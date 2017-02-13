import React from 'react';
import {Input as SemanticInput} from 'semantic-ui-react';


/**
 */
export default class Input extends React.Component {


/**
 * Push component into navigator
 * @private
 * @param {React.Component} component
 * @param {Object} props
 */
	constructor(props, context) {
		super(props, context);
//
		this.state = {
			value: this.props.defaultValue || this.props.value || ''
		};
	};





/**
 */
	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	};





/**
 * @return {string}
 */
	setValue(value) {
		this.setState({value: value});
	};





/**
 * @return {string}
 */
	getValue() {
		return this.state.value;
	};





/**
 * @private
 * @param {EventTarget} e
 * @param {Object} props
 */
	_changeEvent(e) {
		this.setState({
			value: e.target.value
		});
		if (this.props.onChange) {
			this.props.onChange.call(this, e, this.props);
		}
	};





/**
 */
	render() {
		return (
/**
			<div className="ui input">
				<input
					value={this.state.value}
					onChange={this._changeEvent.bind(this)}
				/>
			</div>
 */		
			<SemanticInput {...this.props}
				onChange={this._changeEvent.bind(this)}
			/>		
		);
	};


};

