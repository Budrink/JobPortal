import React, { Component } from 'react';
import loadScripts1 from '../../Functions/LoadScripts';
import { FileUpload } from '../FileUpload';

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectList: undefined,
      loading: true,
      projectRedactor: [],
      project: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.ShowRedactor = this.ShowRedactor.bind(this);
    this.DeleteItem = this.DeleteItem.bind(this);
    this.AddItem = this.AddItem.bind(this);
  }
  buttonpensil = {
    background: '#55acee',
    color: 'white',
    float: 'left',
  };

  buttondelete = {
    background: '#ff5851',
    color: 'white',
    float: 'right',
  };
  ShowRedactor(data, event) {
    event.preventDefault();
    let project = this.state.projectRedactor.map((prt) =>
      prt.project.iD !== data.project.iD
        ? prt
        : { project: prt.project, visible: !prt.visible },
    );
    this.setState({ projectRedactor: project });
    const projectList = this.state.projectRedactor.map((prt) => prt.project);
    this.props.handleProjectChange(projectList);
  }

  AddItem(event) {
    event.preventDefault();
    this.createEmptyItem();
  }

  DeleteItem(data, event) {
    event.preventDefault();
    let project = this.state.projectRedactor.filter(
      (prt) => prt.project.iD !== data.project.iD,
    );
    this.setState({ projectRedactor: project });
    const projectList = this.state.projectRedactor.map((prt) => prt.project);
    this.props.handleProjectChange(projectList);
  }

  handleChange = (data, event) => {
    const input = event.target;
    const value = input.value;
    const name = input.name;
    let oldExp = this.state.projectRedactor.filter(
      (prt) => prt.project.iD === data.project.iD,
    )[0].project;
    oldExp[name] = value;
    const newproject = this.state.projectRedactor.map((prt) => {
      if (prt.project.iD === data.project.iD) {
        return {
          project: oldExp,
          visible: prt.visible,
        };
      } else return prt;
    });
    this.setState({ projectRedactor: newproject });
  };
  async populateData() {
    if (this.props.projectList !== undefined) {
      if (this.props.projectList.length !== 0) {
        const projects = this.props.projectList;
        const prtRedactor = projects.map((prt) => {
          return { project: prt, visible: false };
        });
        await this.setState({ projectList: projects });
        await this.setState({ projectRedactor: prtRedactor });
      } else {
        this.createEmptyItem();
      }
    } else {
      this.createEmptyItem();
    }
    await this.setState(() => {
      return { loading: false };
    });
    // loadScripts1(this.instance, false);
  }
  createEmptyItem() {
    let iD;
    if (this.state.projectRedactor === undefined) {
      iD = '1';
    } else {
      iD = 'new' + this.state.projectRedactor.length;
    }
    let NewPrt = {
      project: {
        iD: iD,
        title: '',
        description: '',
        companyName: '',
        beginDate: '',
        endDate: '',
      },
      visible: true,
    };
    let prtarr = this.state.projectRedactor;
    prtarr.push(NewPrt);
    this.setState({ projectRedactor: prtarr });
  }

  componentDidMount() {
    this.populateData();
  }

  renderproject(prt) {
    let data = prt.project;
    let dataReadactor = prt.visible ? (
      <form className="wt-formtheme wt-userform wt-formprojectinfo">
        <fieldset>
          <div className="form-group form-group-half">
            <input
              name="title"
              className="form-control"
              type="text"
              value={data.title}
              placeholder="Project Title"
              onChange={(e) => this.handleChange(prt, e)}
            />
          </div>

          <div className="form-group form-group-half">
            <input
              name="url"
              className="form-control"
              type="url"
              value={data.url}
              onChange={(e) => this.handleChange(prt, e)}
              placeholder="Project URL"
            />
          </div>
          <FileUpload FileList={data.files} />
        </fieldset>
      </form>
    ) : null;

    return (
      <li key={data.iD} className="wt-accordioninnertitle">
        <div>
          {/* <div className="wt-accordioninnertitle"> */}
          <div
            className="wt-projecttitle collapsed"
            data-target="#innertitleaone"
            data-toggle="collapse"
          >
            <figure>
              <img alt="description" src={data.img} />
            </figure>
            <h3>
              {data.title}
              <span>{data.url}</span>
            </h3>
          </div>
          <div className="wt-rightarea">
            <button
              onClick={(e) => this.ShowRedactor(prt, e)}
              className="wt-addinfo wt-skillsaddinfo"
              // style={{ color: '#fff' }}
              style={this.buttonpensil}
              id="accordioninnertitle"
              aria-expanded="true"
              // data-target="#innertitle"
              data-toggle="collapse"
            >
              <i className="lnr lnr-pencil" />
            </button>
            <button
              className="wt-deleteinfo"
              style={this.buttondelete}
              onClick={(e) => this.DeleteItem(prt, e)}
            >
              <i className="lnr lnr-trash" />
            </button>
          </div>
        </div>
        <div
          className="wt-collapseprt collapse show"
          id="innertitle"
          aria-labelledby="accordioninnertitle"
          data-parent="#accordion"
        >
          {dataReadactor}
          {/* //  </div> */}
        </div>
      </li>
    );
  }

  renderTable() {
    if (this.state.loading !== true) {
      return this.state.projectRedactor.map((project) =>
        this.renderproject(project),
      );
    } else return <div> Loading ...</div>;
  }

  render() {
    let table = this.renderTable(this.state.projectRedactor);
    let contents = this.state.loading ? (
      <em>Loading...</em>
    ) : (
      <div className="wt-addprojectsholder wt-tabsinfo">
        <div className="wt-tabscontenttitle wt-addnew">
          <h2>Add Your Projects</h2>
          <button
            onClick={this.AddItem}
            // style={({ color: 'red' }, { float: 'right' })}
          >
            Add New
          </button>
        </div>
        <ul
          ref={(el) => (this.instance = el)}
          className="wt-experienceaccordion accordion"
        >
          {table}
        </ul>
      </div>
    );

    // );
    return <div>{contents}</div>;
  }
}

export default ProjectList;
