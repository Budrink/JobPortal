import React, { Component } from 'react';
// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { reduxForm } from 'redux-form';
import { GetNumberOfEmployeers } from '../GetDataNew/GetNumberOfEmployeers';
// To include the default styles
import 'react-rangeslider/lib/index.css';

// Not using an ES6 transpiler

class NumberOfEmployersForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hourRateList: [],
      loading: true,
      SearchHourRate: '',
      // CheckedCategories: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  numberOFEmployersList = GetNumberOfEmployeers();
  handleChange(event) {
    //  console.log(event.target.value);

    this.props.handleNumberChange(event.target);
  }

  renderTable() {
    return this.numberOFEmployersList.map((number) => (
      <span className="wt-checkbox" key={number.iD}>
        <input
          id={number.id}
          type="checkbox"
          name="description"
          value={number.text}
        />
        <label htmlFor={number.id}>{number.text}</label>
      </span>
    ));
  }

  render() {
    let content = this.renderTable();

    // );
    return (
      <form className="wt-formtheme wt-formsearch" onChange={this.handleChange}>
        <div className="wt-checkboxholder">
          <fieldset>{content}</fieldset>
        </div>
      </form>
    );
  }
}

NumberOfEmployersForm = reduxForm({
  form: 'NumberOfEmployersForm',
})(NumberOfEmployersForm);

export default NumberOfEmployersForm;
