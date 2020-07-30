import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { Field, reduxForm } from 'redux-form';
import { getUserTypeList } from '../../GetData/GetUserTypeList';

class UserTypeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userTypeList: [],
      loading: true,
      SearchUserType: '',
      // CheckedCategories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  fulluserTypeList = [];

  handleChange(event) {
    console.log(event.target.value);
    const target = event.target;
    if (target.name === 'SearchUserType') {
      this.setState({ SearchUserType: event.target.value });
    } else {
      // const value = target.checked;
      // const name = target.name;
      // this.setState({ [name]: value });
      this.props.handleTypeChange(target);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // // if (this.state.SearchUserType !== '') {
    let cats;
    if (this.fulluserTypeList !== []) {
      cats = this.fulluserTypeList.filter(
        (cat) => cat.userTypeName.search(this.state.SearchUserType) !== -1,
      );
    } else cats = [];
    this.setState({ userTypeList: cats });
    // }
  }

  renderUserType(data) {
    return (
      <span className="wt-checkbox">
        <Field
          name={data.userType.userTypeName}
          id={data.userType.userTypeId}
          type="checkbox"
          component="input"
          onClick={this.handleChange}
        />
        <label htmlFor={data.userType.userTypeId}>
          {data.userType.userTypeName}
        </label>
      </span>
    );
  }
  componentDidMount() {
    this.populateData();
  }
  renderTable(cats) {
    if (cats !== []) {
      return cats.map((userType) => (
        <div className="form-group" key={userType.userTypeId}>
          {this.renderUserType({ userType })}
        </div>
      ));
    } else return <div> Loading 2</div>;
  }

  async populateData() {
    if (this.state.userTypeList.length === 0) {
      const data = await getUserTypeList();
      this.setState({ userTypeList: data }, () => {
        this.setState({ loading: false }, () => {});
        this.fulluserTypeList = this.state.userTypeList;
      });
    }
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.userTypeList)
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
                name="SearchUserType"
                id="SearchUserType"
                className="form-control"
                component="input"
                type="text"
                value={this.state.SearchUserType}
                onChange={this.handleChange}
                placeholder="Search Freelancer Type"
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
UserTypeForm = reduxForm({
  form: 'UserTypeForm',
})(UserTypeForm);

export default UserTypeForm;
