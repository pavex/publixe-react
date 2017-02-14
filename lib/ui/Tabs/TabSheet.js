import React from 'react';
import classNames from 'classnames';
//import './Tabs.css';


/**
 */
export default class TabSheet extends React.Component {


/**
 * Properties
 */
	static propTypes = {
		title: React.PropTypes.string,
		active: React.PropTypes.bool
	};





/**
 */
	_getClassName() {
		return classNames('px-tabsheet', 
			this.props.active ? 'active' : null
		);
	};





/**
 */
	render() {
		return (
			<section className={this._getClassName()}>
				{this.props.children}
			</section>
		);
	};


};
