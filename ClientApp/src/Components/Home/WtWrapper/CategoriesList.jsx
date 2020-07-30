import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GetGlobalCategoryList } from '../../GetData/GetGlobalCategoryList';

class CategoriesList extends Component {
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
        data = await GetGlobalCategoryList(amountOfItems);
      } else {
        data = await GetGlobalCategoryList();
      }
    } else {
      data = await GetGlobalCategoryList();
      this.setState({ isActive: false });
    }
    this.setState({ categoryList: data }, () => {
      this.setState({ loading: false }, () => {});
    });
  }

  renderCategory(data) {
    const name = data.category.globalCategoryName.replace('&', '%26');
    return (
      <li key={data.category.globalCategoryId}>
        <Link to={`/UserListing?globalCategory=${name}`}>
          {data.category.globalCategoryName}
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

export default CategoriesList;
