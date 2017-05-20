import React from 'react';
import {Input as SemanticInput} from 'semantic-ui-react';
import './Input.css';


/**
 */
export default class Input extends React.Component {




/**
 * @private
 * @param {EventTarget} e
 * @param {Object} props
 */
	_inputChange(e) {
		if (this.props.onChange) {
			var value = e.target.value;
			if (!!this.props.filter) {
				var matches = value.match(this.props.filter);
				value = matches ? matches[1] || '' : '';
			}
			this.props.onChange.call(this, e, value);
		}
	};





/**
 */
	render() {
		const {value, ...props} = this.props;
		return (
/**
			<div className="ui input">
				<input
					value={this.state.value}
					onChange={this._changeEvent.bind(this)}
				/>
			</div>
 */
			<SemanticInput {...props}
				value={value ? value : ''}
				onChange={this._inputChange.bind(this)}
			/>		
		);
	};


};


