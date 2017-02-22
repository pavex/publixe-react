import React from 'react';
import {Checkbox as SemanticCheckbox} from 'semantic-ui-react';
import './Checkbox.css';


/**
 */
export default class Checkbox extends React.Component {





/**
 * @private
 * @param {EventTarget} e
 * @param {Object} props
 */
	_checkBoxChange(e, checkbox) {
		if (this.props.onChange) {
			this.props.onChange.call(this, e, checkbox.checked);
		}
	};





/**
 */
	render() {
		return (
			<SemanticCheckbox {...this.props}
				onChange={this._checkBoxChange.bind(this)}
			/>		
		);
	};


};

