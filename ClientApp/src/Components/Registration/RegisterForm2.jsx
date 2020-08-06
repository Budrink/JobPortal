/** @jsx jsx */ import { jsx } from '@emotion/core';
import React from 'react';
//import { reduxForm } from 'redux-form';
import { SecondRegister } from '../PostData/Register_old';
import { FormErrors } from './FormErrors';
import { Link } from 'react-router-dom';
import { GetCountryList } from '../GetDataNew/GetCountryList';

// import { timingSafeEqual } from 'crypto';

export default class RegisterForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      countryId: '',
      password: '',
      retypedPassword: '',
      typeOfUser: 'company',
      employees: '',
      department: '',
      //  departmentName: '',
      termsConditions2: false,
      termsConditions: false,

      formErrors: {
        password: 'password must be at least 6 signs long',
        retypedPassword: "the passowrds don't match",
        //  departmentName: 'input the name of your department',
        termsConditions2: 'Check that you agree with term and conditions',
        termsConditions: 'Check that you agree with conditions',
      },
      passwordValid: false,
      retypedPasswordValid: false,
      formValid: false,
      begin: true,
      formVaidatedByServer: false,
      departmentNameValid: true,
      termsConditions2Valid: false,
      termsConditionsValid: false,
    };

    // this.onChangeSelect = this.onChangeSelect.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeCheck = this.onChangeCheck.bind(this);
  }

  async onSubmit(event) {
    this.setState({ begin: false });
    event.preventDefault();
    if (this.state.formValid === true) {
      let response = await SecondRegister({
        countryId: this.state.countryId,
        password: this.state.password,
        typeOfUser: this.state.typeOfUser,
        employees: this.state.employees,
        department: this.state.department,

        //   this.state.departmentName,
      });
      console.log(response);
      if (response.succeeded === true) {
        this.props.onRegister();
      } else {
        if (response.errors.length > 0) {
          let name = 'registerError';
          for (let i = 0; i < response.errors.length; i++) {
            name = 'registerError' + Number.toString(i);
            this.setState((prevState) => ({
              formErrors: {
                ...prevState.formErrors,
                [name]: response.errors[i].description,
              },
            }));
          }
        }
        this.setState({ formValid: false });
      }
    }
  }

  async PopulateData() {
    let countries = await GetCountryList();
    this.setState({ countries: countries });
  }
  componentDidMount() {
    this.PopulateData();
  }

  onChangeType(event) {
    const value = event.target.value;
    // this.setState({ [name]: value });
    // this.setState({ typeOfUser: value });
    this.setState((prevState, props) => ({
      typeOfUser: value,
    }));
  }
  onChangeCheck(event) {
    const name = event.target.name;
    const value = !this.state[name];
    this.setState({ [name]: value }); //, ()
    //=> {
    this.validateField(name, value);
    // });
    this.validateForm();
    // console.log(name + ' ' + JSON.stringify(this.state[name]));
  }

  onChangeInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let passwordValid = this.state.passwordValid;
    let retypedPasswordValid = this.state.retypedPasswordValid;
    let departmentNameValid = this.state.departmentNameValid;
    let termsConditionsValid = this.state.termsConditionsValid;
    let termsConditions2Valid = this.state.termsConditions2Valid;

    switch (fieldName) {
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ''
          : 'Password is too short';
        break;
      case 'retypedPassword':
        retypedPasswordValid = value === this.state.password;
        fieldValidationErrors.retypedPassword = retypedPasswordValid
          ? ''
          : "The passwords don't match ";
        break;
      // case 'departmentName':
      //   departmentNameValid = value.length >= 6;
      //   fieldValidationErrors.departmentNameValid = departmentNameValid
      //     ? ''
      //     : 'Input the name of your department';
      //   break;
      case 'termsConditions':
        termsConditionsValid = !this.state.termsConditions;
        fieldValidationErrors.termsConditions = termsConditionsValid
          ? ''
          : 'Check the agreement with terms and conditions';
        break;
      case 'termsConditions2':
        termsConditions2Valid = !this.state.termsConditions2;
        fieldValidationErrors.termsConditions2 = termsConditions2Valid
          ? ''
          : 'Check the agreement with terms';
        break;

      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        passwordValid: passwordValid,
        retypedPasswordValid: retypedPasswordValid,
        departmentNameValid: departmentNameValid,
        termsConditions2Valid: termsConditions2Valid,
        termsConditionsValid: termsConditionsValid,
      },
      this.validateForm,
    );
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.passwordValid &&
        this.state.retypedPasswordValid &&
        this.state.departmentNameValid &&
        this.state.termsConditions2Valid &&
        this.state.termsConditionsValid,
    });
  }

  CreateCountryList() {
    return this.state.countries.map((country) => (
      <option
        key={country.countryId}
        value={country.countryId}
        data-type="text"
      >
        {country.countryName}
      </option>
    ));
  }

  DepartmentNameContext() {
    if (this.state.department === 'Other') {
      return (
        <div className="form-group wt-othersearch">
          <input
            type="text"
            name="departmentName"
            className="form-control"
            //   value={this.state.department}
            onChange={this.onChangeInput}
            placeholder="Enter Your Department"
          />
        </div>
      );
    } else return <div />;
  }
  CreateCompanyProps(nameContext = this.DepartmentNameContext()) {
    if (this.state.typeOfUser === 'company') {
      return (
        <div
          className="wt-accordiondetails" // collapse show"
          //  id="collapseOne"
          aria-labelledby="headingOne"
        >
          <div className="wt-radioboxholder">
            <div className="wt-title">
              <h4>No. of employees you have</h4>
            </div>
            <span className="wt-radio">
              <input
                id="wt-just"
                type="radio"
                name="employees"
                value="1"
                // defaultChecked
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-just">It's just me</label>
            </span>
            <span className="wt-radio">
              <input
                id="wt-employees"
                type="radio"
                name="employees"
                value="2"
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-employees">2 - 9 employees</label>
            </span>
            <span className="wt-radio">
              <input
                id="wt-employees1"
                type="radio"
                name="employees"
                value="10"
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-employees1">10 - 99 employees</label>
            </span>
            <span className="wt-radio">
              <input
                id="wt-employees2"
                type="radio"
                name="employees"
                value="100"
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-employees2">100 - 499 employees</label>
            </span>
            <span className="wt-radio">
              <input
                id="wt-employees3"
                type="radio"
                name="employees"
                value="500"
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-employees3">500 - 1000 employees</label>
            </span>
            <span className="wt-radio">
              <input
                id="wt-employees4"
                type="radio"
                name="employees"
                value="1000"
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-employees4">More than 1000 employees</label>
            </span>
          </div>
          <div className="wt-radioboxholder">
            <div className="wt-title">
              <h4>Your Department?</h4>
            </div>
            <span className="wt-radio">
              <input
                id="wt-department"
                type="radio"
                name="department"
                value="CustomerService"
                defaultChecked
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-department">
                Customer Service or Operations
              </label>
            </span>
            <span className="wt-radio">
              <input
                id="wt-department1"
                type="radio"
                name="department"
                value="Finance"
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-department1">Finance or Legal</label>
            </span>
            <span className="wt-radio">
              <input
                id="wt-department2"
                type="radio"
                name="department"
                value="Engineering"
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-department2">
                Engineering or Product Management
              </label>
            </span>
            <span className="wt-radio">
              <input
                id="wt-department3"
                type="radio"
                name="department"
                value="Marketing"
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-department3">Marketing or Sales</label>
            </span>
            <span className="wt-radio">
              <input
                id="wt-department4"
                type="radio"
                name="department"
                value="HumanResources"
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-department4">Human Resources</label>
            </span>
            <span className="wt-radio">
              <input
                id="wt-department5"
                type="radio"
                name="department"
                value="Other"
                onChange={this.onChangeInput}
              />
              <label htmlFor="wt-department5">Other</label>
            </span>
          </div>
          {nameContext}
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    let errorContext =
      this.state.formValid || this.state.begin ? (
        <div />
      ) : (
        <FormErrors Errors={this.state.formErrors} />
      );
    let countryList = this.CreateCountryList();
    let companyProps = this.CreateCompanyProps();
    //let companyProps = <div />;

    return (
      <form className="wt-formtheme wt-formregister">
        {errorContext}
        <fieldset className="wt-registerformgroup">
          <div className="form-group">
            <span className="wt-select">
              <select
                className="chosen-select locations"
                data-placeholder="Country"
                name="countryId"
                onChange={(e) => this.onChangeInput(e)}
                value={this.state.countryId}
              >
                {countryList}
              </select>
            </span>
          </div>
          <div className="form-group form-group-half">
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangeInput}
              placeholder="Password*"
            />
          </div>
          <div className="form-group form-group-half">
            <input
              type="password"
              name="retypedPassword"
              className="form-control"
              value={this.state.retypedPassword}
              onChange={this.onChangeInput}
              placeholder="Retype Password*"
            />
          </div>
        </fieldset>
        <fieldset className="wt-formregisterstart">
          <div className="wt-title wt-formtitle">
            <h4>Start as :</h4>
          </div>
          <ul className="wt-accordionhold wt-formaccordionhold accordion">
            <li>
              <div
                className="wt-accordiontitle"
                id="headingOne"
                data-toggle="collapse"
                data-target="#collapseOne"
              >
                <span className="wt-radio">
                  <input
                    id="wt-company"
                    type="radio"
                    name="typeOfUser"
                    value="company"
                    onChange={this.onChangeType}
                    defaultChecked
                  />
                  <label htmlFor="wt-company">
                    Company
                    <span>
                      (Signup as company/service seeker &amp; post jobs)
                    </span>
                  </label>
                </span>
              </div>
              {companyProps}
            </li>
            <li>
              <div className="wt-accordiontitle">
                <span className="wt-radio">
                  <input
                    id="wt-freelancer"
                    type="radio"
                    name="typeOfUser"
                    value="freelancer"
                    onChange={this.onChangeType}
                  />
                  <label htmlFor="wt-freelancer">
                    Freelancer
                    <span>(Signup as freelancer &amp; get hired)</span>
                  </label>
                </span>
              </div>
            </li>
          </ul>
        </fieldset>
        <fieldset className="wt-termsconditions">
          <div className="wt-checkboxholder">
            <span className="wt-checkbox">
              <input
                id="termsConditions"
                type="checkbox"
                name="termsConditions"
                //value={checked}
                onChange={this.onChangeCheck}
              />
              <label htmlFor="termsConditions">
                <span>
                  Consectetur adipisicing elit sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua enim ad minim veniam quis.
                </span>
              </label>
            </span>
            <span className="wt-checkbox">
              <input
                id="termsConditions2"
                type="checkbox"
                name="termsConditions2"
                //  value={!this.state.termsconditions2}
                onChange={this.onChangeCheck}
              />
              <label htmlFor="termsConditions2">
                <span>
                  Nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat duis aute irure dolor in reprehenderit in
                  voluptate velit esse
                  <Link to="/Terms">Terms &amp; Conditions</Link>
                </span>
              </label>
            </span>
            <div className="form-group">
              <button
                className="wt-btn"
                // type="submit"
                // disabled={!this.state.formValid}
                onClick={this.onSubmit}
              >
                Continue
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}
