import React from 'react';
import { PostFiles } from '../../PostData/PostFiles';
import Modal from '../../Functions/Modal';
export class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: undefined,
      fileForServer: undefined, // file which will be sent back
      PreviewUrl: [],
      uploadingStyle: 'wt-uploadingbar', // wt-uploading",
      loading: true,
      enableSubmit: false,
      errorMessage: '',
      showError: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  buttonUpload = {
    background: '#ff5851',
    color: 'white',
    float: 'right',
  };
  closeWindowPortal() {
    this.setState({ showError: false });
  }
  async handleSubmit(e) {
    e.preventDefault();
    console.log(1);
    this.setState({ uploadingStyle: 'wt-uploadingbar wt-uploading' });
    this.setState({ uploadingStyle: 'fa fa-spinner fa-spin' });
    this.setState({ uploadText: 'Uploading' });
    let uploadedFiles = await PostFiles([
      {
        iD: this.state.file.iD,
        name: this.state.file.name,
        size: this.state.file.size,
        content: this.state.file.content,
      },
    ]);
    if (uploadedFiles !== undefined) {
      if (uploadedFiles.length !== 0) {
        let file = {
          iD: uploadedFiles[0].iD,
          name: uploadedFiles[0].name,
          link: uploadedFiles[0].link,
          size: uploadedFiles[0].size,
          content: null,
        };
        this.setState({ file: file }, () => {
          this.setState({ uploadingStyle: null }, () => {
            this.setState({ uploadText: 'uploaded' });
          });
        });
      }
    }
    this.setState({ enableSubmit: false });
    this.setState({ uploadingStyle: 'wt-uploadingbar' });
    document.getElementById(`{filep${this.props.fileName}`).value = '';
  }

  handleDelete(e, file) {
    e.preventDefault();
    this.PopulateData(undefined);
    this.setState({ fileName: '' });
    this.setState({ fileForServer: undefined });
    this.setState({ enableSubmit: true });
    console.log(`{filep${this.props.fileName}`);
    document.getElementById(`{filep${this.props.fileName}`).value = '';
  }

  handleChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    console.log(file);
    this.setState({ fileName: file.name });
    if (file === undefined) return;
    if (file.size > Number(this.props.fileSize) * 1000) {
      this.setState({
        errorMessage: `File size must be less then ${this.props.fileSize} kB`,
      });
      this.setState({ showError: true });
      return;
    } else {
      this.setState({ errorMessage: '' });
      this.setState({ showError: false });
    }
    let reader = new FileReader();
    let newFile;
    reader.onload = (e) => {
      newFile = {
        iD: 'C001',
        name: file.name,
        link: reader.result,
        size: file.size,
        content: reader.result,
        icon: 'wt-uploading',
      };
      this.PopulateData(newFile);
    };
    reader.onerror = (e) => {};
    reader.readAsDataURL(file);
  }

  PopulateData(file) {
    let initFile;

    if (file === undefined) {
      this.setState({ enableSubmit: true });
      initFile = {
        iD: '01',
        name: this.props.fileName,
        link: this.props.defaultPath,
        size: 0,
        content: undefined,
        icon: null, //wt-uploading',
      };
    } else {
      initFile = file;
    }
    this.setState({ file: initFile }, () => {
      this.setState({ loading: false });
    });
  }

  async componentDidMount() {
    await this.PopulateData(this.props.file);
  }
  createErrorWindow() {
    if (this.state.showError === true) {
      // console.log(this.state);
      return (
        <Modal isOpen={true}>
          <h3>{this.state.errorMessage}</h3>
          <button onClick={() => this.closeWindowPortal()}>Close</button>
        </Modal>
      );
    } else return null;
  }
  render(ErrorWindow = this.createErrorWindow()) {
    return this.state.loading ? (
      <em>Loading...</em>
    ) : (
      <form className="wt-formtheme wt-formprojectinfo wt-formcategory">
        {ErrorWindow}
        <fieldset>
          <div className="form-group form-group-label">
            <div className="wt-labelgroup">
              <label htmlFor={`{filep${this.props.fileName}`}>
                <span className="wt-btn">Select File</span>
                <input
                  disabled={!this.state.enableSubmit}
                  name="file"
                  id={`{filep${this.props.fileName}`}
                  type="file"
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <span>
                {/* //Drop files here to upload */}
                <button
                  disabled={!this.state.enableSubmit}
                  className="wt-btn"
                  style={this.buttonUpload}
                  onClick={(e) => this.handleSubmit(e)}
                >
                  Save
                </button>
              </span>
              <em className="wt-fileuploading">
                {this.state.uploadText}
                <i className={this.state.uploadingStyle} />
                {/* <i className="fa fa-spinner fa-spin" /> */}
              </em>
            </div>
            <div className="form-group">
              <ul className="wt-attachfile wt-attachfilevtwo">
                <li className="wt-uploadingholder wt-companyimg-uploading">
                  <div className="wt-uploadingbox">
                    <figure>
                      <img
                        src={this.state.file.link}
                        alt={this.state.file.name}
                      />
                    </figure>
                    <div className={this.state.uploadingStyle}>
                      {/* <span className="uploadprogressbar"></span> */}
                      <span>{this.state.file.name}</span>
                      <em>{this.state.file.size} kB</em>
                    </div>
                    <button
                      className="lnr lnr-cross"
                      style={{ float: 'right' }}
                      onClick={this.handleDelete}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="form-group wt-btnarea"></div>
          </div>
        </fieldset>
      </form>
    );
  }
}
