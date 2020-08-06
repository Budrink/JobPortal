import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { Field, reduxForm } from 'redux-form';
import { GetCountryList } from '../GetDataNew/GetCountryList';

class CountryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryList: [],
      loading: true,
      SearchCountry: '',
      // CheckedCategories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  fullcountryList = [];

  handleChange(event) {
    const target = event.target;
    if (target.name === 'SearchCountry') {
      this.setState({ SearchCountry: event.target.value });
    } else {
      this.props.handleLocationChange(target);
      // const value = target.checked;
      // const name = target.name;
      // this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // // if (this.state.SearchCountry !== '') {
    let cats;
    if (this.fullcountryList !== []) {
      cats = this.fullcountryList.filter(
        (cat) => cat.countryName.search(this.state.SearchCountry) !== -1,
      );
    } else cats = [];
    this.setState({ countryList: cats });
    // }
  }

  renderCountry(data) {
    return (
      <span className="wt-checkbox">
        <Field
          name={data.country.countryName}
          id={data.country.countryId}
          type="checkbox"
          component="input"
          onClick={this.handleChange}
        />
        <label htmlFor={data.country.countryId}>
          <img
            src={data.country.countryFlag}
            // src="images/flag/img-03.png"
            // '/images/flag/'
            alt={data.countryName}
          />
          {data.country.countryName}
        </label>
      </span>
    );
  }

  componentDidMount() {
    this.populateData();
  }
  renderTable(cats) {
    if (cats !== []) {
      return cats.map((country) => (
        <div className="form-group" key={country.countryId}>
          {this.renderCountry({ country })}
        </div>
      ));
    } else return <div> Loading 2</div>;
  }

  async populateData() {
    if (this.state.countryList.length === 0) {
      const data = await GetCountryList();
      this.setState({ countryList: data }, () => {
        this.setState({ loading: false }, () => {});
        this.fullcountryList = this.state.countryList;
      });
    }
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.countryList)
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
                name="SearchCountry"
                id="SearchCountry"
                className="form-control"
                component="input"
                type="text"
                value={this.state.SearchCountry}
                onChange={this.handleChange}
                placeholder="Search Country"
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
CountryForm = reduxForm({
  form: 'CountryForm',
})(CountryForm);

export default CountryForm;
