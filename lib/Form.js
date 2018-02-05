//import React from 'react';


/**
 */
export default class Form {





/**
 * Autofill form fileds value
 * @static
 * @param {Object} refs
 * @param {Object} data
 * @param {boolean=} opt_prefix
 */
	static putFormValues(refs, data, opt_prefix) {
		for (var i in data) {
			if (data.hasOwnProperty(i)) {
				var name = (opt_prefix || '') + i;
				if (refs[name] && typeof refs[name].setValue === 'function') {
					refs[name].setValue(data[i]);
				}
			}
		}
	};





/**
 * Get form fileds value
 * @static
 * @param {Object} refs
 * @return {Object} data
 */
	static getFormValues(refs, opt_fn) {
		var data = {};
		for (var i in refs) {
			if (refs[i] && typeof refs[i].getValue === 'function') {
				
				data[i] = refs[i].getValue();
			}
		}
		return data;
	};
	
/*	
	getFormValues(this.refs, (name, value, data) => {
		
		
		if (name === 'neco') {
			return null;
		}
		
	});
*/	


};