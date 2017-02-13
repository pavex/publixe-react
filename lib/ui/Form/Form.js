import React from 'react';
import FormGroup from './FormGroup';
import FormInput from './FormInput';
import FormCheckbox from './FormCheckbox';
import './Form.css';


/**
 */
export default class Form extends React.Component {





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
Form.Group = FormGroup;
Form.Input = FormInput; 
Form.Checkbox = FormCheckbox; 
