import React from 'react';
import ReactSelect from 'react-select';
import './Select.css';


//
export default class Select extends React.Component {


//
	_getOptions() {
		let options = [];
		this.props.options.forEach((v, k) => {
			options.push({...v, label: v.text});
		});
		return options;
	};





//
	_changeSelect(selected) {
	if (this.props.onChange) {
			this.props.onChange.call(this, selected.value);
		}
		
	};





//
	render() {
		return (
			<ReactSelect {...this.props}
				options={this._getOptions()}
				clearable={false}
				onChange={this._changeSelect.bind(this)}
			/>
		);
	};


};

