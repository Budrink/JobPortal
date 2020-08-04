/** @jsx jsx */ import { jsx } from '@emotion/core';
import React from 'react';
//import { reduxForm } from 'redux-form';
import '../../css/bootstrap.min.css';
import '../../css/normalize.css';
import '../../css/scrollbar.css';
import '../../css/fontawesome/fontawesome-all.css';
import '../../css/font-awesome.min.css';
import '../../css/owl.carousel.min.css';
import '../../css/font-awesome.min.css';
import '../../css/linearicons.css';
import '../../css/jquery-ui.css';
import '../../css/tipso.css';
import '../../css/chosen.css';
import '../../css/prettyPhoto.css';
import '../../css/main.css';
import '../../css/color.css';
import '../../css/transitions.css';
import '../../css/responsive.css';
import { FirstRegister } from '../PostData/Register_old';
import { FormErrors } from './FormErrors';

// import { timingSafeEqual } from 'crypto';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: 'male',
      firstName: '',
      lastName: '',
      email: '',
      formErrors: {
        email: 'Input email',
        firstName: 'Input first name',
        lastName: 'input last name',
      },
      emailValid: false,
      firstNameValid: false,
      lasNameValid: false,
      formValid: false,
      begin: true,
      formVaidatedByServer: false,
    };

    // this.onChangeLastName = this.onChangeLastName.bind(this);
    // this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  // static propTypes = {
  //   history: PropTypes.object.isRequired,
  // };
  async onSubmit(event) {
    event.preventDefault();
    this.setState({ begin: false });

    if (this.state.formValid === true) {
      let response = await FirstRegister({
        gender: this.state.gender,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
      });
      console.log(response);
      if (response === false) {
        // alert('norm');
        // console.log(this.props.location);
        // console.log(this.props.browserHistory);
        // console.log(JSON.stringify(this.props));
        // this.props.history.push('/home');
        //  this.context.browserRouter.history.push('/genre/');
        // this.setState({ formVaidatedByServer: true });
        localStorage.setItem('firstName', this.state.firstName);
        localStorage.setItem('lastName', this.state.lastName);
        localStorage.setItem('email', this.state.email);
        localStorage.setItem('gender', this.state.gender);
        this.props.onRegister();
      } else {
        this.setState({ formValid: false });
        this.setState({ formErrors: { email: ' This email already used ' } });
      }
    }
  }

  // onChangeFirstName(event) {
  //   this.setState({ firstName: event.target.value });
  // }
  onChangeSelect(event) {
    this.setState({ gender: event.target.value });
  }

  onChangeInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    // this.setState({ [name]: value });
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    switch (fieldName) {
      case 'email':
        emailValid =
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null
            ? false
            : true;
        fieldValidationErrors.email = emailValid ? '' : 'email is invalid';
        break;
      // case 'password':
      //   passwordValid = value.length >= 6;
      //   fieldValidationErrors.password = passwordValid ? '' : ' is too short';
      //   break;
      case 'firstName':
        firstNameValid = value.length > 0;
        fieldValidationErrors.firstName = firstNameValid
          ? ''
          : ' Input first name  ';
        break;
      case 'lastName':
        lastNameValid = value.length > 0;
        fieldValidationErrors.lastName = lastNameValid
          ? ''
          : ' Input last name  ';
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        passwordValid: passwordValid,
      },
      this.validateForm,
    );
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.firstNameValid &&
        this.state.lastNameValid,
    });
  }
  render() {
    // if (this.state.formVaidatedByServer)
    //   return (
    //     // <Router>
    //     // <Redirect to="/Home" />
    //     // </Router>
    //   );
    let errorContext =
      this.state.formValid || this.state.begin ? (
        <div />
      ) : (
        <FormErrors Errors={this.state.formErrors} />
      );

    return (
      <form className="wt-formtheme wt-formregister">
        {errorContext}
        <fieldset className="wt-registerformgroup">
          <div className="form-group wt-form-group-dropdown form-group-half">
            <span className="wt-select">
              <select onChange={this.onChangeSelect}>
                <option value="male">mr.</option>
                <option value="female">mrs</option>
              </select>
            </span>
            <input
              name="firstName"
              className="form-control"
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group form-group-half">
            <input
              name="lastName"
              className="form-control"
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group">
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group">
            <button
              className="wt-btn"
              // type="submit"
              // disabled={!this.state.formValid}
              onClick={this.onSubmit}
            >
              Start Now
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}
// RegisterForm.contextTypes = {
//   browserRouter: PropTypes.object.isRequired,
// };

// RegisterForm = reduxForm({
//   form: 'RegisterForm',
// })(RegisterForm);
