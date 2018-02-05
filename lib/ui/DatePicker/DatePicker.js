import React from 'react';
/**
 * Using third party UI component available on GitHub
 * https://github.com/Hacker0x01/react-datepicker
 */
import TPDatePicker from 'react-datepicker';
import moment from 'moment';
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
		this._dateFormat = null;
		if (this.props.locale && this.props.locale.match(/^cs/i)) {
			this._dateFormat = ['DD.MM.YYYY', 'D.M.YYYY'];
		}
	};

	
	
	
	_getValidSelected() {
		if (!!this.props.selected) {
			var m = moment(this.props.selected);
			if (m.isValid()) {
				return m;
			}
		}
//		return moment();
		return null;
	};

	
	
//
	_clickEvent(proxy, e) {
		proxy.stopPropagation();
//		e.stopPropagation();
		this.refs.datepicker.setFocus();
	};



/**
 */
	render() {
		return (
			<div className="px-datepicker"
				onClick={this._clickEvent.bind(this)}
			>
				<TPDatePicker
					{...this.props}
					ref="datepicker"
					locale={this.props.locale}
					dateFormat={this._dateFormat || null}
					className="px-datepicker-input"
					selected={this._getValidSelected()}
					placeholderText={this.props.placeholder}
				/>
				<i aria-hidden="true" className="calendar icon"></i>
			</div>
		);
	};


};

