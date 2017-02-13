import React from 'react';
import {Form as SemanticForm} from 'semantic-ui-react';


/**
 */
export default class FormInput extends React.Component {


/**
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
 */
	_inputChange(e) {
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
			<SemanticForm.Input {...this.props}
				value={this.state.value}
				onChange={this._inputChange.bind(this)}
			/>
		);
	};

	
};
