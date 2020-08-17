import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GetGlobalCategoryList } from '../../GetDataNew/GetGlobalCategoryList';

class CategoriesPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   filter: [],
      loading: true,
      globalCateogriesList: [],
    };
  }

  async PopulateData() {
    const data = await GetGlobalCategoryList();
    this.setState({ globalCateogriesList: data }, () => {
      this.setState({ loading: false }, () => {});
    });
  }

  async componentDidMount() {
    await this.PopulateData();
  }

  renderCategory(data) {
    data = data.category;
    return (
      <div
        className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 float-left"
        key={data.globalCategoryId}
      >
        <div className="wt-categorycontent">
          <figure>
            <img src={data.globalCategoryImg} alt={data.globalCategoryName} />
          </figure>
          <div className="wt-cattitle">
            <h3>
              <Link
                to={`/UserListing?globalCategory=${data.globalCategoryName}`}
              >
                {data.globalCategoryName}
              </Link>
            </h3>
          </div>
          <div className="wt-categoryslidup">
            <p>{data.description}</p>
            <Link to={`/UserListing?globalCategory=${data.globalCategoryName}`}>
              Explore <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  renderTable(cats) {
    if (cats !== []) {
      return cats.map((category) => this.renderCategory({ category }));
    } else return <div> Loading </div>;
  }
  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.globalCateogriesList)
    );
    return (
      <div className="wt-categoryexpl">
        {contents}
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
          <div className="wt-btnarea">
            <Link to="/UserListing" className="wt-btn">
              View All
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default CategoriesPanel;
