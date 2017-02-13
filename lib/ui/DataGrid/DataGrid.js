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
		var state = {};
		state.columns = props.columns;
		state.struct = props.struct || [];

		state.cells = props.cells || [];
		state.data = props.data || [];

		state.selectedIndex = null;
		state.rowCount = props.rowCount || null;
		this.state = state;
		
/*
		var cell = {
			value: '',
			className: '',
			editable: false
		};
		
		var row = {
			cells: [],
			data: []
		};

		
		var cellProps = {};
		
		cells = [];
		cellProps = [];
		
		setCellProps(20, 1, {
			editable: false
		});
		
		
		getSeleted()
		
		getSelectedRowIndex
		getSelectedRowCells
		getSelectedRowData
		
		getSelectedCells
		
		

		
		this.state = {
			
			columns: props.columns,
			
			rows: props.rows || [],
			
			
			cells: props.cells || [],
//			rows: props.rows || [],
			data: props.data || [],
			selectedIndex: null,
			rowCount: props.rowCount || null
				
			
		};
*/		
		
//
		this._selectedIndex = null;
//		
		this.load();
	};
	
	
	getColumns() {
		return this.state.columns;
	};
	
	

	
	setColCount(colCount) {
		
	};
	
	
	
	setRowCount(rowCount) {
		this.setState({
			cells: this.state.cells.slice(0, rowCount),
			data: this.state.cells.slice(0, rowCount),
			rowCount: rowCount
		});
	};
	
	
	clear() {
		this.setRowCount(0);
	};
	
	
	load() {
		if (this.props.onDataRequire) {
			this.props.onDataRequire.call(this, this, 0, 1024, this.state.columns);
		}
	};


	reload() {
//		this.setState({
//			cells: []
//		});
		this.load();
	};
	
	
	
	
	
/**
 * @param {number} rowIndex
 * @param {array} cells
 * @param {Object=} opt_data
 */
	setRowCells(rowIndex, cells, opt_data) {
// Update row count if index overflow current limit
/*
		if (rowIndex >= this.state.rowCount) {
			this.setState({
				rowCount: rowIndex + 1
			});
		}
*/
		this.setState(function(state) {
			state.cells[rowIndex] = cells;
			state.data[rowIndex] = opt_data || null;
		});
	};





/**
 * Put raw data into DataGrid separate by column definitions
 * @param {Array<Object>} data
 * @param {number=} opt_offset
 * @param {number=} opt_limit
 */
	putData(items, opt_offset, opt_limit, opt_dataKey) {
		this.setState({
			cells: [],
			data: []
		});
		var columns = this.state.columns;
		var struct = this.state.struct;

		for (var i in items) {
			var cells = [];
			var data = [];

			for (var c in columns) {
				cells.push(items[i][columns[c].name]);
			}
			
			for (var s in struct) {
				var fn = struct[s].type;
				var value = items[i][struct[s].name];
				data[struct[s].name] = fn ? fn.call(this, value) : value;
//				data.push(items[i][struct[s].name]);
			}

			this.setRowCells(i, cells, data);
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
	
	_getRowDataByIndex(rowIndex) {
		return this.state.data[rowIndex]
				? this.state.data[rowIndex] : null;
	};
	
	getSelectedRowData() {
		if (this.hasSelectedIndex()) {
			return this._getRowDataByIndex(this.state.selectedIndex);
		}
		return null;
	};
	
	getSelected() {
		if (this.hasSelectedIndex()) {
			return {
				cells: this.state.cells[this.state.selectedIndex],
				data: this._getRowDataByIndex(this.state.selectedIndex)
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
	
	
/**
 */
	render() {
		return (
			<div className="px-datagrid" onScroll={this._scrollEvent.bind(this)}>
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
