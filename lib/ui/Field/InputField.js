import React from 'react';
import Field from './Field';
import Input from './../Input/Input';


/**
 */
export default class InputField extends React.Component {


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
 * @return {string|number}
 */
	setValue(value) {
		this.setState({value: value});
	};





/**
 * @return {string|number}
 */
	getValue() {
		return this.state.value;
	};





/**
 * @private
 * @param {EventTarget} e
 * @param {string|number} value
 */
	_inputChange(e, value) {
		this.setValue(value);
		if (this.props.onChange) {
			this.props.onChange.call(this, e, value);
		}
	};





/**
 */
	render() {
		return (
			<Field {...this.props}>
				<Input {...this.props}
					width={null}
					label={null}
					value={this.state.value}
					onChange={this._inputChange.bind(this)}
				/>
			</Field>
		);
	};
	
	
};
