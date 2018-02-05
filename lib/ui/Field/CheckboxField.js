import React from 'react';
import Field from './Field';
import Checkbox from './../Checkbox/Checkbox';


//
export default class CheckboxField extends React.Component {


//
	render() {
		const {width, labelWidth, inline, hint, visible,
			...props} = this.props;
		const fieldProps = {width, labelWidth, inline, hint, visible};
//
		return (
			<Field indent {...fieldProps}>
				<Checkbox {...props}
					checked={this.props.checked}
				/>
			</Field>
		);
	};

};
