import React from 'react';
import Field from './Field';
import DatePicker from './../DatePicker/DatePicker';
//import moment from 'moment';
//import Input from './../Input/Input';


//
export default class DatePickerField extends React.Component {

/*
//
	constructor(props, context) {
		super(props, context);
//
		this.state = {
			selected: this.props.date ? moment(this.props.date) : moment()
		};
	};





//
	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	};





//
	setMoment(moment) {
		this.setState({selected: moment});
	};





//
	setValue(value) {
		this.setMoment(moment(value));
	};





//
	getMoment() {
		return this.state.selected;
	};





//
	getValue() {
		var m = this.getMoment();
		return m && m.isValid() ? m.format('YYYY-MM-DD') : null;
	};





//
	getText() {
// TODO:: return formated string, no return valid result yet
//		return this.getMoment().format('L');
	};





//
	_datePickerChange(moment) {
		this.setState({selected: moment}, () => {
			if (this.props.onChange) {
				this.props.onChange.call(this, moment);
			}
		});
	};




//
	render() {
		const {width, label, labelWidth, labelAtop, labelRight, value, inline, hint, important, disabled, readOnly,
			...props} = this.props;
		const {locale, date, ...inputProps} = props;
		return (
			<Field {...this.props}>
				{!disabled && !readOnly ? (
					<DatePicker {...this.props}
						width={null}
						label={null}
						inline={null}
						selected={this.state.selected}
						onChange={this._datePickerChange.bind(this)}
					/>
				) : (
					<Input disabled={disabled} readOnly={readOnly} {...inputProps}
						value={this.getValue()}
					/>
				)}
			</Field>
		);
	};
*/


	render() {
//		const {width, label, labelWidth, labelAtop, labelRight, value, inline, hint, important, disabled, readOnly,
//			...props} = this.props;
//		const {locale, date, ...inputProps} = props;
		return (
			<Field {...this.props}>
				<DatePicker {...this.props}
					width={null}
					label={null}
					inline={null}
					selected={this.props.date}
				/>
			</Field>
		);
	};

};
