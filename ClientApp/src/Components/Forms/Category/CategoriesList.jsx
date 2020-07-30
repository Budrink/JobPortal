import React from 'react';
import { getTopCategoryList } from '../GetData/GetTopCategoryList';
async function populateData() {
  // if (this.state.topCategoryList.length === 0) {
  const data = await getTopCategoryList();
  // this.setState({ topCategoryList: data });
  // window.alert('1');
  // window.alert(JSON.stringify(this.state.topCategoryList));
  // this.setState({ topCategoryList: data });
  window.alert('1');
  window.alert(JSON.stringify(data));
  return data;
}

export default async function TopCategoriesList() {
  const TopCategories = await populateData();
  window.alert('5');
  window.alert(JSON.stringify(TopCategories));
  if (TopCategories === undefined) {
    return <div />;
  } else {
    const Elements = TopCategories.map((category) => (
      // <div id="wt-categoriesslider" class="wt-categoriesslider owl-carousel">
      <div
        key={category.topCategory.categoryId}
        id={category.topCategory.topCategoryId}
        className="wt-categoryslidercontent item"
      >
        <figure>
          <img
            alt="img description"
            src={category.topCategory.categorySliderImg}
          />
        </figure>
        <div className="wt-cattitle">
          <h3>
            <a key={category.topCategoryId + '1'} href="/">
              {category.topCategory.categoryName}
            </a>
          </h3>
          <span>Items: {category.itemsAmount}</span>
        </div>
      </div>
      // </div>
    ));
    return {};
  }
}
