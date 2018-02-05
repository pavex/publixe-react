import React from 'react';
import './Checkbox.css';


/**
 */
export default class Checkbox extends React.Component {





/**
 * @private
 * @param {EventTarget} e
 * @param {Object} props
 */
	_checkBoxChange(e) {
		if (this.props.onChange) {
			this.props.onChange.call(this, !this.props.checked);
		}
	};





//
	render() {
		let {checked} = this.props;
		let className = 'ui checkbox';
		if (this.props.checked) {
			className += ' checked';
		}
		return (
			<div className={className} onClick={this._checkBoxChange.bind(this)}>
				<input type='checkbox' readOnly checked={checked} />
				<label>{this.props.label}</label>
			</div>
		);
	};


};

