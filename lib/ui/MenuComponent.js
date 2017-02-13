import React from 'react';


/**
 */
export default class MenuComponent extends Rect.Component {


/**
 * @private
 * @return {React.Element}
 */
	_renderChildren() {
		var _map = function(child) {
			var component = React.cloneElement(child, {
				menu: this.props.menu || this
			});		
			return component;
		};
		return React.Children.map(
			this.props.children, _map.bind(this)
		);
	};


};