import React, { Component } from 'react';
import { GetNumberOfEmployees } from '../GetDataNew/GetNumberOfEmployees';

// Not using an ES6 transpiler

class NumberOfEmployeesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      numberOfEmployersList: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    if (this.state.numberOfEmployersList.length === 0) {
      const numberofEmployeesList = await GetNumberOfEmployees();
      this.setState({ numberOfEmployeesList: numberofEmployeesList });
      this.setState({ loading: false });
    }
  }

  handleChange(event) {
    this.props.handleNumberChange(event.target);
  }

  renderTable() {
    return this.state.numberOfEmployeesList.map((number) => (
      <span className="wt-checkbox" key={number.id}>
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
    let content =
      this.state.loading === false ? (
        this.renderTable()
      ) : (
        <div> Loading... </div>
      );

    return (
      <form className="wt-formtheme wt-formsearch" onChange={this.handleChange}>
        <div className="wt-checkboxholder">
          <fieldset>{content}</fieldset>
        </div>
      </form>
    );
  }
}

export default NumberOfEmployeesForm;
