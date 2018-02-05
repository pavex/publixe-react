import React from 'react';
import Field from './Field';
import Select from '../Select/';


//
export default class SelectField extends React.Component {


//
	render() {
		return (
			<Field {...this.props}>
				<Select {...this.props} disabled={this.props.readOnly} />
			</Field>
		);
	};


};
