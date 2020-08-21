import React from 'react';
import { PostFiles } from '../PostData/PostFiles';
export class EmailAttachmentUpload extends React.Component {
  constructor(props) {
    super(props);
    ///FileList -inital files list,  this.props.UploadFiles(this.state.newFileList); - to send the new fileList to calling component

    this.state = {
      fileList: [],
      PreviewUrl: [],
      newFileList: [],
      uploadingStyle: null,
      uploadText: null,
      progressbarMax: 0,
      progressbarValue: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  buttondelete = {
    background: '#ff5851',
    color: 'white',
    float: 'right',
  };

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ uploadingStyle: 'fa fa-spinner fa-spin' });
    this.setState({ uploadText: 'Uploading' });
    let uploadedFiles = await PostFiles(
      this.state.newFileList.map((file) => {
        return {
          iD: file.iD,
          name: file.name,
          size: file.Size,
          content: file.content,
        };
      }),
    );
    this.setState({ fileList: uploadedFiles });
    if (uploadedFiles !== undefined) {
      let fileList = uploadedFiles.map((file) => {
        return {
          iD: file.iD,
          name: file.name,
          link: file.link,
          size: file.size,
          content: null,
          icon: null,
        };
      });
      this.setState({ newFileList: fileList }, () => {
        this.setState({ uploadingStyle: null }, () => {
          this.setState({ uploadText: 'uploaded' });
        });
      });
    }
  }

  handleDelete(e, file) {
    e.preventDefault();
    let fileList = this.state.fileList;
    let fileArr = fileList.filter((f) => f.iD !== file.iD);
    this.PopulateData(fileArr);
  }

  handleChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    let id;
    if (this.state.newFileList === undefined) {
      id = 'C001';
    } else {
      id = 'C001' + this.state.newFileList.length;
    }
    let newFile;
    reader.onloadstart = () => {
      // this.styleOfFile = 'wt-uploading';
      this.setState({ uploadingStyle: 'fa fa-spinner fa-spin' });
      this.setState({ uploadText: 'Uploading' });
    };
    reader.onloadend = () => {
      // this.styleOfFile = null;//??
      this.setState({ uploadingStyle: null }); //'fa fa-spinner fa-spin';
      this.setState({ uploadText: 'Uploaded' });
    };

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        // console.log(event.loaded);
        // console.log(event.total);
        this.setState({ progressBarValue: event.loaded });
        this.setState({ progressBarMax: event.total });
      }
    };
    reader.onload = (e) => {
      newFile = {
        iD: id,
        name: file.name,
        link: '',
        size: file.size,
        content: reader.result,
        icon: 'wt-uploading',
      };

      if (this.state.newFileList === undefined) {
        this.setState({ newFileList: newFile });
      } else {
        const newlist = this.state.newFileList;
        newlist.unshift(newFile);
        this.setState({ newFileList: newlist });
      }
    };
    reader.onerror = (e) => {
      console.error('File could not be read! Code ');
    };
    reader.readAsDataURL(file);
    console.log(this.state.newFileList);
    this.props.fileLoaded(this.state.newFileList);
  }

  PopulateData(initfileList) {
    this.setState({ fileList: initfileList });
    if (initfileList !== undefined) {
      let fileList = initfileList.map((file) => {
        return {
          iD: file.iD,
          name: file.name,
          link: file.link,
          size: file.size,
          content: null,
          icon: null,
        };
      });
      this.setState({ newFileList: fileList });
    }
  }
  componentDidMount() {
    this.PopulateData(this.props.FileList);
  }

  renderFile(file) {
    return (
      <li className={file.icon} key={file.iD}>
        {/* <ProgressBar
          className="uploadprogressbar"
          value={this.state.progressBarValue}
          max={this.state.progressBarMax}
        ></ProgressBar> */}
        <span>{file.name}</span>
        <em>
          File size: {file.size} kb
          <button
            className="lnr lnr-cross"
            value={file.id}
            onClick={(e) => this.handleDelete(e, file)}
          />
        </em>
      </li>
    );
  }
  renderFileList(fileList) {
    let table = fileList.map((file) => this.renderFile(file));
    return (
      <div className="form-group">
        <ul className="wt-attachfile">{table}</ul>
      </div>
    );
  }
  render() {
    const fileList = this.renderFileList(this.state.newFileList);
    return (
      <div>
        <div className="form-group form-group-label wt-infouploading">
          <div className="wt-labelgroup">
            <label htmlFor="filen">
              <span
                className="wt-btn"
                style={({ width: '50 px' }, { height: '6 px' })}
              >
                Select Files
              </span>
              <input
                name="file"
                id="filen"
                type="file"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <span>Drop files here to upload</span>
            <em className="wt-fileuploading">
              {this.state.uploadText}
              <i className={this.state.uploadingStyle} />
            </em>
          </div>
          {fileList}
        </div>
        {/* <div className="form-group wt-btnarea">
          <button
            className="wt-btn"
            style={this.buttondelete}
            onClick={(e) => this.handleSubmit(e)}
          >
            Save
          </button>
        </div> */}
      </div>
    );
  }
}

// ReactDOM.render(<ImageUpload />, document.getElementById('mainApp'));
