import React from 'react';
import classNames from 'classnames';
import './DataGrid.css';

import Input from './../Input/Input';
import DatePicker from './../DatePicker/DatePicker';


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
			rowCount: props.rowCount || 0
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
 * @return {Array<Object>}
 */
	getColumns() {
		return this.state.columns;
	};





/**
 * @return {Object}
 */
	getColumn(colIndex) {
		return this.getColumns()[colIndex];
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
			var value = row[struct[s].name]
			data[struct[s].name] = fn && fn !== Array && !!value ? fn.call(this, value) : value;
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
 * @private
 * @param {Object} row
 * @return {Object}
 */
	_getUpdatedRow(index, row) {	
		var r = this.state.data[index] || {};
		for (var i in row) {
			r[i] = row[i];
		}
		return r;
	};
	
	

/**
 * @param {number} index
 * @param {Object} row
 */
	setRow(index, row, opt_update) {
		row = opt_update ? this._getUpdatedRow(index, row) : row;
		this._setRowInternal(index,
			this._getCellsFromRow(row),
			this._getDataFromRow(row)
		);
	};

//	setRowProp(index, row) {
//		this._setRowInternal(index,
//			this._getCellsFromRow(row),
//			this._getDataFromRow(row)
//		);
//	};





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





	getRowCells(rowIndex) {
		return this.state.cells[rowIndex];
	};


	getSelectedRow() {
		if (this.hasSelectedIndex()) {
			return this.getRowCells(this.state.selectedIndex);
		}
		return null;
	};
	
	getRowData(rowIndex) {

//console.log('getRowData=', rowIndex, this.state.data, this.state.data[rowIndex]);

		return this.state.data[rowIndex]
				? this.state.data[rowIndex] : null;
	};
	
	getSelectedRowData() {
		if (this.hasSelectedIndex()) {
			return this.getRowData(this.state.selectedIndex);
		}
		return null;
	};


	getRow(rowIndex) {
		return {
			cells: this.state.cells[rowIndex],
			data: this.getRowData(rowIndex)
		};
	};

	
	getSelected() {
		if (this.hasSelectedIndex()) {
			return this.getRow(this.state.selectedIndex);
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




	
	_editorTypeTextChange(props, e, value) {
		var {rowIndex, name, onChange} = props;
		var row = {};
		row[name] = value;
		this.setRow(rowIndex, row, true);
		if (onChange) {
			onChange.call(this);
		}
	};
	
	_editorTypeDateChange(props, moment) {
		var {rowIndex, colIndex, name, onChange} = props;
		var row = {};
		row[name] = moment;
		this.setRow(rowIndex, row, true);
		if (onChange) {
			onChange.call(this, rowIndex, colIndex);
		}
	};
	
	

	_renderTextEditor(props) {
		var {rowIndex, colIndex, content} = props;
		var column = this.state.columns[colIndex];
		var changeProps = {
			rowIndex,
			colIndex,
			name: column.name,
			onChange: column.editor.onChange
		};
		return (
			<div
				style={{width: column.width}}
				className={column.editor.className}>

				<Input
					value={content}
					onChange={this._editorTypeTextChange.bind(this, changeProps)}
				/>
			</div>
		);
	};
	
	
	_renderDateEditor(props) {
		var {rowIndex, colIndex, content} = props;
		var column = this.state.columns[colIndex];
		var changeProps = {
			rowIndex,
			colIndex,
			name: column.name,
			onChange: column.editor.onChange
		};
		return (
			<div
				style={{width: column.width}}
				className={column.editor.className}>

				<DatePicker
					locale={column.editor.locale || "cs-cz"}
					selected={content}
					onChange={this._editorTypeDateChange.bind(this, changeProps)}
				/>
			</div>
		);
	};
	
	
/**
 * @private
 * @param {Object} props  Render properties
 * @eturn {React.Element}
 */
	_renderEditor(props) {	
		var column = this.state.columns[props.colIndex];
		var editorType = column.editor.type;
//
		switch (editorType) {
			case DataGrid.EditorType.TEXT:
				return this._renderTextEditor(props);
			case DataGrid.EditorType.DATE:
				return this._renderDateEditor(props);
		}
	};
	
	
	
/**
 * Render single cell
 * @priate
 * @param {Object} props
 */
	_renderCell(props) {
		var {rowIndex, colIndex, content} = props;
		var column = this.state.columns[colIndex];
//
		if (!!column.renderer) {
			var el = column.renderer.call(this, props);
			return React.cloneElement(el, {
				style: {...el.props.style, width: column.width},
				onClick: el.props.onClick || this._rowClickEvent.bind(this, rowIndex, colIndex),
				onDoubleClick: el.props.onDoubleClick || this._rowDoubleClickEvent.bind(this, rowIndex, colIndex)
			});
		}

		if (!!column.editor) {
			return this._renderEditor(props);
		}


/*		
		if (!!column.editor) {
			var editor = column.editor;
			if (editor.type == DataGrid.EditorType.TEXT) {			
				return (
					<div style={{width: column.width}} className={editor.className}>
						<Input
							value={content}
							onChange={this._editorTypeTextChange.bind(this, {rowIndex, name: column.name, onChange: editor.onChange})}
						/>
					</div>
				);
			}
			else if (editor.type == DataGrid.EditorType.DATE) {			
				return (
					<div style={{width: column.width}} className={editor.className}>
						<DatePicker
							locale={editor.locale || "cs-cz"}
							selected={content}
							onChange={this._editorTypeDateChange.bind(this, {rowIndex, name: column.name, onChange: editor.onChange})}
						/>
					</div>
				);
			}
		}
/**/		
		
/*
		if (this.props.cellRenderer) {
			var cell = this.props.cellRenderer.call(this, props);
			if (cell) {
				return React.cloneElement(cell, {
					style: {...cell.props.style, width: column.width},
					onClick: cell.props.onClick || this._rowClickEvent.bind(this, rowIndex, colIndex),
					onDoubleClick: cell.props.onDoubleClick || this._rowDoubleClickEvent.bind(this, rowIndex, colIndex)
				});
			}
		}
/**/

// Classic way
		return (
			<div style={{width: column.width}}
				onClick={this._rowClickEvent.bind(this, rowIndex, colIndex)}
				onDoubleClick={this._rowDoubleClickEvent.bind(this, rowIndex, colIndex)}
			><span>{content}</span></div>
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
				colIndex = parseInt(colIndex);
				var column = this.state.columns[colIndex];
				
				var content = rowCells[colIndex];
				if (column.filter) {
					content = column.filter.call(this, content);
				}
				content = content || "\u00a0";
				var data = this.state.data[rowIndex] || null;
// Render cell
				elements.push([this._renderCell({rowIndex, colIndex, content, data})]);
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
			this.props.stretch ? 'stretch' : null,
			this.props.rowSelect ? 'px-datagrid-row-select' : null
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
 * Type of cell renderer
 * @enum {number}
 */
DataGrid.EditorType = {
	TEXT: 1
};




/**
 */
DataGrid.defaultProps = {
  rowSelect: true,
};




/**
 */
DataGrid.propTypes = {
  rowSelect: React.PropTypes.bool,
};

	
	


/**
 */
export default DataGrid;
