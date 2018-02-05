import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import './ImageUpload.css';


//
export default class ImageUpload extends React.Component {


//
	static propTypes = {
		src: PropTypes.string,
		width: PropTypes.number,
		height: PropTypes.number,
		onSuccess: PropTypes.func,
		onFailure: PropTypes.func,
	};





//
	state = {
		src: this.props.src,
		width: 200,
		height: 200
	};





//	
	componentWillReceiveProps(nextProps) {
		this.setState({
			src: nextProps.src
		});
	};





//
	_doError(error) {
		if (this.props.onFailure) {
			this.props.onFailure.call(this, error);
		}
		else {
			throw new Error(error);
		}
	};





//
	_upload(file) {
		if (!file) {
			this._doError('Invalid file.');
		}
		const reader = new FileReader();
		reader.onloadend = () => {
			this.setState({
				src: reader.result
			});
			if (this.props.onSuccess) {
				this.props.onSuccess.call(this, reader.result);
			}
		};
		reader.onerror = this._doError;
		reader.readAsDataURL(file);
	};





//
	onDrop(files) {
		var [file] = files;
		this._upload(file);
	};





//
	_renderPreview() {
		return this.state.src
			? (<img style={{backgroundImage: 'url(' + this.state.src + ')'}} alt='' />)
			: (<span>{this.props.children}</span>);
	};





//
	render() {
		const {/*onSuccess, onFailure,*/ ...props} = this.props;
		return (
			<div className='px-imageupload' style={{width: this.props.width, height: this.props.height}}>
				<Dropzone {...props}
					onDrop={this.onDrop.bind(this)}
					multiple={false}
					className='px-imageupload-dropzone'
					
				>
					{this._renderPreview()}
				</Dropzone>
			</div>
		);
	};


};