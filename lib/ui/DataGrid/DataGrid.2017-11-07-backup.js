import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './DataGrid.css';

import Input from './../Input/Input';
import DatePicker from './../DatePicker/DatePicker';
import Select from './../Select/Select';
import moment from 'moment';


/**
 */
class DataGrid extends React.Component {


/**
 */
	static propTypes = {
		readOnly: PropTypes.bool,
		struct: PropTypes.array.isRequired,
		columns: PropTypes.array,
		rows: PropTypes.array,
		rowSelect: PropTypes.bool,
		onRowClick: PropTypes.func,
		onRowSelect: PropTypes.func,
		onDataRequire: PropTypes.func
	};






/**
 */
	constructor(props, context) {
		super(props, context);
//		console.info('DataGrid.constructor', props, !!props.rows);
		
//		
		this._allowUpdate = true;
		this._data = [];
		this._rowClickPrevent = false;
//s
		var defaultState = {};
		defaultState.offset = 0;
		defaultState.selectedIndex = null;
		
// Input rows
		if (!!props.rows) {
			this._setRows(props.rows, 0);
		}

// Default state
		this.state = defaultState;
//
	};


	
	
/**
 */
	componentWillReceiveProps(nextProps) {
//console.log('componentWillReceiveProps', nextProps, !!nextProps.rows);
		if (!!nextProps.rows) {
			this._clearRows();
			this._setRows(nextProps.rows, 0);
		}
	};



	
	
	componentWillMount() {
//console.log('componentWillMount');
		this.load();
	};	


	
	
/**
 * Call data require to load data
 */
	load() {
		if (this.props.onDataRequire) {
			this.props.onDataRequire.call(this, this, 0, 1048576, this.props.columns);
		}
	};





/**
 * Reload all data
 */
	reload() {
		this._clearRows();
		this.load();
	};
	






	
/**
 * Build row data from raw row object
 * @private
 * @param {Object} row
 * @return {Object}
 */
	_getValidData(row) {
//console.log('row=', row);
		let struct = this.props.struct;
		let data = {};
		for (let s in struct) {
			if (struct.hasOwnProperty(s)) {  
//console.log(struct[s]);
				let fn = struct[s].type;
				let value = row[struct[s].name];
				data[struct[s].name] = fn && fn !== Array && !!value ? fn.call(this, value) : value;
			}
		}
		return data;
	};
	
	


	_clearRows() {
		this._data = [];
	};
	
	


	clearRows() {
		this._clearRows();
		this.setState({
			offset: 0,
			selectedIndex: null
		});
//		this.updateRows();
	};

	
	
	
	_addRow(row) {
		this._data.push(this._getValidData(row));
	};
	
	


	addRow(row) {
		this._addRow(row);
		this.updateRows();
	};

	
	
	
	_insertRow(row, rowIndex) {
		this._data.splice(rowIndex, 0, this._getValidData(row));
	};
	
	


	insertRow(row, rowIndex) {
		this._insertRow(row, rowIndex);
		this.updateRows();
	};




	_setRow(rowIndex, row) {
//console.log('_setRow #1');
		this._data[rowIndex] = this._getValidData(row);
//console.log('_setRow #2');
	};

	
	
	
	setRow(rowIndex, row) {
		this._setRow(rowIndex, row);
		this.updateRows();
	};
	
	
	
	
	getRow(rowIndex) {
		return this._data[rowIndex];
	};

	
	
	
	_removeRow(rowIndex) {
		this._data.splice(rowIndex, 1);
	};

	
	
	
	removeRow(rowIndex) {
		this._removeRow(rowIndex);
		if (this._selectedIndex === rowIndex || rowIndex > this._data_length) {
			this.setState({selectedIndex: null});
		}
//		this.updateRows();
	};




	_putRows(rows, offset) {
//console.log('_putRows', rows, offset);
		offset = Number(offset);
		for (var i in rows) {
			if (rows.hasOwnProperty(i)) {  
				this._setRow(offset + Number(i), rows[i]);
			}
		}
	};
	
	
	
	
/**
 * Put some rows into existing data array
 * @param {array<Object>} rows
 * @param {number=} opt_offset
 */
	putRows(rows, opt_offset) {
		this._putRows(rows, opt_offset || 0);
		this.updateRows();
	};





	_setRows(rows) {
		this._clearRows();
		this._putRows(rows, 0);
	};
	
	
	
	
	setRows(rows) {
		this._setRows(rows);
		this.updateRows();
	};
	
	
	

/**
 * @return {Array<Object>}
 */
	getData() {
		return this._data;
	};


	
		
/**
 * @return {Array<Object>}
 */
	getRows() {
		return this.getData();
	};
	
		
		
		
/*		
	_getRowCells(rowIndex) {
		var cells = [];
		var columns = this.props.columns;
		for (var i in columns) {
			if (columns.hasOwnProperty(i)) {
console.log('_getRowCells', rowIndex, this._data[rowIndex], columns[i].name);
				cells.push(String(this._data[rowIndex][columns[i].name]));
			}
		}
		return cells;
	};
	


	_getCells() {
		var cells = [];
		for (var i in this._data) {
			if (this._data.hasOwnProperty(i)) {
				cells.push(this._getRowCells(i))
			}
		}
		return cells;
	};
*/		
		
		
	updateRows() {
		// prepare state and re-render it
		
		if (this._allowUpdate) {
//console.log('updateRows');

			this.forceUpdate();

//		this.setState({
//			cells: this._getCells()
//		});
			
		}
	};
		
		
	
/**
 * @private
 * @param {Number} rowIndex
 * @return {boolean}
 */
	_isSelected(rowIndex) {
		return rowIndex == this.state.selectedIndex;
	};





/**
 * @param {number} rowIndex
 * @param {func=} opt_callback
 */
	setSelectedIndex(rowIndex, opt_callback) {
		this.setState({selectedIndex: rowIndex}, opt_callback);
	};





/**
 * @return {boolean}
 */
	hasSelectedIndex() {
//console.log('hasSelectedIndex', this.state.selectedIndex, !!this.state.selectedIndex);

//		return !!this.state.selectedIndex && this.state.selectedIndex >= 0;
//		return this.state.selectedIndex !== null;
		return Number.isInteger(this.state.selectedIndex);
	};





/**
 * @return {number}
 */
	getSelectedIndex() {
		return this.state.selectedIndex;
	};






/**
 * @return {boolean}
 */
	hasSelected() {
		return this.hasSelectedIndex();
	};





/**
 * @return {Object|null}
 */
	getSelected() {
		if (!this.hasSelected()) {
			return null;
		}
		return this._data[this.getSelectedIndex()];
	};








////////////////////////////////////////////////////////////////		


/**
 * @private
 * @param {number} rowIndex
 */
	_rowClick(rowIndex, e) {
		if (this.props.readOnly) {
			return;
		}
		if (this._rowClickPrevent) {
			return;
		}
		this._rowClickPrevent = true;
		setTimeout(() => {
			this._rowClickPrevent = false;
		}, 400)
//
		if (this._isSelected(rowIndex)) {
			this.setSelectedIndex(null);
			return;
		}	
		this.setSelectedIndex(rowIndex, () => {
			if (this.props.onRowClick) {
				this.props.onRowClick.call(this, rowIndex);
			}
		});
	};





/**
 * @private
 * @param {number} rowIndex
 */
	_rowDoubleClick(rowIndex, e) {	
//console.log('_rowDoubleClick', rowIndex, e);		

		if (this.props.onRowSelect) {
			this.props.onRowSelect.call(this, rowIndex);
		}		
	};





/**
 * @private
 * @param {Object} props
 * @param {EventTarget} e
 * @param {String} value
 */
	_textControlChange(props, e, value) {
		var {rowIndex, name, onChange} = props;
		this._data[rowIndex][name] = value;
// Update grid
		this.forceUpdate(() => {
			if (onChange) {
				onChange.call(this, rowIndex, value);
			}
		});
	};





/**
 * @private
 * @param {Object} props
 * @param {Moment} moment
 */
	_dateControlChange(props, moment) {
		var {rowIndex, name, onChange} = props;
		this._data[rowIndex][name] = moment;
// Update grid
		this.forceUpdate(() => {
			if (onChange) {
				onChange.call(this, rowIndex, moment);
			}
		});
	};





/**
 * @private
 * @param {Object} props
 * @param {sring} key
 */
	_selectControlChange(props, e, key) {
		var {rowIndex, name, onChange} = props;
		this._data[rowIndex][name] = key;
// Update grid
		this.forceUpdate(() => {
			if (onChange) {
				onChange.call(this, rowIndex, key);
			}
		});
	};





/**
 * Update header offset position
 * @private
 * @param {EventTarget} e
 */	
	_scrollEvent(e) {
		this.setState({offset: e.target.scrollTop});
	};





/**
 * Calculate full width of columns
 * @private
 * @return {number}
 */
	_getWidth() {
		var width = 0;
		var columns = this.props.columns;
		for (var i in columns) {
			if (columns.hasOwnProperty(i)) {
				var c = this.props.columns[i];
				width += c.width;
			}
		}
		return width;
	};


	
	
	
/**
 * @private
 * @return {string}
 */
/*
	_getClassNames() {
		return classNames(
			'px-datagrid',
//			this.props.stretch ? 'stretch' : null,
			this.props.rowSelect ? 'px-datagrid-row-select' : null
		);
	};
*/
	
	
	

/**
 * Render table header of columns
 * @private
 * @return {React.Element}
 */
	_renderHeaderCols() {
		var elements = [];
		var columns = this.props.columns;
		for (var i in columns) {
			if (columns.hasOwnProperty(i)) {
				var column = this.props.columns[i];
				elements.push([
					<div className="px-datagrid-col" style={{width: column.width}}>{column.title}</div>
				]);
			}
		}
		return elements;
	};


	
	
	
/**
 * Render grid header
 * @private
 * @return {React.Element}
 */	
	_renderHeader() {
		return (
			<div className="px-datagrid-header" style={{top: this.state.offset}}>
				<div className="px-datagrid-cols">
					{this._renderHeaderCols()}
				</div>
			</div>
		);
	};





/**
 * Render content control for text input
 * @priate
 * @param {number} rowIndex
 * @param {Object} column
 * @param {String} value
 * @return {React.Element}
 */
	_renderTextControl(rowIndex, column, value) {
		var control = column.control;
		const {type, filter, className, style, onChange, ...props} = control;
		return (
			<div style={{width: column.width}} className={classNames('px-control-text', className)}>
				<Input {...props}
					value={value}
					onChange={this._textControlChange.bind(this, {
						rowIndex,
						name: column.name,
						onChange: onChange
					})}
				/>
			</div>
		);
	};





/**
 * Render content control for date
 * @priate
 * @param {number} rowIndex
 * @param {Object} column
 * @param {Moment} value
 * @return {React.Element}
 */
	_renderDateControl(rowIndex, column, value) {
		var control = column.control;
		const {type, onChange, ...props} = control;
		return (
			<div style={{width: column.width}} className={classNames('px-control-date', control.className)}>
				<DatePicker {...props}
					locale={control.locale || "cs-cz"}
					selected={value}
					onChange={this._dateControlChange.bind(this, {
						rowIndex,
						name: column.name,
						onChange: onChange
					})}
				/>
			</div>
		);
	};





/**
 * Render content combobox
 * @priate
 * @param {number} rowIndex
 * @param {Object} column
 * @param {Moment} value
 * @return {React.Element}
 */
	_renderSelectControl(rowIndex, column, value) {
		var control = column.control;
		const {type, onChange, className, ...props} = control;
		return (
			<div style={{width: column.width}} className={classNames('px-control-select', className)}>
				<Select {...props}
					value={!!value ? value : ''}
					onChange={this._selectControlChange.bind(this, {
						rowIndex,
						name: column.name,
						onChange: onChange
					})}
				/>
			</div>
		);
	};





/**
 * Render classic row cell with formatter
 * @priate
 * @param {number} rowIndex
 * @param {number} colIndex
 * @return {React.Element}
 */
	_renderCell(rowIndex, colIndex) {
		var column = this.props.columns[colIndex];

// Custom cell renderer
		if (!!column.renderer) {
			var props = {
				rowIndex,
				colIndex,
				data: this._data[rowIndex]
			};
//
			var element = column.renderer.call(this, props);		
// Update element width
			return React.cloneElement(element, {
				className: classNames('px-custom-renderer', element.props.className),
				style: {...element.props.style, width: column.width}
			});
		}

//
		var value = this._data[rowIndex][column.name] || null;
//
// Content controls
		if (!!column.control && !this.props.readOnly) {
			var control = column.control;
			switch (control.type) {
				case DataGrid.ControlType.TEXT:
					return this._renderTextControl(rowIndex, column, value);
				case DataGrid.ControlType.DATE:
					return this._renderDateControl(rowIndex, column, value);
				case DataGrid.ControlType.SELECT:
					return this._renderSelectControl(rowIndex, column, value);
			}
		}

// Basic renderer
		var content = !!column.formatter
			? column.formatter.call(this, value)
			: DataGrid.Formatter.Null(value);
//			: value === null ? (<i>NULL</i>) : String(value);
//
		return (
			<div style={{width: column.width}}
				className={classNames(column.className)}
			>
				<span>{content}</span>
			</div>
		);
	};





/**
 * Render row by index
 * @priate
 * @param {number} rowIndex
 * @return {React.Element}
 */
	_renderRow(rowIndex) {

//		if (rowCells) {
			var elements = [];
			var columns = this.props.columns;
			for (var colIndex in columns) {
				if (columns.hasOwnProperty(colIndex)) {
					colIndex = Number(colIndex);
					elements.push([this._renderCell(rowIndex, colIndex)]);
				}
			}
//
			const classes = classNames('px-datagrid-row',
				this._isSelected(rowIndex) ? 'selected' : null
			);
//
			return (
				<div className={classes}
					onClick={this.props.rowSelect ? this._rowClick.bind(this, rowIndex) : null}
					onDoubleClick={this.props.rowSelect ? this._rowDoubleClick.bind(this, rowIndex) : null}
				>
					{elements}
				</div>
			);
//		}
		return (
			<div className="px-datagrid-row">
				empty
			</div>
		);
	};

	
	
	
	
/**
 * Render grid rows
 * @private
 * @return {React.Element}
 */	
	_renderRows() {
		var elements = [];
		for (var colIndex = 0; colIndex < this._data.length; colIndex++) {
			elements.push([this._renderRow(colIndex)]);
		}
		return elements;
	};
	

	
	
	
/**
 * @private
 * @return {React.Element}
 */	
	_renderBody() {
		return (
			<div className="px-datagrid-body">
				<div className="px-datagrid-rows">
					{this._renderRows()}
				</div>
			</div>
		);
	};





/**
 */
	render() {
//
		const classes = classNames(
			'px-datagrid',
			this.props.rowSelect ? 'px-datagrid-row-select' : null
		);
//
		return (
			<div className={classes}>
				<div className="px-datagrid-scrollbox" onScroll={this._scrollEvent.bind(this)}>
					<div className="px-datagrid-container" style={{width: this._getWidth()}}>
						{this._renderBody()}
						{this._renderHeader()}
					</div>
				</div>
			</div>
		);
	};





/**
 
	render() {
		
console.log('render.data=', this._data);		
console.log('render.cells=', this.state.cells);		
		
		return (
			<div>DATAGRID<br />{this.state.cells}</div>
		);
	};
/**/

};



DataGrid.Formatter = {
//
	Null: function(value) {
		return  value === null ? (<i>NULL</i>) : String(value);
	},
//
	Empty: function(value) {
		return  value === null ? '-' : String(value);
	},
//
	Date: function(value) {
		return moment(value).format('DD.MM.YYYY');
	},
//
	DateTime: function(value) {
		return moment(value).format('DD.MM.YYYY HH:mm:ss');
	}
};




/**
 * Type of cell controller
 * @enum {number}
 */
DataGrid.ControlType = {
	TEXT: 1,
	DATE: 2,
	SELECT: 3
};




/**
 */
DataGrid.defaultProps = {
  rowSelect: true,
};

	
	


/**
 */
export default DataGrid;
