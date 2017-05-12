import React from 'react';
import Field from './Field';
import Input from './../Input/Input';


/**
 */
export default class InputField extends React.Component {


/**
 */
	static propTypes = {
		value: React.PropTypes.string,
		onChange: React.PropTypes.func
	};





/**
 */
	constructor(props, context) {
		super(props, context);
//
		this._value = this.props.defaultValue || this.props.value || '';
//
		this.state = {
			value: this.value
		};
	};





/**
 */
	componentWillReceiveProps(nextProps) {
		if (nextProps.value) {
			this.setValue(nextProps.value);
		}
		this.setState(nextProps);
	};





/**
 * @return {string|number}
 */
	setValue(value) {
		this._value = value;
		this.setState({value: this._value});
	};





/**
 * @return {string|number}
 */
	getValue() {
		return this._value;
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
		const {width, label, labelWidth, labelRight, value, inline, hint, visible,
			...props} = this.props;
//
		return (
			<Field {...this.props}>
				<Input {...props}
					value={this.state.value}
					onChange={this._inputChange.bind(this)}
				/>
			</Field>
		);
	};
	
	
};
