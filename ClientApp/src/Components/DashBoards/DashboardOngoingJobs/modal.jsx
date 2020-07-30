/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
// import { Link } from 'react-router-dom';
import '../../../css/bootstrap.min.css';
import '../../../css/normalize.css';
import '../../../css/scrollbar.css';
import '../../../css/fontawesome/fontawesome-all.css';
import '../../../css/themify-icons.css';
import '../../../css/font-awesome.min.css';
import '../../../css/owl.carousel.min.css';
import '../../../css/jquery-ui.css';
import '../../../css/linearicons.css';
import '../../../css/tipso.css';
import '../../../css/chosen.css';
import '../../../css/prettyPhoto.css';
import '../../../css/main.css';
import '../../../css/dashboard.css';
import '../../../css/color.css';
import '../../../css/transitions.css';
import '../../../css/responsive.css';
import '../../../css/dbresponsive.css';
import { PostFeedback } from '../../PostData/PostFeedback';
class Modal extends React.Component {
  constructor(props) {
    super(props);
    // Фильтр - это массив, в котором собраны все фильтры

    //  {projectList} = this.props
    this.state = {
      rating: 5,
      text: '',
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRatingChange(event) {
    const value = event.target.value;
    console.log(value);
    this.setState({ rating: value });
  }

  handleTextChange(event) {
    const value = event.target.value;
    console.log(value);
    this.setState({ text: value });
  }
  handleSubmit(event) {
    event.preventDefault();

    PostFeedback(this.props.Id, this.state.text, this.state.rating);
  }

  render() {
    console.log(1);
    return (
      <div
        className="wt-uploadimages modal fade"
        id="wt-projectmodalbox"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="wt-modaldialog modal-dialog" role="document">
          <div className="wt-modalcontent modal-content">
            <div className="wt-boxtitle">
              <h2>
                Project Status
                <i
                  className=" wt-btncancel fa fa-times"
                  data-dismiss="modal"
                  aria-label="Close"
                ></i>
              </h2>
            </div>
            <div className="wt-modalbody modal-body">
              <form className="wt-formtheme wt-formfeedback">
                <fieldset>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Add Your Feedback*"
                      onChange={this.handleTextChange}
                    ></textarea>
                  </div>
                  <div className="form-group wt-ratingholder">
                    <div className="wt-ratepoints">
                      <div className="counter wt-pointscounter">
                        {this.state.rating}
                      </div>
                      {/* <div id="wt-jrate" className="wt-jrate"></div> */}
                    </div>
                    <div>
                      <div className="rating-area">
                        <input
                          type="radio"
                          id="star-5"
                          name="rating"
                          value="5"
                          onChange={this.handleRatingChange}
                        />
                        <label htmlFor="star-5" title="Rating «5»"></label>
                        <input
                          type="radio"
                          id="star-4"
                          name="rating"
                          value="4"
                          onChange={this.handleRatingChange}
                        />
                        <label htmlFor="star-4" title="Rating «4»"></label>
                        <input
                          type="radio"
                          id="star-3"
                          name="rating"
                          value="3"
                          onChange={this.handleRatingChange}
                        />
                        <label htmlFor="star-3" title="Rating «3»"></label>
                        <input
                          type="radio"
                          id="star-2"
                          name="rating"
                          value="2"
                          onChange={this.handleRatingChange}
                        />
                        <label htmlFor="star-2" title="Rating «2»"></label>
                        <input
                          type="radio"
                          id="star-1"
                          name="rating"
                          value="1"
                          onChange={this.handleRatingChange}
                        />
                        <label htmlFor="star-1" title="Rating «1»"></label>
                      </div>
                      <span className="wt-ratingdescription">
                        {this.props.ratingText}
                      </span>
                    </div>
                  </div>

                  <div className="form-group wt-btnarea">
                    <button
                      className="wt-btn"
                      onClick={(e) => this.handleSubmit(e)}
                    >
                      {this.props.submitButtontext}
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
