import React, { Component } from 'react';
import loadScripts1 from '../../Functions/LoadScripts';
import { FileUpload } from '../FileUpload';

class AwardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      awardList: undefined,
      loading: true,
      awardRedactor: [],
      award: undefined,
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
    let award = this.state.awardRedactor.map((prt) =>
      prt.award.iD !== data.award.iD
        ? prt
        : { award: prt.award, visible: !prt.visible },
    );
    this.setState({ awardRedactor: award });
    const awardList = this.state.awardRedactor.map((prt) => prt.award);
    this.props.handleAwardChange(awardList);
  }

  AddItem(event) {
    event.preventDefault();
    this.createEmptyItem();
  }

  DeleteItem(data, event) {
    event.preventDefault();
    let award = this.state.awardRedactor.filter(
      (prt) => prt.award.iD !== data.award.iD,
    );
    this.setState({ awardRedactor: award });
    const awardList = this.state.awardRedactor.map((prt) => prt.award);
    this.props.handleAwardChange(awardList);
  }

  handleChange = (data, event) => {
    const input = event.target;
    const value = input.value;
    const name = input.name;
    let oldExp = this.state.awardRedactor.filter(
      (prt) => prt.award.iD === data.award.iD,
    )[0].award;
    oldExp[name] = value;
    const newaward = this.state.awardRedactor.map((prt) => {
      if (prt.award.iD === data.award.iD) {
        return {
          award: oldExp,
          visible: prt.visible,
        };
      } else return prt;
    });
    this.setState({ awardRedactor: newaward });
  };
  async populateData() {
    if (this.props.awardList !== undefined) {
      if (this.props.awardList.length !== 0) {
        const awards = this.props.awardList;
        const prtRedactor = awards.map((prt) => {
          return { award: prt, visible: false };
        });
        await this.setState({ awardList: awards });
        await this.setState({ awardRedactor: prtRedactor });
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
    if (this.state.awardRedactor === undefined) {
      iD = '1';
    } else {
      iD = 'new' + this.state.awardRedactor.length;
    }
    let NewPrt = {
      award: {
        iD: iD,
        title: '',
        description: '',
        companyName: '',
        beginDate: '',
        endDate: '',
      },
      visible: true,
    };
    let prtarr = this.state.awardRedactor;
    prtarr.push(NewPrt);
    this.setState({ awardRedactor: prtarr });
  }

  componentDidMount() {
    this.populateData();
  }

  renderAward(prt) {
    let data = prt.award;
    let dataReadactor = prt.visible ? (
      <form className="wt-formtheme wt-userform wt-formprojectinfo">
        <fieldset>
          <div className="form-group form-group-half">
            <input
              name="title"
              className="form-control"
              type="text"
              value={data.title}
              placeholder="Award Title"
              onChange={(e) => this.handleChange(prt, e)}
            />
          </div>

          <div className="form-group form-group-half">
            <input
              name="date"
              className="form-control"
              type="text"
              value={data.date}
              onChange={(e) => this.handleChange(prt, e)}
              placeholder="Award Date"
            />
          </div>
          <FileUpload FileList={data.files} />
        </fieldset>
      </form>
    ) : null;

    return (
      <li key={data.iD} className="wt-accordioninnertitle">
        <div>
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
              <span>{data.date}</span>
            </h3>
          </div>
          <div className="wt-rightarea">
            <button
              onClick={(e) => this.ShowRedactor(prt, e)}
              className="wt-addinfo wt-skillsaddinfo"
              style={this.buttonpensil}
              id="accordioninnertitle"
              aria-expanded="true"
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
        </div>
      </li>
    );
  }

  renderTable() {
    if (this.state.loading !== true) {
      return this.state.awardRedactor.map((award) => this.renderAward(award));
    } else return <div> Loading ...</div>;
  }

  render() {
    let table = this.renderTable(this.state.awardRedactor);
    let contents = this.state.loading ? (
      <em>Loading...</em>
    ) : (
      <div className="wt-addprojectsholder wt-tabsinfo">
        <div className="wt-tabscontenttitle wt-addnew">
          <h2>Add Your Awards</h2>
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

export default AwardList;
