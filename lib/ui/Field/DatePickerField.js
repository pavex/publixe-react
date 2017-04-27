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
			selected: this.props.date ? moment(this.props.date) : moment()
		};
	};





/**
 */
	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	};





/**
 * @return {Moment}
 */
	setMoment(moment) {
		this.setState({selected: moment});
	};





/**
 * @return {string|null}
 */
	setValue(value) {
		this.setMoment(moment(value));
	};





/**
 * @return {Moment}
 */
	getMoment() {
		return this.state.selected;
	};





/**
 * @return {string|null}  Return date ISO string
 */
	getValue() {
		var m = this.getMoment();
		return m.isValid() ? m.format('YYYY-MM-DD') : null;
	};





/**
 * @return {string|null}  Return formated date
 */
	getText() {
// TODO:: return formated string, no return valid result yet
//		return this.getMoment().format('L');
	};





/**
 * @private
 * @param {Moment} moment
 */
	_datePickerChange(moment) {
		this.setState({selected: moment}, () => {
			if (this.props.onChange) {
				this.props.onChange.call(this, moment);
			}
		});
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
