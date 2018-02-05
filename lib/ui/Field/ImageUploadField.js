import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import ImageUpload from './../ImageUpload/';


//
export default class UploadImageField extends React.Component {


//
	static propTypes = {
		src: PropTypes.string,
		onChange: PropTypes.func
	};





/**
 */
	constructor(props, context) {
		super(props, context);
//
		this._value = this.props.defaultValue || this.props.value || '';
		this._uploaded = false;
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
		return this._uploaded ? this._value : false;
	};





/**
 * @private
 * @param {EventTarget} e
 * @param {string|number} value
 */
	_imageUploadSuccess(data) {
		this.setValue(data);
		this._uploaded = true;
		if (this.props.onChange) {
			this.props.onChange.call(this, data);
		}
	};





/**
 */
	render() {
		const {label, labelWidth, labelRight, value, inline, hint, visible,
			...props} = this.props;
		const fieldProps = {label, labelWidth, labelRight, value, inline, hint, visible};
//
		return (
			<Field {...fieldProps}>
				<ImageUpload {...props}
					src={this.state.value}
					onSuccess={this._imageUploadSuccess.bind(this)}
				/>
			</Field>
		);
	};
	
	
};
