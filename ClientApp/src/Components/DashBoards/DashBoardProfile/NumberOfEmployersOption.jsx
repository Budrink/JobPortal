import React, { Component } from 'react';

class NumberOfEmployersOption extends Component {
  constructor(props) {
    super(props);
    this.state = { initialValue: '1' };
    this.handleChange = this.handleChange.bind(this);
  }

  numberOFEmployersList = [
    { iD: '1', text: "It's just me" },
    // { iD: '1', text: 'Less Than 02' },
    { iD: '2', text: '02 - 09 Employees' },
    { iD: '3', text: '10 - 99 Employees' },
    { iD: '4', text: '100 - 499 Employees' },
    { iD: '5', text: '500 - 999 Employees' },
    { iD: '6', text: 'More Than 1000 Employees' },
  ];
  handleChange = (event) => {
    this.props.handleChange(event);
  };

  renderTable() {
    return this.numberOFEmployersList.map((number) => (
      <span className="wt-radio" key={number.iD}>
        <input
          name="numberOfEmployers"
          id={number.iD}
          type="radio"
          value={number.text}
          defaultChecked={number.text === this.props.numberOfEmployees}
          onChange={this.handleChange}
        />
        <label htmlFor={number.iD}>{number.text}</label>
      </span>
    ));
  }

  render() {
    let content = this.renderTable();

    // );
    return (
      <div className="wt-radioboxholder">
        <div className="wt-title">
          <h4>No. of employees you have</h4>
        </div>
        {content}
      </div>
    );
  }
}

export default NumberOfEmployersOption;
