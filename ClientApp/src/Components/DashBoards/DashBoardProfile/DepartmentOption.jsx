import React, { Component } from 'react';

class DepartmentOption extends Component {
  constructor(props) {
    super(props);
    this.state = { initialValue: '1' };
    this.handleChange = this.handleChange.bind(this);
  }

  departmentList = [
    { iD: '1', text: 'Customer Service or Operations' },
    // { iD: '1', text: 'Less Than 02' },
    { iD: '2', text: 'Finance or Legal' },
    { iD: '3', text: 'Engineering or Product Management' },
    { iD: '4', text: 'Marketing or Sales' },
    { iD: '5', text: 'Human Resources' },
    { iD: '6', text: 'Other' },
  ];
  handleChange = (event) => {
    // console.log(event.target);
    this.props.handleChange(event);
  };

  renderTable() {
    return this.departmentList.map((department) => (
      <span className="wt-radio" key={'dep' + department.iD}>
        <input
          name="department"
          id={`dep${department.iD}`}
          type="radio"
          value={department.text}
          defaultChecked={department.text === this.props.department}
          onChange={this.handleChange}
        />
        <label htmlFor={`dep${department.iD}`}>{department.text}</label>
      </span>
    ));
  }

  render() {
    let content = this.renderTable();

    // );
    return (
      <div className="wt-radioboxholder">
        <div className="wt-title">
          <h4>Your Department?</h4>
          {content}
        </div>
      </div>
    );
  }
}

export default DepartmentOption;
