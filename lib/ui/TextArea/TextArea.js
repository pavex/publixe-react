import React from 'react';
import classNames from 'classnames';
import './TextArea.css';


/**
 */
export default class TextArea extends React.Component {




/**
 * @private
 * @param {EventTarget} e
 * @param {Object} props
 */
	_change(e) {
		if (this.props.onChange) {
			var value = e.target.value;
//			if (!!this.props.filter) {
//				var matches = value.match(this.props.filter);
//				value = matches ? matches[1] || '' : '';
//			}
			this.props.onChange.call(this, e, value);
		}
	};





/**
 */
	render() {
		const {value, ...props} = this.props;
		return (
			<textarea {...props}
				className={classNames('px-textarea', this.props.className)}
				value={value ? value : ''}
				onChange={this._change.bind(this)}
			/>		
		);
	};


};


