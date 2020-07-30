import React, { Component } from 'react';
// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

class SeekForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      searchtype: 'freelancer',
    };
    this.handleString = this.handleString.bind(this);
    this.handleType = this.handleType.bind(this);
  }

  handleString(e) {
    // console.log(e.target.value);
    let value = e.target.value;
    this.setState({ searchString: value });
  }

  handleType(e) {
    // console.log(e.target.value);
    let value = e.target.value;
    this.setState({ searchtype: value });
  }
  handler = (event) => {
    event.preventDefault();

    let str = this.state.searchString;
    let type = this.state.searchtype;
    if (type === 'freelancer') {
      if (str === '') {
        this.props.history.push('/UserListing');
      } else {
        //  console.log(values);
        this.props.history.push(`/UserListing?string=${str}`);
      }
    }

    if (type === 'job') {
      if (str === '') {
        this.props.history.push('/JobListing');
      } else {
        //  console.log(values);
        this.props.history.push(`/JobListing?string=${str}`);
      }
    }
    if (type === 'company') {
      if (str === '') {
        this.props.history.push('/CompanyGrid');
      } else {
        //  console.log(values);
        this.props.history.push(`/CompanyGrid?string=${str}`);
      }
    }
  };

  render() {
    // const { handleSubmit } = this.props;
    return (
      <div ref={(el) => (this.instance = el)}>
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
        {/* <script src="/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script> */}

        <form
          // onSubmit={handleSubmit}
          onSubmit={this.handler}
          className="wt-formtheme wt-formbanner wt-formbannervtwo"
        >
          <fieldset>
            <div className="form-group">
              <Field
                name="searchString"
                component="input"
                className="form-control"
                type="text"
                placeholder="I’m looking for"
                onChange={this.handleString}
              />
              <div className="wt-formoptions">
                <div className="wt-dropdown">
                  <span>
                    In:
                    <em className="selected-search-type">Freelancers </em>
                    <i className="lnr lnr-chevron-down" />
                  </span>
                </div>
                <div className="wt-radioholder">
                  <span className="wt-radio">
                    <Field
                      name="searchtype"
                      id="wt-freelancers"
                      type="radio"
                      component="input"
                      data-title="Freelancers"
                      value="freelancer"
                      onChange={this.handleType}
                    />
                    <label htmlFor="wt-freelancers">Freelancers</label>
                  </span>
                  <span className="wt-radio">
                    <Field
                      name="searchtype"
                      id="wt-jobs"
                      type="radio"
                      data-title="Jobs"
                      // defaultValue="job"
                      value="job"
                      component="input"
                      onChange={this.handleType}
                    />
                    <label htmlFor="wt-jobs">Jobs</label>
                  </span>
                  <span className="wt-radio">
                    <Field
                      name="searchtype"
                      id="wt-companies"
                      type="radio"
                      component="input"
                      data-title="Companies"
                      // defaultValue="company"
                      value="company"
                      onChange={this.handleType}
                    />
                    <label htmlFor="wt-companies">Companies</label>
                  </span>
                </div>
                {/* <a className="wt-searchbtn" href="javascrip:void(0);"> */}
                <button type="submit" className="wt-searchbtn">
                  <i className="lnr lnr-magnifier" />
                </button>
                {/* </a> */}
              </div>
            </div>
          </fieldset>
        </form>
        {/* </body> */}
      </div>
    );
  }
}
SeekForm = reduxForm({
  form: 'SeekForm',
})(SeekForm);

export default withRouter(SeekForm);
