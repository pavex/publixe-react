import React from 'react';
//import {Form as SemanticForm} from 'semantic-ui-react';
import Input from './../Input/Input.js';


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



	_getLabelWidth() {
		return this.props.labelWidth || 100;
	};
	
	_getLabelStyle() {
		var style = {};
		style.minWidth = this._getLabelWidth();
		return style;
	};

	_getStyle() {
		var style = {};
		if (this.props.width) {
			style.width = this.props.width; // - this._getLabelWidth();
		}
		return style;
	};

/**
 */
	render() {
		return (
			<div className='px-form-field'>
				<label style={this._getLabelStyle()}>{this.props.label}</label>
		
				<section>
		
					<Input {...this.props}
						
						style={this._getStyle()}
						
						label={this.props.additional}
						value={this.state.value}
						onChange={this._inputChange.bind(this)}
					/>
			
				</section>
			</div>
		);
/*
			<SemanticForm.Input {...this.props}
				value={this.state.value}
				onChange={this._inputChange.bind(this)}
			/>
 */
	};

	
};
