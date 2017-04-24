import React from 'react';
/**
 * Using third party UI component available on GitHub
 * https://github.com/Hacker0x01/react-datepicker
 */
import ThirdParty__DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// Add additional style sheet to better visual concept of component
import './DatePicker.css';


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
// Apply patch to update of czech date formats
		this._dateFormat;
		if (this.props.locale.match(/^cs/i)) {
			this._dateFormat = ['DD.MM.YYYY', 'D.M.YYYY'];
		}
	};





/**
 */
	render() {
		return (
			<div className="px-datepicker">
				<ThirdParty__DatePicker
					{...this.props}
					locale={this.props.locale}
					dateFormat={this._dateFormat || null}
					className="px-datepicker-input"
				/>
				<i aria-hidden="true" className="calendar icon"></i>
			</div>
		);
	};


};

