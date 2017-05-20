import React from 'react';
import Field from './Field';
import Checkbox from './../Checkbox/Checkbox';


/**
 */
export default class CheckboxField extends React.Component {


/**
 */
	constructor(props, context) {
		super(props, context);
//
		this._checked = this.props.defaultChecked || this.props.checked || '';
//
		this.state = {
			checked: this.checked
		};

		
//
//		this.state = {
//			checked: this.props.checked || false
//		};
	};





/**
 */
	componentWillReceiveProps(nextProps) {
		if (nextProps.checked) {
			this.setChecked(nextProps.checked);
		}
		this.setState(nextProps);
	};





/**
 * @return {boolean}
 */
	setChecked(checked) {
		this._checked = checked;
		this.setState({checked: checked});
	};





/**
 * @return {string|number|boolean}
 */
	setValue(value) {
		this.setChecked(value === true);
	};





/**
 * @return {string|number|boolean}
 */
	getValue() {
		return this._checked;
	};





/**
 * @private
 * @param {EventTarget} e
 * @param {boolean} checked
 */
	_inputChange(e, checked) {
		this.setChecked(checked);
		if (this.props.onChange) {
			this.props.onChange.call(this, e, checked);
		}
	};





/**
 */
	render() {
		const {width, labelWidth, value, inline, hint,
			...props} = this.props;
//
		return (
			<Field width={this.props.width} inline={this.props.inline}>
				<Checkbox {...props}
					checked={this.state.checked}
					onChange={this._inputChange.bind(this)}
				/>
			</Field>
		);
	};


};
