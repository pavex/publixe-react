import React from 'react';
import './Loader.css';

// Additional components from Semantic UI liblary
import {Dimmer, Loader as SemanticLoader} from 'semantic-ui-react';


/**
 */
export default class Loader extends React.Component {


/**
 * @cnstructor
 * @param {Object} props
 * @param {Object} context
 */
	constructor(props, context) {
		super(props, context);
//
		this.state = {
			comment: this.props.comment || null,
			active: this.props.active || false
		};
	};





/**
 */
	componentWillReceiveProps(nextProps) {
		this.setState(nextProps);
	};





/**
 */
	render() {
		return (
			<div className="px-loader">
				<Dimmer active={this.state.active} inverted>
					<SemanticLoader inverted>{this.state.comment}</SemanticLoader>
				</Dimmer>
				{this.props.children}
			</div>
		);
	};


};
