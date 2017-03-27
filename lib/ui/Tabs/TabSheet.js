import React from 'react';
import classNames from 'classnames';


/**
 */
export default class TabSheet extends React.Component {


/**
 * Properties
 */
	static propTypes = {
		title: React.PropTypes.string,
		active: React.PropTypes.bool,
		onSelect: React.PropTypes.func
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
			<div className={this._getClassName()}>
				<div className="px-tabsheet-container">
					{this.props.children}
				</div>
			</div>
		);
	};


};
