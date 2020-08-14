import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { Field, reduxForm } from 'redux-form';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    // {handleCategoryChange} = this.props;
    this.state = {
      categoryList: [],
      SearchString: '',
      // CheckedCategories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
    this.props.handleSubmit(event.target);
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    let value = e.target.value;
    this.setState({ SearchString: this.setState.SearchString + value });
    console.log(this.state.SearchString);
  }

  render() {
    // );
    return (
      <form
        className="wt-formtheme wt-formsearch"
        // onSubmit={this.state.handleSubmit}
        // onSubmit={this.handleSubmit}
      >
        <fieldset>
          <div className="form-group">
            <field
              name="SearchString"
              className="form-control"
              component="input"
              type="text"
              value={this.state.SearchString}
              onChange={this.handleChange}
              placeholder="Search  string"
            />
            <field
              name="searchString"
              component="input"
              className="form-control"
              type="text"
              placeholder="I’m looking for"
              onChange={this.handleChange}
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
      </form>
    );
  }
}

export default SearchForm;
