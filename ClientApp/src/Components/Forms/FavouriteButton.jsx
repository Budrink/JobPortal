import React, { Component } from 'react';
import { SaveFreelancer, SaveJob, SaveCompany } from '../PostDataNew/SaveItem';
class FavouriteButton extends Component {
  constructor(props) {
    //: saved - noolean, type of Item - freelancer, company or job
    super(props);

    this.state = {
      className: '', //for followed items
      disabled: 'false',
      text: 'Click to save',
      saved: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  classNameNewitem = 'far fa-heart';
  classNameFollowedItem = 'fa fa-heart';
  async handleSubmit(event) {
    event.preventDefault();
    const newText = this.state.text === 'following' ? 'save' : 'following';
    switch (this.props.itemType) {
      case 'freelancer':
        if (
          (await SaveFreelancer(
            this.props.senderId,
            this.props.itemIdm,
            !this.state.saved,
          )) === true
        ) {
          this.setState({ saved: !this.state.saved });
          this.setState({ text: newText });
        }
        break;
      case 'job':
        if (
          (await SaveJob(
            this.props.senderId,
            this.props.itemId,
            !this.state.saved,
          )) === true
        ) {
          this.setState({ saved: !this.state.saved });
          this.setState({ text: newText });
        }
        break;
      case 'company':
        if (
          (await SaveCompany(
            this.props.senderId,
            this.props.itemId,
            !this.state.saved,
          )) === true
        ) {
          this.setState({ saved: !this.state.saved });
          this.setState({ text: newText });
        }
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    if (this.props.saved !== undefined) {
      if (this.props.saved) {
        this.setState({ saved: true });
        this.setState({ text: 'following' });
      } else {
        this.setState({ saved: false });
        this.setState({ text: 'save' });
      }
    } else {
      this.setState({ saved: false });
      this.setState({ text: 'save' });
    }
  }

  render() {
    // console.log(this.state.className);
    if (this.state.saved === false)
      return (
        // <div className="wt-clicksavearea">
        <button className="wt-clicksavingbtn" onClick={this.handleSubmit}>
          <i className={this.classNameNewitem} style={{ color: 'red' }} />{' '}
          {this.state.text}
        </button>
        // </div>
      );
    else
      return (
        // <div className="wt-clicksavearea">
        <button
          className="wt-clicksavingbtn"
          // disabled
          onClick={this.handleSubmit}
        >
          <i className={this.classNameFollowedItem} style={{ color: 'red' }} />{' '}
          {this.state.text}
        </button>
        // </div>
      );
  }
}
export default FavouriteButton;
