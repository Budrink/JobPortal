import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class FilterTags extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //  console.log(event.target.value);
    const target = event.target;
    if (target.name === 'SearchCategory') {
      this.setState({ SearchCategory: event.target.value });
    } else {
      this.props.handleCategoryChange(target);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // // if (this.state.SearchCategory !== '') {
    let cats;
    if (this.fullcategoryList !== []) {
      cats = this.fullcategoryList.filter(
        (cat) => cat.categoryName.search(this.state.SearchCategory) !== -1,
      );
    } else cats = [];
    this.setState({ categoryList: cats });
    // }
  }

  renderTag(data, i) {
    return (
      <li className="alert alert-dismissable fade in" key={'' + i + 1}>
        <a href="/">
          <i
            className="fa fa-times close"
            data-dismiss="alert"
            aria-label="close"
          />
          <span>{data}</span>
        </a>
      </li>
    );
  }

  renderTable(filterCategoryStrings) {
    if (filterCategoryStrings.length !== 0) {
      return filterCategoryStrings.map((str) =>
        this.renderTag(str, filterCategoryStrings.indexOf(str)),
      );
    } else return <div> Loading </div>;
  }

  render() {
    // console.log(JSON.stringify(this.props.filterCategoryStrings));
    let contents = this.renderTable(this.props.filterCategoryStrings);

    return (
      <div className="wt-filterholder">
        <ul className="wt-filtertag" key="wt-filtertag">
          <li className="wt-filtertagclear" key="0">
            <Link to={`/${this.props.Listing}`}>
              <i className="fa fa-times" />
              <span>Clear All Filter</span>
            </Link>
          </li>
          {contents}
        </ul>
      </div>
    );
  }
}

export default FilterTags;
