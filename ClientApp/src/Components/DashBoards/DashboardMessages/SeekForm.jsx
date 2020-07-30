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
  }

  handleString(e) {
    // console.log(e.target.value);
    let value = e.target.value;
    this.setState({ searchString: value });
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
  };

  render() {
    // const { handleSubmit } = this.props;
    return (
      <div ref={(el) => (this.instance = el)}>
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
              <button type="submit" className="wt-searchbtn">
                <i className="lnr lnr-magnifier" />
              </button>
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
