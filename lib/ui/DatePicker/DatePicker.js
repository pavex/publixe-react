import React from 'react';
import ThirdParty__DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
//import moment from 'moment';


/**
 */
export default class DatePicker extends React.Component {


/**
 * @cnstructor
 * @param {Object} props
 * @param {Object} context
 */
	constructor(props, context) {
		super(props, context);
//
// Apply patch to update czech date formats
		this._dateFormat;
		if (this.props.locale.match(/^cs/i)) {
			this._dateFormat = ['DD.MM.YYYY', 'D.M.YYYY'];
		}
//
//		this.state = {
//			selected: moment(this.props.date || null)
//		};
	};





/**
 * @private
 * @param {Moment} moment
 */
/*
	_datePickerChange(moment) {
		this.setState({
			selected: moment
		});
		if (this.props.onChange) {
			this.props.onChange.call(this, moment);
		}
	};
*/




/**
 */
/**
				selected={this.state.selected}
				onChange={this._datePickerChange.bind(this)}
*/
	render() {
		return (
			<div className="px-datepicker">
				<ThirdParty__DatePicker {...this.props}
					dateFormat={this._dateFormat || null}
					className="px-datepicker-input"
				/>
				<i aria-hidden="true" className="calendar icon"></i>
			</div>
		);
	};


};

