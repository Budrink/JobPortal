import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { Field, reduxForm } from 'redux-form';
import { getHourRateList } from '../GetData/GetHourRateList';

// To include the default styles
import 'react-rangeslider/lib/index.css';

// Not using an ES6 transpiler

class HourRateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hourRateList: [],
      loading: true,
      SearchHourRate: '',
      // CheckedCategories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  fullhourRateList = [];
  handleChange(event) {
    // console.log(event.target.value);
    const target = event.target;
    if (target.name === 'SearchHourRate') {
      this.setState({ SearchHourRate: event.target.value });
    } else {
      this.props.handleRateChange(target);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // // if (this.state.SearchHourRate !== '') {
    let cats;
    if (this.fullhourRateList !== []) {
      cats = this.fullhourRateList.filter(
        (cat) => cat.hourRateName.search(this.state.SearchHourRate) !== -1,
      );
    } else cats = [];
    this.setState({ hourRateList: cats });
    // }
  }

  renderHourRate(data) {
    return (
      <span className="wt-checkbox">
        <Field
          name={data.hourRate.hourRateName}
          id={data.hourRate.hourRateId}
          type="checkbox"
          component="input"
          onClick={this.handleChange}
        />
        <label htmlFor={data.hourRate.hourRateId}>
          {data.hourRate.hourRateName}
        </label>
      </span>
    );
  }
  componentDidMount() {
    this.populateData();
  }
  renderTable(cats) {
    if (cats !== []) {
      return cats.map((hourRate) => (
        <div className="form-group" key={hourRate.hourRateId}>
          {this.renderHourRate({ hourRate })}
        </div>
      ));
    } else return <div> Loading 2</div>;
  }

  async populateData() {
    if (this.state.hourRateList.length === 0) {
      const data = await getHourRateList();
      this.setState({ hourRateList: data }, () => {
        this.setState({ loading: false }, () => {});
        this.fullhourRateList = this.state.hourRateList;
      });
    }
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.hourRateList)
    );

    // );
    return (
      <div ref={(el) => (this.instance = el)}>
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
        <form className="wt-formtheme wt-formsearch">
          <fieldset>
            <div className="form-group">
              <Field
                name="SearchHourRate"
                id="SearchHourRate"
                className="form-control"
                component="input"
                type="text"
                value={this.state.SearchHourRate}
                onChange={this.handleChange}
                placeholder="Search HourRate"
              />
              <button
                className="wt-searchgbtn"
                type="submit"
                onClick={this.handleSubmit}
              >
                <i className="lnr lnr-magnifier" />
              </button>
            </div>
          </fieldset>
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
HourRateForm = reduxForm({
  form: 'HourRateForm',
})(HourRateForm);

export default HourRateForm;
