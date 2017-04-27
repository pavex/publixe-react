import React from 'react';
import Field from './Field';
import Select from './../Select/Select';


/**
 */
export default class SelectField extends React.Component {


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
 * @return {string|number}
 */
	getText() {
		var o = this.props.options;
		for (var i in o) {
			if (o[i].value == this.state.value) {
				return o[i].text;
			}
		}
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
		const {width, label, labelWidth, labelAtop, labelRight, value, inline, hint,
			...props} = this.props;
//
		return (
			<Field {...this.props}>
				<Select {...props}
					value={this.state.value}
					onChange={this._inputChange.bind(this)}
				/>
			</Field>
		);
	};


};
