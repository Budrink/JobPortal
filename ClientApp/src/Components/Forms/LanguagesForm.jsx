import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { Field, reduxForm } from 'redux-form';
import { GetLanguageList } from '../GetDataNew/GetLanguageList';

class LanguagesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languagesList: [],
      loading: true,
      SearchLanguage: '',
      // CheckedCategories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  fulllanguagesList = [];
  handleChange(event) {
    const target = event.target;
    if (target.name === 'SearchLanguage') {
      this.setState({ SearchLanguage: event.target.value });
    } else {
      // const value = target.checked;
      // const name = target.name;
      // this.setState({ [name]: value });

      this.props.handleLangChange(target);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let lngs;
    console.log(this.fulllanguagesList);
    if (this.fulllanguagesList !== []) {
      lngs = this.fulllanguagesList.filter(
        (cat) => cat.languageName.search(this.state.SearchLanguage) !== -1,
      );
      console.log(lngs);
    } else lngs = [];
    this.setState({ languagesList: lngs });
    // }
  }

  renderCategory(data) {
    return (
      <span className="wt-checkbox">
        <Field
          name={data.languages.languageName}
          id={data.languages.languageId}
          type="checkbox"
          component="input"
          onClick={this.handleChange}
        />
        <label htmlFor={data.languages.languageId}>
          {data.languages.languageName}
        </label>
      </span>
    );
  }
  componentDidMount() {
    this.populateData();
  }
  renderTable(cats) {
    if (cats !== []) {
      return cats.map((languages) => (
        <div className="form-group" key={languages.languageId}>
          {this.renderCategory({ languages })}
        </div>
      ));
    } else return <div> Loading 2</div>;
  }

  async populateData() {
    if (this.state.languagesList.length === 0) {
      const data = await GetLanguageList();
      this.setState({ languagesList: data }, () => {
        this.setState({ loading: false }, () => {});
        this.fulllanguagesList = this.state.languagesList;
      });
    }
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.languagesList)
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
                name="SearchLanguage"
                id="SearchCategoryLanguage"
                className="form-control"
                component="input"
                type="text"
                value={this.state.SearchCategory}
                onChange={this.handleChange}
                placeholder="Search language"
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
LanguagesForm = reduxForm({
  form: 'LanguagesForm',
})(LanguagesForm);

export default LanguagesForm;
