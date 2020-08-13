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
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(event.target);
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
            <Field
              name="SearchCategory"
              id="Search_Category"
              className="form-control"
              component="input"
              type="text"
              value={this.state.SearchCategory}
              onChange={this.handleChange}
              placeholder="Search  string"
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

SearchForm = reduxForm({
  form: 'SearchForm',
})(SearchForm);

export default SearchForm;
