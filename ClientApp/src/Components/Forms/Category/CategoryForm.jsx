import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { Field, reduxForm } from 'redux-form';
import { GetSkillList } from '../../GetData/GetSkillList';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    // {handleCategoryChange} = this.props;
    this.state = {
      skillList: [],
      loading: true,
      SearchCategory: '',
      // CheckedCategories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  fullSkillList = [];

  handleChange(event) {
    //  console.log(event.target.value);
    const target = event.target;
    if (target.name === 'SearchCategory') {
      this.setState({ SearchCategory: event.target.value });
    } else {
      // const value = target.checked;
      // const name = target.name;
      this.props.handleCategoryChange(target);
      // this.setState({ [name]: value });
      // console.log(JSON.stringify(this.state));
      // this.props.onChangeCategory({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // // if (this.state.SearchCategory !== '') {
    let cats;
    if (this.fullSkillList !== []) {
      cats = this.fullSkillList.filter(
        (cat) => cat.name.search(this.state.SearchCategory) !== -1,
      );
    } else cats = [];
    this.setState({ skillList: cats });
    // }
  }

  renderCategory(data) {
    return (
      <span className="wt-checkbox">
        <Field
          name={data.skill.name}
          id={data.skill.id}
          type="checkbox"
          component="input"
          onClick={this.handleChange}
        />
        <label htmlFor={data.skill.id}>{data.skill.name}</label>
      </span>
    );
  }
  componentDidMount() {
    this.populateData();
  }
  renderTable(cats) {
    if (cats !== []) {
      return cats.map((skill) => (
        <div className="form-group" key={skill.id}>
          {this.renderCategory({ skill })}
        </div>
      ));
    } else return <div> Loading </div>;
  }

  async populateData() {
    if (this.state.skillList.length === 0) {
      const data = await GetSkillList();
      this.setState({ skillList: data }, () => {
        this.setState({ loading: false }, () => {});
        this.fullSkillList = this.state.skillList;
      });
    }
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.skillList)
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
                name="SearchCategory"
                id="Search_Category"
                className="form-control"
                component="input"
                type="text"
                value={this.state.SearchCategory}
                onChange={this.handleChange}
                placeholder="Search Category"
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
CategoryForm = reduxForm({
  form: 'CategoryForm',
})(CategoryForm);

export default CategoryForm;
