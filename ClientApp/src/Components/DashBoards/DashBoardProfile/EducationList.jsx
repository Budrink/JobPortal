import React, { Component } from 'react';
import loadScripts1 from '../../Functions/LoadScripts';

class EducationeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationList: undefined,
      loading: true,
      educationRedactor: [],
      education: undefined,
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
    let education = this.state.educationRedactor.map((exp) =>
      exp.education.iD !== data.education.iD
        ? exp
        : { education: exp.education, visible: !exp.visible },
    );
    this.setState({ educationRedactor: education });
    const educationList = this.state.educationRedactor.map(
      (exp) => exp.education,
    );
    this.props.handleEducationChange(educationList);
  }

  AddItem(event) {
    event.preventDefault();
    this.createEmptyItem();
  }

  DeleteItem(data, event) {
    event.preventDefault();
    let education = this.state.educationRedactor.filter(
      (exp) => exp.education.iD !== data.education.iD,
    );
    this.setState({ educationRedactor: education });
    const educationList = this.state.educationRedactor.map(
      (exp) => exp.education,
    );
    this.props.handleEducationChange(educationList);
  }

  handleChange = (data, event) => {
    const input = event.target;
    const value = input.value;
    const name = input.name;
    let oldExp = this.state.educationRedactor.filter(
      (exp) => exp.education.iD === data.education.iD,
    )[0].education;
    oldExp[name] = value;
    const neweducation = this.state.educationRedactor.map((exp) => {
      if (exp.education.iD === data.education.iD) {
        return {
          education: oldExp,
          visible: exp.visible,
        };
      } else return exp;
    });
    this.setState({ educationRedactor: neweducation });
  };
  async populateData() {
    if (this.props.educationList !== undefined) {
      if (this.props.educationList.length !== 0) {
        const educations = this.props.educationList;
        const expRedactor = educations.map((exp) => {
          return { education: exp, visible: false };
        });
        await this.setState({ educationList: educations });
        await this.setState({ educationRedactor: expRedactor });
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
    if (this.state.educationRedactor === undefined) {
      iD = '1';
    } else {
      iD = 'new' + this.state.educationRedactor.length;
    }
    let NewExp = {
      education: {
        iD: iD,
        title: '',
        description: '',
        companyName: '',
        beginDate: '',
        endDate: '',
      },
      visible: true,
    };
    let exparr = this.state.educationRedactor;
    exparr.push(NewExp);
    this.setState({ educationRedactor: exparr });
  }

  componentDidMount() {
    this.populateData();
  }

  rendereducation(exp) {
    // console.log(exp);
    let data = exp.education;
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
      <li key={data.iD}>
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
      return this.state.educationRedactor.map((education) =>
        this.rendereducation(education),
      );
    } else return <div> Loading ...</div>;
  }

  render() {
    let table = this.renderTable(this.state.educationRedactor);
    let contents = this.state.loading ? (
      <em>Loading...</em>
    ) : (
      <div className="wt-usereducation wt-tabsinfo">
        <div className="wt-tabscontenttitle wt-addnew">
          <h2>Add Your education</h2>
          <button
            onClick={this.AddItem}
            // style={({ color: 'red' }, { float: 'right' })}
          >
            Add New
          </button>
        </div>
        <ul
          // ref={(el) => (this.instance = el)}
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

export default EducationeList;
