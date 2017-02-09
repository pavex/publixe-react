import React from 'react';
import Loader from './Loader';


/**
 */
export default class Content extends React.Component {


/**
 */
	render() {
		return (
			<main>
				{this.props.children}
			</main>
		);
	};


};
