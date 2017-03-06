import React from 'react';
import Select from './../Select/Select.js';


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
//		return this.state.value;
		return this.refs.select.getValue();
	};





/**
 * @private
 * @param {EventTarget} e
 */
	_inputChange(e, props) {
/*
		this.setState({
			value: e.target.value
		});
		if (this.props.onChange) {
			this.props.onChange.call(this, e, this.props);
		}
*/
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
		
					<div className='px-form-field-container'>
		
					<Select {...this.props}
						
						ref='select'
						style={this._getStyle()}
						
						label={this.props.additional}
						value={this.state.value}
						onChange={this._inputChange.bind(this)}
					/>
					
					</div>
			
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