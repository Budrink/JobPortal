import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GetCountryList } from '../../GetData/GetCountryList';

class LocationList extends Component {
  constructor(props) {
    super(props);
    // {handleCategoryChange} = this.props;
    this.state = {
      categoryList: [],
      loading: true,
      isActive: true,
      // CheckedCategories: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.populateData(this.props.amountOfItems);
  }

  async populateData(amountOfItems) {
    let data;
    if (this.state.loading === true) {
      if (amountOfItems !== undefined) {
        data = await GetCountryList(amountOfItems);
      } else {
        data = await GetCountryList();
      }
    } else {
      data = await GetCountryList();
      this.setState({ isActive: false });
    }
    this.setState({ categoryList: data }, () => {
      this.setState({ loading: false }, () => {});
    });
  }

  renderCategory(data) {
    const name = data.category.countryName.replace('&', '%26');
    return (
      <li key={data.category.countryId}>
        <Link to={`/UserListing?location=${name}`}>
          {data.category.countryName}
        </Link>
      </li>
    );
  }

  renderTable(cats) {
    if (cats !== []) {
      return cats.map((category) => this.renderCategory({ category }));
    } else return <div> Loading </div>;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.populateData();
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.categoryList)
    );
    let btnContent = this.state.isActive ? (
      <li className="wt-viewmore">
        <button onClick={this.handleSubmit}>+ View All</button>
      </li>
    ) : null;

    return (
      <ul className="wt-fwidgetcontent">
        {contents}
        {btnContent}
      </ul>
    );
  }
}

export default LocationList;
