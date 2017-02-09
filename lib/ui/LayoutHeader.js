import React from 'react';
import LayoutSection from './LayoutSection';


/**
 */
class Header extends React.Component {


/**
 */
	render() {
		return (
			<LayoutSection {...this.props}>
				{this.props.children}
			</LayoutSection>
		);
	};
	
};
