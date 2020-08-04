import React, { PureComponent } from 'react';
import { LoginFetch, SendPassword } from '../PostData/Login';
import Modal from '../Functions/Modal';
export default class LoginForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      rememberMe: false,
      isLogin: false,
      // userId: undefined,
      // userType: undefined,
      errors: undefined,
      showError: false,
      email: '',
      message: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
  }

  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const userName = rememberMe ? localStorage.getItem('userName') : '';
    this.setState({ userName, rememberMe });
  }
  handleChange = (event) => {
    const input = event.target;
    //  console.log(event.target);
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({
      [input.name]: value,
    });
  };

  handleEmailSubmit = async (event) => {
    event.preventDefault();
    let result = await SendPassword();
    this.setState({ errors: [''] });
    this.setState({ message: result.messages });
    this.setState({ showError: true });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    localStorage.setItem('rememberMe', this.state.rememberMe);
    let result = await LoginFetch(
      this.state.userName,
      this.state.password,
      this.state.rememberMe,
    );
    console.log(result);
    if (result.isLogin === true) {
      this.props.LoginSuccessfull();
    } else {
      this.setState({ isLogin: false });
      this.setState({ errors: result.errors });
      this.setState({ message: 'Login unsuccessful' });
      this.setState({ showError: true });
      if (this.state.errors.length === 0) this.state.errors = [''];
    }
  };
  closeWindowPortal() {
    this.setState({ showError: false });
  }
  createErrorWindow() {
    if (this.state.showError === true) {
      // console.log(this.state);
      return (
        <Modal isOpen={true}>
          <h3>{this.state.message}</h3>
          <p>{this.state.errors[0]}</p>
          <button onClick={() => this.closeWindowPortal()}>Close</button>
        </Modal>
      );
    } else return null;
  }
  render(errorWindow = this.createErrorWindow()) {
    return (
      <div className="wt-loginformhold">
        {errorWindow}
        <div>
          <div className="wt-loginheader">
            <span>Login</span>
            <a>
              <i className="fa fa-times"></i>
            </a>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className="wt-formtheme wt-loginform do-login-form"
          >
            <fieldset>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="userName"
                  className="form-control"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="wt-logininfo">
                <button type="submit" className="wt-btn do-login-button">
                  Login
                </button>
                <span className="wt-checkbox">
                  <input
                    id="wt-login"
                    type="checkbox"
                    name="rememberMe"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="wt-login">Keep me logged in</label>
                </span>
              </div>
            </fieldset>
            <div className="wt-loginfooterinfo">
              <a className="wt-forgot-password">Forgot password?</a>
              <a href="/Register">Create account</a>
            </div>
          </form>
          <form className="wt-formtheme wt-loginform do-forgot-password-form wt-hide-form">
            <fieldset>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control get_password"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="wt-logininfo">
                <button
                  className="wt-btn do-get-password"
                  onClick={this.handleEmailSubmit}
                >
                  Get Pasword
                </button>
              </div>
            </fieldset>
            <div className="wt-loginfooterinfo">
              <a href="#" className="wt-show-login">
                Login
              </a>
              <a href="/Register">Create account</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
