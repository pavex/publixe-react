import Application from './lib/Application.js';
import Component from './lib/Component.js';
import Scene from './lib/Scene.js';
//
import Alert from './lib/scenes/Alert.js';
import Confirm from './lib/scenes/Confirm.js';
import Error from './lib/scenes/Error.js';
//
import Dialog from './lib/ui/Dialog.js';
import Layout from './lib/ui/Layout.js';
import Toolbar from './lib/ui/Toolbar.js';
import Input from './lib/ui/Input.js';
import Form from './lib/ui/Form.js';
import Loader from './lib/ui/Loader.js';
import Block from './lib/ui/Block.js';
import DataGrid from './lib/ui/DataGrid.js';


/**
 */
module.exports = {

// Application controller
	Application: Application,

// Extended React-JS UI component
	Component: Component,

// Exteded component/Scene component with Navigator
	Scene: Scene,

// Specific scenes
	Alert: Alert,
	Confirm: Confirm,
	Error: Error,

// UI
	Dialog: Dialog,
	Layout: Layout,
	Toolbar: Toolbar,
	Input: Input,
	Form: Form,
	Block: Block,
	Loader: Loader,
	DataGrid: DataGrid
};
