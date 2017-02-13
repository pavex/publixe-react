import React from 'react';
import ToolbarSeparator from './ToolbarSeparator';
import classNames from 'classnames';
import './Toolbar.css';


/**
 */
export default class Toolbar extends React.Component {


/**
 * @private
 * @return {array}
 */	
	_getClassName() {
		var className = null;
		if (this.props.left === true) {
			className = 'left';
		}
		else if (this.props.right === true) {
			className = 'right';
		}
		else if (!this.props.flat) {
			className = 'flat';
		}
		return classNames('px-toolbar', className);
	};





/**
 */
	render() {
		return (
			<div className={this._getClassName()}>
				{this.props.children}
			</div>
		);
	};


};





/**
 * Shortcuts
 */
Toolbar.Separator = ToolbarSeparator;
