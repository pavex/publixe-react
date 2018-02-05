import React from 'react';
import './Input.css';


/**
 */
export default class Input extends React.Component {



/**
 */
	focus() {
		this.refs.input.focus();
	};





//
	_inputChange(e) {
		if (this.props.onChange) {
			var value = e.target.value;
			if (!!this.props.filter) {
				var matches = value.match(this.props.filter);
				value = matches ? matches[1] || '' : '';
			}
			this.props.onChange.call(this, value);
		}
	};





//
	_inputBlur(e) {
		if (this.props.onBlur) {
			var value = e.target.value;
//			if (!!this.props.filter) {
//				var matches = value.match(this.props.filter);
//				value = matches ? matches[1] || '' : '';
//			}
			this.props.onBlur.call(this, value);
		}
	};





/**
 */
	render() {
		const {value, ...props} = this.props;
		return (
			<div className="ui input">
				<input
					{...props}
					ref='input'
					value={value ? value : ''}
					onChange={this._inputChange.bind(this)}
					onBlur={this._inputBlur.bind(this)}
				/>
			</div>
		);
	};


};


