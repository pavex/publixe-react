import React from 'react';
import PropTypes from 'prop-types';



/**
 */
export default class Block extends React.Component {


/**
 */
	static propTypes = {
		visible: PropTypes.bool
	};





/**
 */
	render() {
		if (!!this.props.visible) {
			return (
				<div>
					{this.props.children}
				</div>
			);
		}
		return null;
	};


};