import React from 'react';
import Field from './Field';
import DatePicker from './../DatePicker/DatePicker';
import moment from 'moment';


/**
 */
export default class DatePickerField extends React.Component {


/**
 */
	constructor(props, context) {
		super(props, context);
//
		this.state = {
			selected: moment(this.props.date || null)
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
//		this.setState({value: value});
	};





/**
 * @return {Moment}
 */
	getMoment() {
		return this.state.selected;
	};





/**
 * @return {string|number}  Return date ISO string
 */
	getValue() {
		var m = this.getMoment();
		return m.isValid() ? m.format('YYYY-MM-DD') : null;
	};





/**
 * @return {string|number}  Return formated date
 */
	getText() {
// TODO:: return formated string, no return valid result yet
//		return this.getMoment().format('L');
	};





/**
 * @private
 * @param {Moment} moment
 */
	_datePickerChange(moment, a, b, c) {
		this.setState({
			selected: moment
		});
		if (this.props.onChange) {
			this.props.onChange.call(this, moment);
		}
	};





/**
 */
	render() {
		return (
			<Field {...this.props}>
				<DatePicker {...this.props}
					width={null}
					label={null}
					inline={null}
					selected={this.state.selected}
					onChange={this._datePickerChange.bind(this)}
				/>
			</Field>
		);
	};


};
