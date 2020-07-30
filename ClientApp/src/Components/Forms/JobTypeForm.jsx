import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { Field, reduxForm } from 'redux-form';

class JobTypeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CheckedCategories: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }
  jobTypeList = [
    { iD: 'JT1', typeName: 'All Types' },
    { iD: 'JT2', typeName: 'Featured Jobs' },
    { iD: 'JT3', typeName: ' Open Jobs' },
    { iD: 'JT4', typeName: 'Fixed Jobs' },
    { iD: 'JT5', typeName: '5Hourly Jobs' },
  ];

  handleChange(event) {
    const target = event.target;
    this.props.handleTypeChange(target);
  }

  renderTable() {
    return this.jobTypeList.map((type) => (
      <span className="wt-checkbox" key={type.iD + 'cc'}>
        <Field
          name={type.typeName}
          id={type.iD}
          type="checkbox"
          component="input"
          value={type.typeName}
          //  onClick={this.handleChange}
        />
        <label htmlFor={type.iD}>{type.typeName}</label>
      </span>
    ));
  }

  render() {
    let contents = this.renderTable();

    // );
    return (
      <div className="wt-widgetcontent">
        <form
          className="wt-formtheme wt-formsearch"
          onChange={this.handleChange}
        >
          <fieldset>
            <div className="wt-checkboxholder">
              <div className="form-group">{contents}</div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

JobTypeForm = reduxForm({
  form: 'JobTypeForm',
})(JobTypeForm);

export default JobTypeForm;
