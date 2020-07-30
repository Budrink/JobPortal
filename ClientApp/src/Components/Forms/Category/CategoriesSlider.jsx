/** @jsx jsx */ import { jsx } from '@emotion/core';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTopCategoryList } from '../../GetData/GetTopCategoryList';
import { string } from 'prop-types';
import '../../../css/owl.carousel.min.css';
class CategorySlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topCategoryList: [],
      loading: false,
      selectedCat: string,
    };
  }

  renderCategory(category) {
    return (
      <div
        key={category.topCategoryId}
        // id={data.category.topCategory.topCategoryId}
        className="wt-categoryslidercontent item"
      >
        <figure>
          <img
            alt={category.topCategory.name}
            src={category.topCategory.sliderImg}
          />
        </figure>
        <div className="wt-cattitle">
          <h3>
            <Link
              to={`/UserListing?globalCategory=${category.topCategory.name}`}
            >
              {category.topCategory.name}
            </Link>
          </h3>
          <span>Items: {category.itemsAmount}</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.populateData();
  }

  async populateData() {
    if (!(this.state.topCategoryList.length > 0)) {
      const data = await getTopCategoryList();
      this.setState({ topCategoryList: data });
    }
  }

  createItems() {
    // console.log('1');
    // console.log(this.state.topCategoryList.count);
    // console.log(JSON.stringify(this.state.topCategoryList));
    let Items = [];
    for (let i = 0; i < this.state.topCategoryList.length; i++) {
      const item = this.renderCategory(this.state.topCategoryList[i]);
      // console.log(JSON.stringify(item));
      Items.push(item);
      //  console.log(Items.length);
    }
    return Items;
  }

  render() {
    if (!(this.state.topCategoryList.length > 0)) {
      return (
        <div
          id="wt-categoriesslider"
          className="wt-categoriesslider owl-carousel"
        ></div>
      );
    } else {
      const Items = this.createItems();

      return (
        <div
          id="wt-categoriesslider"
          className="wt-categoriesslider owl-carousel"
        >
          {Items}
        </div>
      );
    }
  }
}

export default CategorySlider;
