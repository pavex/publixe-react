import React from 'react';
import LayoutSection from './LayoutSection';


/**
 */
export default class LayoutContent extends React.Component {


/**
 */
	render() {
		return (
			<LayoutSection {...this.props} strecth>
				{this.props.children}
			</LayoutSection>
		);
	};
	
};
