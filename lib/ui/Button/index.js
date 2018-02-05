import React from 'react';
import PropTypes from 'prop-types';


//
export default class Button extends React.Component {


//
	static propTypes = {
	};

	
	
	_buttonClick(e) {
		e.stopPropagation();
		e.preventDefault();
		if (this.props.onClick) {
			this.props.onClick.call(this);
		}
	};



//
	render() {
		let {icon, labelPosition, onClick, primary, negative, disabled} = this.props;
		let className = 'ui button';
//
		if (icon) {
			className += ' icon';
			if (labelPosition) {
				className += ' labeled ' + labelPosition;
			}
		}
		if (!!primary) {
			className += ' primary';
		}
		if (!!negative) {
			className += ' negative';
		}
//
		let content = this.props.content || this.props.children;
//
		return (
			<button className={className} disabled={disabled} onClick={this._buttonClick.bind(this)}>
			
				{icon ? <i className={icon + ' icon'}></i> : null}
			

				{content}
			</button>
		);
	};





}