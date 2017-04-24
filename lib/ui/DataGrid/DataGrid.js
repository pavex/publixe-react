import React from 'react';
import classNames from 'classnames';
import './DataGrid.css';


/**
 */
class DataGrid extends React.Component {


/**
 */
	constructor(props, context) {
		super(props, context);
//
		this.state = {
			columns: props.columns || [],
			struct: props.struct || [],
			cells: props.cells || [],
			data: props.data || [],
			selectedIndex: null,
			rowCount: props.rowCount || 0,
		};
		this._index = 0;

//
		if (props.rows) {
			var cells = [];
			var data = [];
			for (var i in props.rows) {
				var row = props.rows[i]
				cells.push(this._getCellsFromRow(row));
				data.push(this._getDataFromRow(row));
				this._increaseIndex(!!row.index ? row.index : 0);
			}
			this.state.cells = cells;
			this.state.data = data;
		}
//
		this._selectedIndex = null;
		this.load();
	};





	
/**
 * @return {Number}
 */
	getColumns() {
		return this.state.columns;
	};





/**
 * Call data require to load data
 */
	load() {
		if (this.props.onDataRequire) {
			this.props.onDataRequire.call(this, this, 0, 1024, this.state.columns);
		}
	};





/**
 * Reload all data
 */
	reload() {
//		this.setState({
//			cells: []
//		});
		this.load();
	};





/**
 * @return {Array<Object>}
 */
	getData() {
		return this.state.data;
	};





/**
 * Create next unique index for row
 * @param {number} idnex  Possible user defined index of row.
 */
	_increaseIndex(index) {
		this._index = Math.max(this._index + 1, index);
	};





/**
 */	
	clearIndex() {
		this._index = 0;
	};





/**
 * Get next possible index for row
 * @return {number}
 */
	getNextIndex() {
		return this._index + 1;
	};





/**
 * Build row cells from raw row object
 * @private
 * @param {Object} row
 * @return {Object}
 */
	_getCellsFromRow(row) {
		var columns = this.state.columns;
		var cells = [];
		for (var c in columns) {
			cells.push(row[columns[c].name]);
		}
		return cells;
	};





/**
 * Build row data from raw row object
 * @private
 * @param {Object} row
 * @return {Object}
 */
	_getDataFromRow(row) {
		var struct = this.state.struct;
		var data = {};
		for (var s in struct) {
			var fn = struct[s].type;
			var value = row[struct[s].name];
			data[struct[s].name] = fn && fn !== Array ? fn.call(this, value) : value;
		}
		return data;
	};





/**
 * Update grid visible cells and data and udpate component
 * @param {number} rowIndex
 * @param {array} cells
 * @param {Object=} opt_data
 */
	_setRowInternal(rowIndex, cells, data) {
// Update row count if index overflow current limit
/*
		if (rowIndex >= this.state.rowCount) {
			this.setState({
				rowCount: rowIndex + 1
			});
		}
*/
	
		this.setState((state) => {
			state.cells[rowIndex] = cells;
			state.data[rowIndex] = data;
		});
	};





/**
 * @param {number} rowCount
 */	
	setRowCount(rowCount) {
		this.setState({
			cells: this.state.cells.slice(0, rowCount),
			data: this.state.cells.slice(0, rowCount),
			rowCount: rowCount
		});
	};





/**
 * @return {number}
 */	
	getRowCount() {
		return this.state.cells.length;
	};





/**
 */	
	clear() {
		this.setRowCount(0);
	};





/**
 * @param {number} index
 * @param {Object} row
 */
	setRow(index, row) {
		this._setRowInternal(index,
			this._getCellsFromRow(row),
			this._getDataFromRow(row)
		);
	};





/**
 * Add raw data into grid
 * @param {Object} data
 */
	addRow(row) {
		this._increaseIndex(!!row.index ? row.index : 0);	
		this._setRowInternal(this.getRowCount(),
			this._getCellsFromRow(row),
			this._getDataFromRow(row)
		);
	};





/**
 * Add array of row's object
 * @param {Array<Object>} rows
 */
	addRows(rows) {
		for (var i in rows) {
			this.addRow(rows[i]);
		}
	}





/**
 * @param {number} rowIndex
 */	
	deleteRow(rowIndex) {
		this.setState(function(state) {
			state.cells.splice(rowIndex, 1);
			state.data.splice(rowIndex, 1);
		});
	};





/**
 * Put raw data into DataGrid separate by column definitions
 * @param {Array<Object>} rows
 * @param {number=} opt_offset
 * @param {number=} opt_limit
 */
	putRows(rows, opt_offset, opt_limit, opt_dataKey) {
		this.setState({
			cells: [],
			data: []
		});
		for (var i in rows) {
			this.setRow(i, rows[i]);
		}
	};





/**
 * Calculate full width of columns
 * @private
 * @return {number}
 */
	_getWidth() {
		var width = 0;
		for (var i in this.state.columns) {
			var c = this.state.columns[i];
			width += c.width;
		}
		return width;
	};





	
	_rowClickEvent(rowIndex, colIndex, e) {
		if (this._isSelected(rowIndex)) {
			this.setSelectedIndex(null);
			return;
		}	
		this.setSelectedIndex(rowIndex);
	};

	
	_rowDoubleClickEvent(rowIndex, colIndex, e) {
		var stateSuccess = function() {
			if (this.props.onDoubleClick) {
				this.props.onDoubleClick.call(this, rowIndex, colIndex, e);
			}
		};
		this._setSelectedIndexInternal(rowIndex, stateSuccess.bind(this));
	};
	
	
	_isSelected(rowIndex) {
		return rowIndex == this.state.selectedIndex;
	};
	
	
	_setSelectedIndexInternal(rowIndex, opt_callback) {
		this.setState({selectedIndex: rowIndex}, opt_callback);
	};


	setSelectedIndex(rowIndex) {
		this.setState({selectedIndex: rowIndex});
	};


	hasSelected() {
		return this.state.selectedIndex !== null;
	};
	
	
	hasSelectedIndex() {
		return this.state.selectedIndex !== null;
	};
	
	
	getSelectedIndex() {
		return this.state.selectedIndex;
	};

	
	getSelectedRow() {
		if (this.hasSelectedIndex()) {
			return this.state.cells[this.state.selectedIndex];
		}
		return null;
	};
	
	getRowData(rowIndex) {

console.log('getRowData=', rowIndex, this.state.data, this.state.data[rowIndex]);

		return this.state.data[rowIndex]
				? this.state.data[rowIndex] : null;
	};
	
	getSelectedRowData() {
		if (this.hasSelectedIndex()) {
			return this.getRowData(this.state.selectedIndex);
		}
		return null;
	};
	
	getSelected() {
		if (this.hasSelectedIndex()) {
			return {
				cells: this.state.cells[this.state.selectedIndex],
				data: this.getRowData(this.state.selectedIndex)
			};
		}
		return null;
	};





/**
 * Render table header of columns
 * @private
 */
	_renderHeaderCols() {
		var elements = [];
		for (var i in this.state.columns) {
			var column = this.state.columns[i];
			elements.push([
				<div className="col" style={{width: column.width}}>{column.title}</div>
			]);
		}
		return elements;
	};





/**
 * Render grid header
 * @private
 */	
	_renderHeader() {
		return (
			<div className="header" style={{top: this.state.offset}}>
				<div className="cols">
					{this._renderHeaderCols()}
				</div>
			</div>
		);
	};




/**
 * Render row by index
 * @priate
 * @param {number} rowIndex
 */
	_renderRow(rowIndex) {
		var rowCells = this.state.cells[rowIndex];
		if (rowCells) {
			var elements = [];
			for (var colIndex in this.state.columns) {
				var column = this.state.columns[colIndex];
				
				var cell = rowCells[colIndex];
				if (column.filter) {
					cell = column.filter.call(this, cell, column, rowIndex, colIndex);
				}
				cell = cell || "\u00a0";

//				var cell = rowCells[colIndex] || "\u00a0";
				var data = this.state.data[rowIndex] || null;

				elements.push([
					<div style={{width: column.width}}
						onClick={this._rowClickEvent.bind(this, rowIndex, colIndex)}
						onDoubleClick={this._rowDoubleClickEvent.bind(this, rowIndex, colIndex)}						
					>{cell}</div>
				]);
			}
			const classes = classNames('row', this._isSelected(rowIndex) ? 'selected' : null);
			return (
				<div className={classes}>
					{elements}
				</div>
			);
		}
		return (
			<div className="row">
				empty
			</div>
		);
	};

	

/**
 */
	_renderRows() {
		var elements = [];

//		for (var colIndex = 0; colIndex < this.state.rowCount; colIndex++) {
		for (var colIndex = 0; colIndex < this.state.cells.length; colIndex++) {
			elements.push([this._renderRow(colIndex)]);
		}

//		for (var colIndex in this.state.cells) {
//			elements.push([this._renderRow(colIndex)]);
//		}
		return elements;
	};
	
	
/**
 */
	_renderBody() {
		return (
			<div className="body">
				<div className="rows">
					{this._renderRows()}
				</div>
			</div>
		);
	};


/**
 * Update header offset position
 * @private
 * @param {EventTarget} e
 */	
	_scrollEvent(e) {
		this.setState({offset: e.target.scrollTop});
	};
	
	
	_getClassName() {
		return classNames(
			'px-datagrid',
			this.props.stretch ? 'stretch' : null
		);
	};
	
/**
 */
	render() {
		return (
			<div className={this._getClassName()} onScroll={this._scrollEvent.bind(this)}>
				<div className="container" style={{width: this._getWidth()}}>
					{this._renderHeader()}
					{this._renderBody()}
				</div>
			</div>
		);
	};

};







/**
 */
export default DataGrid;
