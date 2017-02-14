import Application from './lib/Application.js';
import Scene from './lib/Scene.js';
//
import Alert from './lib/scenes/Alert.js';
import Confirm from './lib/scenes/Confirm.js';
import Error from './lib/scenes/Error.js';
//
import Dialog from './lib/ui/Dialog/';
import Layout from './lib/ui/Layout/';
import Toolbar from './lib/ui/Toolbar/';
import Input from './lib/ui/Input/';
import Form from './lib/ui/Form/';
import Loader from './lib/ui/Loader/';
import Menu from './lib/ui/Menu/';
import Tabs from './lib/ui/Tabs/';
import DataGrid from './lib/ui/DataGrid/';


/**
 */
module.exports = {

// Application controller
	Application: Application,

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
	Loader: Loader,
	Menu: Menu,
	Tabs: Tabs,

// Advanced UI
	DataGrid: DataGrid
};
