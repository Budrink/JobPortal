import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { Field, reduxForm } from 'redux-form';
import { getEnglishLevelList } from '../GetDataNew/GetEnglishLevelList';

class EnglishLevelForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      englishLevelList: [],
      loading: true,
      SearchEnglishLevel: '',
      // CheckedCategories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  fullenglishLevelList = [];

  handleChange(event) {
    //console.log(event.target.value);
    const target = event.target;
    if (target.name === 'SearchEnglishLevel') {
      this.setState({ SearchEnglishLevel: event.target.value });
    } else {
      // const value = target.checked;
      // const name = target.name;
      // this.setState({ [name]: value });
      this.props.handleLevelChange(target);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // // if (this.state.SearchEnglishLevel !== '') {
    let cats;
    if (this.fullenglishLevelList !== []) {
      cats = this.fullenglishLevelList.filter(
        (cat) =>
          cat.englishLevelName.search(this.state.SearchEnglishLevel) !== -1,
      );
    } else cats = [];
    this.setState({ englishLevelList: cats });
    // }
  }

  renderEnglishLevel(data) {
    return (
      <span className="wt-checkbox">
        <Field
          name={data.englishLevel.englishLevelName}
          id={data.englishLevel.englishLevelId}
          type="checkbox"
          component="input"
          onClick={this.handleChange}
        />
        <label htmlFor={data.englishLevel.englishLevelId}>
          {data.englishLevel.englishLevelName}
        </label>
      </span>
    );
  }
  componentDidMount() {
    this.populateData();
  }
  renderTable(cats) {
    if (cats !== []) {
      return cats.map((englishLevel) => (
        <div className="form-group" key={englishLevel.englishLevelId}>
          {this.renderEnglishLevel({ englishLevel })}
        </div>
      ));
    } else return <div> Loading 2</div>;
  }

  async populateData() {
    if (this.state.englishLevelList.length === 0) {
      const data = await getEnglishLevelList();
      this.setState({ englishLevelList: data }, () => {
        this.setState({ loading: false }, () => {});
        this.fullenglishLevelList = this.state.englishLevelList;
      });
    }
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.englishLevelList)
    );

    // );
    return (
      <div ref={(el) => (this.instance = el)}>
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
        <form
          className="wt-formtheme wt-formsearch"
          // onSubmit={this.state.handleSubmit}
          // onSubmit={this.handleSubmit}
        >
          <fieldset>
            <div className="form-group">
              <Field
                name="SearchEnglishLevel"
                id="SearchEnglishLevel"
                className="form-control"
                component="input"
                type="text"
                value={this.state.SearchEnglishLevel}
                onChange={this.handleChange}
                placeholder="Search English Level"
              />
              <button
                className="wt-searchgbtn"
                type="submit"
                onClick={this.handleSubmit}
              >
                <i className="lnr lnr-magnifier" />
              </button>
            </div>
          </fieldset>
          <fieldset>
            <div className="wt-checkboxholder wt-verticalscrollbar">
              <div className="form-group">{contents}</div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
EnglishLevelForm = reduxForm({
  form: 'EnglishLevelForm',
})(EnglishLevelForm);

export default EnglishLevelForm;
