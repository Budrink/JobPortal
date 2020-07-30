import React, { Component } from 'react';
import loadScripts1 from '../../Functions/LoadScripts';

class ExperienceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceList: undefined,
      loading: true,
      experienceRedactor: [],
      experience: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.ShowRedactor = this.ShowRedactor.bind(this);
    this.DeleteItem = this.DeleteItem.bind(this);
    this.AddItem = this.AddItem.bind(this);
  }
  buttonpensil = {
    background: '#55acee',
    color: 'white',
  };

  buttondelete = {
    background: '#ff5851',
    color: 'white',
  };
  ShowRedactor(data, event) {
    event.preventDefault();
    let experience = this.state.experienceRedactor.map((exp) =>
      exp.experience.iD !== data.experience.iD
        ? exp
        : { experience: exp.experience, visible: !exp.visible },
    );
    this.setState({ experienceRedactor: experience });
    const experienceList = this.state.experienceRedactor.map(
      (exp) => exp.experience,
    );
    this.props.handleExperienceChange(experienceList);
  }

  AddItem(event) {
    event.preventDefault();
    this.createEmptyItem();
  }

  DeleteItem(data, event) {
    event.preventDefault();
    let experience = this.state.experienceRedactor.filter(
      (exp) => exp.experience.iD !== data.experience.iD,
    );
    this.setState({ experienceRedactor: experience });
    const experienceList = this.state.experienceRedactor.map(
      (exp) => exp.experience,
    );
    this.props.handleExperienceChange(experienceList);
  }

  handleChange = (data, event) => {
    const input = event.target;
    const value = input.value;
    const name = input.name;
    let oldExp = this.state.experienceRedactor.filter(
      (exp) => exp.experience.iD === data.experience.iD,
    )[0].experience;
    oldExp[name] = value;
    const newExperience = this.state.experienceRedactor.map((exp) => {
      if (exp.experience.iD === data.experience.iD) {
        return {
          experience: oldExp,
          visible: exp.visible,
        };
      } else return exp;
    });
    this.setState({ experienceRedactor: newExperience });
  };
  async populateData() {
    if (this.props.experienceList !== undefined) {
      if (this.props.experienceList.length !== 0) {
        const experiences = this.props.experienceList;
        const expRedactor = experiences.map((exp) => {
          return { experience: exp, visible: false };
        });
        await this.setState({ experienceList: experiences });
        await this.setState({ experienceRedactor: expRedactor });
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
    if (this.state.experienceRedactor === undefined) {
      iD = '1';
    } else {
      iD = 'new' + this.state.experienceRedactor.length;
    }
    let NewExp = {
      experience: {
        iD: iD,
        title: '',
        description: '',
        companyName: '',
        beginDate: '',
        endDate: '',
      },
      visible: true,
    };
    let exparr = this.state.experienceRedactor;
    exparr.push(NewExp);
    this.setState({ experienceRedactor: exparr });
  }

  componentDidMount() {
    this.populateData();
  }

  renderExperience(exp) {
    // console.log(exp);
    let data = exp.experience;
    let dataReadactor = exp.visible ? (
      <form className="wt-formtheme wt-userform">
        <fieldset>
          <div className="form-group form-group-half">
            <input
              name="companyName"
              className="form-control"
              type="text"
              value={data.companyName}
              placeholder="Company Title"
              onChange={(e) => this.handleChange(exp, e)}
            />
          </div>
          <div className="form-group form-group-half">
            <input
              name="beginDate"
              className="form-control"
              type="text"
              value={data.beginDate}
              onChange={(e) => this.handleChange(exp, e)}
              placeholder="Starting Date"
            />
          </div>
          <div className="form-group form-group-half">
            <input
              name="endDate"
              className="form-control"
              type="text"
              value={data.endDate}
              onChange={(e) => this.handleChange(exp, e)}
              placeholder="Ending Date *"
            />
          </div>
          <div className="form-group form-group-half">
            <input
              name="title"
              className="form-control"
              type="text"
              value={data.title}
              onChange={(e) => this.handleChange(exp, e)}
              placeholder="Your Job Title"
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              className="form-control"
              placeholder="Your Job Description"
              onChange={(e) => this.handleChange(exp, e)}
              value={data.description}
            />
          </div>
          <div className="form-group">
            <span>* Leave ending date empty if its your current job</span>
          </div>
        </fieldset>
      </form>
    ) : null;

    return (
      <li key={data.iD} stlye={({ padding: 0 }, { margin: 0 })}>
        <div className="wt-accordioninnertitle" key={data.iD}>
          <span
            id="accordioninnertitle"
            data-target="#innertitle"
            data-toggle="collapse"
          >
            {data.title}
            <em>
              ({data.beginDate}-{data.endDate}})
            </em>
          </span>
          <div className="wt-rightarea">
            <button
              onClick={(e) => this.ShowRedactor(exp, e)}
              className="wt-addinfo wt-skillsaddinfo"
              style={this.buttonpensil}
              id="accordioninnertitle"
              aria-expanded="true"
              data-target="#innertitle"
              data-toggle="collapse"
            >
              <i className="lnr lnr-pencil" />
            </button>
            <button
              className="wt-deleteinfo"
              style={this.buttondelete}
              onClick={(e) => this.DeleteItem(exp, e)}
            >
              <i className="lnr lnr-trash" />
            </button>
          </div>
        </div>
        <div
          className="wt-collapseexp collapse show"
          id="innertitle"
          aria-labelledby="accordioninnertitle"
          data-parent="#accordion"
        >
          {dataReadactor}
        </div>
      </li>
    );
  }

  renderTable() {
    if (this.state.loading !== true) {
      return this.state.experienceRedactor.map((experience) =>
        this.renderExperience(experience),
      );
    } else return <div> Loading ...</div>;
  }

  render() {
    let table = this.renderTable(this.state.experienceRedactor);
    let contents = this.state.loading ? (
      <em>Loading...</em>
    ) : (
      <div className="wt-userexperience wt-tabsinfo">
        <div className="wt-tabscontenttitle wt-addnew">
          <h2>Add Your Experience</h2>
          <button onClick={this.AddItem}>Add New</button>
        </div>
        <ul
          // ref={(el) => (this.instance = el)}
          className="wt-experienceaccordion accordion"
          style={{ margin: 0 }}
        >
          {table}
        </ul>
      </div>
    );

    // );
    return <div>{contents}</div>;
  }
}

export default ExperienceList;
