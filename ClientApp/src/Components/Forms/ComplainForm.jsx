import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { reduxForm } from 'redux-form';
import { getComplainReasons } from '../GetData/GetComplainReasons';

class ComplainForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reasonList: [],
      loading: true,

      //  SearchCountry: '',
      // CheckedCategories: [],
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.reasonChange = this.reasonChange.bind(this);
    this.textChange = this.textChange.bind(this);
  }

  reasonChange(event) {
    this.props.reasonChange(event.target.value);
  }
  textChange(event) {
    this.props.textChange(event.target.value);
  }

  componentDidMount() {
    this.populateData();
  }
  renderTable(reasons) {
    if (reasons !== []) {
      return reasons.map((reason) => (
        <option value={reason.reasonId} key={reason.reasonId}>
          {reason.reasonName}
        </option>
      ));
    } else return <div> Loading </div>;
  }

  async populateData() {
    if (this.state.reasonList.length === 0) {
      const data = await getComplainReasons();
      this.setState({ reasonList: data }, () => {
        this.setState({ loading: false }, () => {});
      });
    }
  }

  render() {
    let contents = this.state.loading ? (
      <option> Loading...</option>
    ) : (
      this.renderTable(this.state.reasonList)
    );

    // );
    return (
      <form
        className="wt-formtheme wt-formreport"
        ref={(el) => (this.instance = el)}
      >
        <fieldset>
          <div className="form-group">
            <span className="wt-select">
              <select onChange={this.reasonChange}>
                <option value="reason">Select Reason</option>
                {contents}
              </select>
            </span>
          </div>
          <div className="form-group">
            <textarea
              onChange={this.textChange}
              className="form-control"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="form-group wt-btnarea">
            <button className="wt-btn" onClick={this.props.onClick}>
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}
ComplainForm = reduxForm({
  form: 'ComplainForm',
})(ComplainForm);

export default ComplainForm;
