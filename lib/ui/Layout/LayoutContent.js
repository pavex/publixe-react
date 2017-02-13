import React from 'react';
import LayoutSection from './LayoutSection';


/**
 */
class Content extends React.Component {


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
