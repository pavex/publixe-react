import React from 'react';
import {Form as SemanticForm} from 'semantic-ui-react';


/**
 */
class Form extends React.Component {





/**
 * Autofill form fileds value
 * @static
 * @param {Object} refs
 * @param {Object} data
 */
	static putFormValues(refs, data) {
		for (var i in data) {
			if (refs[i] && typeof refs[i].setValue === 'function') {
				refs[i].setValue(data[i]);
			}
		}
	};





/**
 * Get form fileds value
 * @static
 * @param {Object} refs
 * @return {Object} data
 */
	static getFormValues(refs) {
		var data = {};
		for (var i in refs) {
			if (refs[i] && typeof refs[i].getValue === 'function') {
				data[i] = refs[i].getValue();
			}
		}
		return data;
	};





/**
 */
	render() {
		return (
			<div className="ui form">
				{this.props.children}
			</div>
		);
	};


};





/**
 */
class Input extends React.Component {


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





/**
 */
class Checkbox extends React.Component {


/**
 */
	constructor(props, context) {
		super(props, context);
//
		this.state = {
			checked: this.props.checked || false
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
		this.setState({checked: value});
	};





/**
 * @return {string}
 */
	getValue() {
		return this.state.checked;
	};





/**
 * @private
 * @param {EventTarget} e
 */
	_checkboxChange(e) {
		this.setState({
			checked: !this.state.checked
		});
		if (this.props.onChange) {
			this.props.onChange.call(this, e, this.props);
		}
	};





/**
 */
	render() {
		return (
			<SemanticForm.Checkbox {...this.props}
				checked={this.state.checked ? true : false}
				onChange={this._checkboxChange.bind(this)}
			/>		
		);
	};

	
};





/**
 */
Form.Group = SemanticForm.Group;
Form.Input = Input; 
Form.Checkbox = Checkbox; 



 

/**
 */
export default Form;

