import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import TextArea from './../TextArea/TextArea';


/**
 */
export default class TextAreaField extends React.Component {


/**
 */
	static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func
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
	_inputChange(value) {
		this.setValue(value);
		if (this.props.onChange) {
			this.props.onChange.call(this, value);
		}
	};





/**
 */
	render() {
		const {width, height, label, labelWidth, labelRight, value, inline, hint, visible,
			...props} = this.props;
		const fieldProps = {width, height, label, labelWidth, labelRight, value, inline, hint, visible};
//
		return (
			<Field {...fieldProps}>
				<TextArea {...props}
					value={this.state.value}
					onChange={this._inputChange.bind(this)}
				/>
			</Field>
		);
	};
	
	
};
