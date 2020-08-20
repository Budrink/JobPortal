import React, { Component } from 'react';
import Modal from '../../Functions/Modal';
import { PostDeleteAccount } from '../../PostDataNew/DeleteAccount';
class DeleteAccountForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      unsubscribeMessage: {
        password: '',
        password2: '',
        message: '',
        reason: '',
        termsconditions: true,
        termsconditions1: true,
      },
      errorMessage: '',
      showError: false,
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  closeWindowPortal() {
    this.setState({ showError: false });
  }
  handleChange = (event) => {
    const input = event.target;
    this.setState({ errorMessage: '' });
    this.setState({ showMessage: false });
    // console.log(input);
    const value = input.type === 'checkbox' ? input.checked : input.value;
    const name = input.name;
    this.setState((prevState) => ({
      ...prevState,
      unsubscribeMessage: {
        ...prevState.unsubscribeMessage,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    if (
      this.state.unsubscribeMessage.password !==
      this.state.unsubscribeMessage.password2
    ) {
      this.setState({ errorMessage: "Passwords don't match" }, () =>
        this.setState({ showError: true }),
      );
      console.log(this.state.errorMessage);
      console.log(this.state.showError);
      return;
    }

    PostDeleteAccount(this.state.unsubscribeMessage);
    // let iD = this.props.iD;
  };
  createErrorWindow() {
    if (this.state.showError === true) {
      // console.log(this.state);
      return (
        <Modal isOpen={true}>
          <h3>{this.state.errorMessage}</h3>
          <button onClick={() => this.closeWindowPortal()}>Close</button>
        </Modal>
      );
    } else return null;
  }
  render(ErrorWindow = this.createErrorWindow()) {
    return (
      <form className="wt-formtheme wt-userform">
        {ErrorWindow}
        <fieldset>
          <div className="form-group form-group-half">
            <input
              onChange={this.handleChange}
              name="password"
              className="form-control"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group form-group-half">
            <input
              onChange={this.handleChange}
              name="password2"
              className="form-control"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group">
            <span className="wt-select">
              <select name="reason" onChange={this.handleChange}>
                <option disabled value>
                  Select Reason to Leave
                </option>
                <option value="reason1">Reason</option>
                <option value="reason2">Reason</option>
              </select>
            </span>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              onChange={this.handleChange}
              className="form-control"
              placeholder="Description (Optional)"
              defaultValue={''}
            />
          </div>
          <div className="form-group form-group-half float-right">
            <span className="wt-checkbox">
              <input
                onChange={this.handleChange}
                name="termsconditions"
                id="termsconditions1"
                type="checkbox"
                defaultValue="termsconditions"
              />
              <label htmlFor="termsconditions1">
                <span>Unsubscribe me from all newsletter list</span>
              </label>
            </span>
          </div>
          <div
            className="form-group form-group-half wt-btnarea"
            onClick={this.handleSubmit}
          >
            <button className="wt-btn">Delete Account</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default DeleteAccountForm;
