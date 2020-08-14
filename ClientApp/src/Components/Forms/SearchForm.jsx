import React, { Component } from 'react';

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
    this.props.handleSubmit(this.state.SearchString);
  }

  handleChange(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ SearchString: value });
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
            <input
              // name="SearchString"
              className="form-control"
              component="input"
              type="text"
              // value={this.state.SearchString}
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

export default SearchForm;
