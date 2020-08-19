import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { Field, reduxForm } from 'redux-form';
import { getDurationList } from '../GetData/GetDurationList';

class DurationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      durationsList: [],
      loading: true,
      SearchDuration: '',
      // CheckedCategories: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }
  fullDurationsList = [];

  handleChange(event) {
    const target = event.target;
    if (target.name === 'SearchDuration') {
      this.setState({ SearchDuration: event.target.value });
    } else {
      // const value = target.checked;
      // const name = target.name;
      // this.setState({ [name]: value });
      this.props.handleDurationChange(target);
    }
  }

  renderDuration(data) {
    return (
      <span className="wt-checkbox">
        <Field
          name={data.duration.durationText}
          id={data.duration.durationId}
          type="checkbox"
          component="input"
          onClick={this.handleChange}
        />
        <label htmlFor={data.duration.durationId}>
          {data.duration.durationText}
        </label>
      </span>
    );
  }
  componentDidMount() {
    this.populateData();
  }

  renderTable(cats) {
    if (cats !== []) {
      return cats.map((duration) => (
        <div className="form-group" key={duration.durationId}>
          {this.renderDuration({ duration })}
        </div>
      ));
    } else return <div> Loading 2</div>;
  }

  async populateData() {
    if (this.state.loading === true) {
      const data = await getDurationList();
      await this.setState({ durationsList: data });
      this.setState({ loading: false }, () => {});
    }
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.durationsList)
    );

    // );
    return (
      <div ref={(el) => (this.instance = el)}>
        <form
          className="wt-formtheme wt-formsearch"
          // onSubmit={this.state.handleSubmit}
          // onSubmit={this.handleSubmit}
        >
          <fieldset>
            <div className="wt-checkboxholder wt-verticalscrollbar">
              <div className="form-group">{contents}</div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
DurationForm = reduxForm({
  form: 'DurationForm',
})(DurationForm);

export default DurationForm;
