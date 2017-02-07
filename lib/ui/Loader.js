import React from 'react';
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
			<div style={{position: 'relative'}}>
				<Dimmer active={this.state.active} inverted>
					<SemanticLoader inverted>{this.state.comment}</SemanticLoader>
				</Dimmer>
				{this.props.children}
			</div>
		);
	};


};
