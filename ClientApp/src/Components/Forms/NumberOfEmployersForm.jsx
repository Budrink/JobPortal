import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { reduxForm } from 'redux-form';

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

  numberOFEmployersList = [
    { iD: '1', text: 'Less Than 02' },
    { iD: '2', text: '02 - 09 Employees' },
    { iD: '3', text: '10 - 99 Employees' },
    { iD: '4', text: '100 - 499 Employees' },
    { iD: '5', text: '500 - 999 Employees' },
    { iD: '6', text: 'More Than 1000 Employees' },
  ];
  handleChange(event) {
    console.log(event.target.value);

    this.props.handleNumberChange(event.target);
  }

  renderTable() {
    return this.numberOFEmployersList.map((number) => (
      <span className="wt-checkbox" key={number.iD}>
        <input
          id={number.iD}
          type="checkbox"
          name="description"
          value={number.text}
        />
        <label htmlFor={number.iD}>{number.text}</label>
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
