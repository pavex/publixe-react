import React from 'react';
import classNames from 'classnames';
import './DataGrid.css';

import Input from './../Input/Input';
import DatePicker from './../DatePicker/DatePicker';
import Select from './../Select/';
import moment from 'moment';


//
class DataGrid extends React.Component {


//
	static propTypes = {
		readOnly: React.PropTypes.bool,
		hideNull: React.PropTypes.bool,
		scrollBox: React.PropTypes.bool,
//		struct: React.PropTypes.array.isRequired,
		columns: React.PropTypes.array.isRequired,
		rows: React.PropTypes.array,
		rowSelect: React.PropTypes.bool,
		onRowClick: React.PropTypes.func,
		onRowSelect: React.PropTypes.func,
		onRowChange: React.PropTypes.func,
		onDataRequire: React.PropTypes.func
	};





//
	static defaultProps = {
		readOnly: false,
		hideNull: false,
		scrollBox: true,
		rows: [],
		rowSelect: true
	};





//
	static Formatter = {
//
		Null: function(value, opt_hide_null) {
			return value === null ? (opt_hide_null ? null : <i>NULL</i>) : String(value);
		},
		Empty: function(value) {
			return value === null ? '-' : String(value);
		},
		Blank: function(value) {
			return '';
		},
		Date: function(moment) {
			return !!moment ? moment.format('DD.MM.YYYY') : '-';
		},
		DateTime: function(value) {
			return !!moment ? moment.format('DD.MM.YYYY HH:mm:ss') : '-';
		}
	};





//
	static ControlType = {
		TEXT: 1,
		DATE: 2,
		SELECT: 3
	};





//
	constructor(props, context) {
		super(props, context);
//		console.info('DataGrid.constructor', props, !!props.rows);
		
//		
		this._allowUpdate = true;
//		this.props.rows = [];
		this._rowClickPrevent = false;
//s
		var defaultState = {};
		defaultState.offset = 0;
		defaultState.selectedIndex = null;
		
// Input rows
//		if (!!props.rows) {
//			this._setRows(props.rows, 0);
//		}

// Default state
		this.state = defaultState;
//
	};




//
//	componentWillReceiveProps(nextProps) {
//		if (!!nextProps.rows) {
//			this._clearRows();
//			this._setRows(nextProps.rows, 0);
//		}
//	};





	componentWillMount() {
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
 *//*
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
*/



/*
	_clearRows() {
		this.props.rows = [];
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
		this.props.rows.push(this._getValidData(row));
	};





	addRow(row) {
		this._addRow(row);
		this.updateRows();
	};





	_insertRow(row, rowIndex) {
		this.props.rows.splice(rowIndex, 0, this._getValidData(row));
	};





	insertRow(row, rowIndex) {
		this._insertRow(row, rowIndex);
		this.updateRows();
	};





	_setRow(rowIndex, row) {
//console.log('_setRow #1');
		this.props.rows[rowIndex] = this._getValidData(row);
//console.log('_setRow #2');
	};





	setRow(rowIndex, row) {
		this._setRow(rowIndex, row);
		this.updateRows();
	};





	getRow(rowIndex) {
		return this.props.rows[rowIndex];
	};





	_removeRow(rowIndex) {
		this.props.rows.splice(rowIndex, 1);
	};





	removeRow(rowIndex) {
		this._removeRow(rowIndex);
		if (this._selectedIndex === rowIndex || rowIndex > this.props.rows_length) {
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
/*
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
/*	getData() {
		return this.props.rows;
	};





/**
 * @return {Array<Object>}
 */
/*	getRows() {
		return this.getData();
	};





	updateRows() {
		if (this._allowUpdate) {
			this.forceUpdate();
		}
	};





/**
 * @private
 * @param {Number} rowIndex
 * @return {boolean}
 */
	_isSelected(rowIndex) {
		return rowIndex === this.state.selectedIndex;
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
		return this.props.rows[this.getSelectedIndex()];
	};





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

//		let rowIndex = this._isSelected(rowIndex) ? rowIndex : null;

console.log('_rowClick', rowIndex, this._isSelected(rowIndex));

//		let selectedRowIndex = this._isSelected(rowIndex) ? null : rowIndex;

		if (this._isSelected(rowIndex)) {
			this.setSelectedIndex(null, () => {
				if (this.props.onRowClick) {
					this.props.onRowClick.call(this, null);
				}				
			});
			return;
		}	
		this.setSelectedIndex(rowIndex, () => {
			if (this.props.onRowClick) {
				this.props.onRowClick.call(this, rowIndex);
			}
		});
		


/*
		if (this._isSelected(rowIndex)) {
			this.setSelectedIndex(null);
			return;
		}	
		this.setSelectedIndex(rowIndex, () => {
			if (this.props.onRowClick) {
				this.props.onRowClick.call(this, rowIndex);
			}
		});
*/
	};





/**
 * @private
 * @param {number} rowIndex
 */
	_rowDoubleClick(rowIndex, e) {	
		if (this.props.onRowSelect) {
			this.props.onRowSelect.call(this, rowIndex);
		}		
	};

	
	
	
//	
	_doRowChange(rowIndex, row) {
		if (this.props.onRowChange) {
			this.props.onRowChange.call(this, rowIndex, row);
		}
		if (this.props.onChange) {
			let rows = this.props.rows;
			rows[rowIndex] = row;
			this.props.onChange.call(this, rows);
		}
	};




/**
 * @private
 * @param {Object} props
 * @param {EventTarget} e
 * @param {String} value
 */
	_textControlChange(rowIndex, name, value) {
		
//console.log('_textControlChange', rowIndex, name, value);		
		
		
//		let {rowIndex, name} = props;
		let row = this.props.rows[rowIndex];
		row[name] = value;
		this._doRowChange(rowIndex, row);


//	var {rowIndex, name, onRowChange} = props;
//		this.props.rows[rowIndex][name] = value;
// Update grid
//		this.forceUpdate(() => {
//			if (onRowChange) {
//				onRowChange.call(this, rowIndex, value);
//			}
//		});
	};





/**
 * @private
 * @param {Object} props
 * @param {Moment} moment
 */
	_dateControlChange(rowIndex, name, moment) {
//		let {rowIndex, name} = props;
		let row = this.props.rows[rowIndex];
		row[name] = moment;
		this._doRowChange(rowIndex, row);

//		var {rowIndex, name, onChange} = props;
//		this.props.rows[rowIndex][name] = moment;
// Update grid
//		this.forceUpdate(() => {
//			if (onChange) {
//				onChange.call(this, rowIndex, moment);
//			}
//		});
	};





/**
 * @private
 * @param {Object} props
 * @param {sring} key
 */
	_selectControlChange(rowIndex, name, key) {
//		let {rowIndex, name} = props;
		let row = this.props.rows[rowIndex];
		row[name] = key;
		this._doRowChange(rowIndex, row);

//		var {rowIndex, name, onChange} = props;
//		this.props.rows[rowIndex][name] = key;
// Update grid
//		this.forceUpdate(() => {
//			if (onChange) {
//				onChange.call(this, rowIndex, key);
//			}
//		});
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
		const {className, ...props} = column.control;
		return (
			<div style={{width: column.width}} className={classNames('px-control-text', className)}>
				<Input {...props}
					value={value}
					onChange={this._textControlChange.bind(this, rowIndex, column.name)}
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
		const {...props} = column.control;
		return (
			<div style={{width: column.width}} className={classNames('px-control-date', column.control.className)}>
				<DatePicker {...props}
					locale={column.control.locale || "cs-cz"}
					selected={value}
					onChange={this._dateControlChange.bind(this, rowIndex, column.name)}
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
		const {className, ...props} = column.control;
		return (
			<div style={{width: column.width}} className={classNames('px-control-select', className)}>
				<Select {...props}
					value={!!value ? value : ''}
					onChange={this._selectControlChange.bind(this, rowIndex, column.name)}
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
				row: this.props.rows[rowIndex]
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
		var value = this.props.rows[rowIndex][column.name] || null;
//
// Content controls
		if (!!column.control && !this.props.readOnly) {
			let control = column.control;
			switch (control.type) {
				case DataGrid.ControlType.TEXT:
					return this._renderTextControl(rowIndex, column, value);
				case DataGrid.ControlType.DATE:
					return this._renderDateControl(rowIndex, column, value);
				case DataGrid.ControlType.SELECT:
					return this._renderSelectControl(rowIndex, column, value);
				default:
			}
		}

// Basic renderer
		var content = !!column.formatter
			? column.formatter.call(this, value)
			: DataGrid.Formatter.Null(value, this.props.hideNull);
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
			let customStyle = !!this.props.customRowStyleRenderer ? this.props.customRowStyleRenderer.call(this, rowIndex) : null;
//
			return (
				<div className={classes} style={customStyle}
					onClick={this.props.rowSelect ? this._rowClick.bind(this, rowIndex) : null}
					onDoubleClick={this.props.rowSelect ? this._rowDoubleClick.bind(this, rowIndex) : null}
				>
					{elements}
				</div>
			);
//		}
//		return (
//			<div className="px-datagrid-row">
//				empty
//			</div>
//		);
	};





/**
 * Render grid rows
 * @private
 * @return {React.Element}
 */	
	_renderRows() {
		var elements = [];
		for (var colIndex = 0; colIndex < this.props.rows.length; colIndex++) {
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
		const classes = classNames(
			'px-datagrid',
			this.props.rowSelect ? 'px-datagrid-row-select' : null
		);
// Render without scrollbox container
		if (this.props.scrollBox === false) {
			return (
				<div className={classes} style={{width: this._getWidth()}}>
					{this._renderBody()}
					{this._renderHeader()}
				</div>
			);
		}	
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


};




//
export default DataGrid;
