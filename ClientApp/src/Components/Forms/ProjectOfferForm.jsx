import React, { Component } from 'react';
import { GetOngoingJobsListofCompany } from '../GetData/GetOngoingJobsListofCompany';
import { SendOffer } from '../PostData/SendOffer';
import Modal from '../Functions/Modal';

class ProjectOfferForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectList: [],
      loading: true,
      selectedProject: '',
      deadLine: '',
      description: '',
      errorMessage: '',
    };

    this.projectChange = this.projectChange.bind(this);
    this.textChange = this.textChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deadlineChange = this.deadlineChange.bind(this);
    this.closeWindowPortal = this.closeWindowPortal.bind(this);
  }
  closeWindowPortal() {
    this.setState({ errorMessage: '' });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!e.isDefaultPrevented()) {
      e.returnValue = false;
    }

    console.log(localStorage.getItem('userId'));
    console.log(this.props.freelancerId);
    console.log(this.state.selectedProject);
    console.log(this.state.description);
    console.log(this.state.deadLine);

    let errors;
    errors = [''];
    this.setState({ showErrors: false });
    if (localStorage.getItem('userId') === undefined) {
      errors.push('You need to log in');
    }
    if (this.state.description === '') {
      errors.push('The description may not be empty');
      this.setState({ showErrors: true });
    }
    if (this.state.selectedProject === '') {
      errors.push('You should select the project');
    }
    if (this.state.deadLine === '') {
      errors.push('You should check the deadline');
    }
    console.log(errors);
    this.setState({ errorMessage: errors });
    SendOffer(
      localStorage.getItem('userId'),
      this.props.freelancerId,
      this.state.selectedProject,
      this.state.description,
      this.state.deadLine,
    );
  }

  projectChange(event) {
    this.setState({ selectedProject: event.target.value });
  }
  textChange(event) {
    this.setState({ description: event.target.value });
  }
  deadlineChange(event) {
    this.setState({ deadLine: event.target.value });
  }
  componentDidMount() {
    this.populateData();
  }
  renderTable(reasons) {
    if (reasons !== []) {
      return reasons.map((reason) => (
        <option value={reason.reasonId} key={reason.reasonId}>
          {reason.reasonName}
        </option>
      ));
    } else return <div> Loading </div>;
  }

  async populateData() {
    const userId = localStorage.getItem('userId');
    if (userId === undefined) {
      return;
    }
    if (localStorage.getItem('userType') !== 'company') {
      // return;
    }
    let projectList = await GetOngoingJobsListofCompany(userId);
    this.setState({ projectList: projectList.projectList }, () => {
      this.setState({ loading: false });
    });
  }

  renderProject(project) {
    return (
      <option key={project.jobId} value={this.state.selectedProject}>
        {project.title}
      </option>
    );
  }

  createErrorWindow() {
    if (this.state.errorMessage.length > 1) {
      return (
        <Modal isOpen={true}>
          {this.state.errorMessage.map((error) => (
            <h2>{error}</h2>
          ))}
          <button onClick={() => this.closeWindowPortal()}>Close</button>
        </Modal>
      );
    } else return null;
  }

  render() {
    let projectContents =
      this.state.loading === false && this.state.projectList !== undefined ? (
        <select
          style={({ width: '300px' }, { display: 'inline' })}
          onChange={this.projectChange}
          value={this.state.selectedProject}
        >
          <option value="">Project Title Here</option>
          {this.state.projectList.projects.map((project) =>
            this.renderProject(project),
          )}
        </select>
      ) : null;
    let errors = this.createErrorWindow();
    let Content =
      this.state.loading === true ? (
        <div>Loading....</div>
      ) : (
        <div className="modal-body">
          {errors}
          <div className="wt-projectdropdown-hold">
            <div className="wt-projectdropdown">
              <div style={{ display: 'inline' }}>
                <span>
                  {/* <figure>
                    <img src="/images/thumbnail/img-07.jpg" alt="description" />
                  </figure> */}
                  {projectContents}
                </span>
                <div>
                  <span>
                    <i className="lnr lnr-calendar-full"></i> Project Deadline:
                    <input
                      type="date"
                      // style={({ height: '10px' }, { width: '100px' })}
                      onChange={this.deadlineChange}
                      value={this.state.deadLine}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <form
            className="wt-formtheme wt-formpopup"
            onSubmit={this.handleSubmit}
          >
            <fieldset>
              <div className="form-group">
                <textarea
                  onChange={this.textChange}
                  className="form-control"
                  placeholder="Add Description*"
                  value={this.state.description}
                ></textarea>
              </div>
              <div className="form-group wt-btnarea">
                <button type="submit" className="wt-btn">
                  Send offer
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      );
    return Content;
  }
}

export default ProjectOfferForm;
