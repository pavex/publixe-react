import React from 'react';
import {Form as SemanticForm} from 'semantic-ui-react';


/**
 */
export default class Checkbox extends React.Component {


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
