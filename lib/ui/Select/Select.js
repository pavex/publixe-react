import React from 'react';
import {Select as SemanticSelect} from 'semantic-ui-react';
import './Select.css';


/**
 */
export default class Select extends React.Component {


/**
 * @private
 * @param {EventTarget} e
 * @param {Object} props
 */
	_selectChange(e, data) {

console.log('select change', e, data);


	if (this.props.onChange) {
			this.props.onChange.call(this, e, data.value);
		}
	};



/**
 */
	render() {
		return (
/**
			<div className="ui input">
				<input
					value={this.state.value}
					onChange={this._changeEvent.bind(this)}
				/>
			</div>
 */		
			<SemanticSelect {...this.props}
				onChange={this._selectChange.bind(this)}
			/>		
		);
	};


};

