import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import Input from './../Input/Input';


/**
 */
export default class InputField extends React.Component {


//
	static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func,
		onBlur: PropTypes.func
	};

/*
	state = {		
	};


//

	constructor(props, context) {
		super(props, context);
//
		this._value = this.props.defaultValue || this.props.value || '';
//
		this.state = {
			value: this.value
		};
	};





//
	componentWillReceiveProps(nextProps) {

console.log('input=', nextProps);

		if (nextProps.value) {
			this.setValue(nextProps.value);
		}
		this.setState(nextProps);
	};





//
	setValue(value) {
		this._value = value;
		this.setState({value: this._value});
	};





//
	getValue() {
		return this.props.visible === false ? null : this._value;
	};





//
	focus() {
		this.refs.input.focus();
	};





//
	_inputChange(value) {
		this.setValue(value);
		if (this.props.onChange) {
			this.props.onChange.call(this, value);
		}
	};




//
	_inputBlur(value) {
		this.setValue(value);
		if (this.props.onBlur) {
			this.props.onBlur.call(this, value);
		}
	};





//
	render() {	
		const {width, label, labelWidth, labelRight, value, inline, hint, visible, important, units, error, required,
			...props} = this.props;
//
		return (
			<Field {...this.props}>
				<Input {...props}
					ref='input'
					value={this.props.value}
					onChange={this._inputChange.bind(this)}
					onBlur={this._inputBlur.bind(this)}
				/>
			</Field>
		);
	};
*/

	render() {	
		const {width, label, labelWidth, labelRight, value, inline, hint, visible, important, units, error, required,
			...props} = this.props
		const fieldProps = {width, label, labelWidth, labelRight, value, inline, hint, visible, important, units, error, required};
//
		return (
			<Field {...fieldProps}>
				<Input {...props}
					value={this.props.value}
				/>
			</Field>
		);
	};
	
	
};
