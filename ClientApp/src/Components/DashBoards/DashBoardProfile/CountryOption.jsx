import React, { Component } from 'react';
import { GetCountryList } from '../../GetDataNew/GetCountryList';

class CountryOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryList: [],
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.props.handleChange(event);
  };
  componentDidMount() {
    this.populateData();
  }
  renderTable(countries) {
    if (countries !== []) {
      return countries.map((country) => (
        <option value={country.countryId} key={country.countryId}>
          {country.countryName}
        </option>
      ));
    } else return <div> Loading ...</div>;
  }

  async populateData() {
    if (this.state.countryList.length === 0) {
      const data = await GetCountryList();
      this.setState({ countryList: data }, () => {
        this.setState({ loading: false }, () => {});
      });
    }
  }

  render() {
    let table = this.renderTable(this.state.countryList);
    let contents = this.state.loading ? (
      <em>Loading...</em>
    ) : (
      <select
        defaultValue={this.props.country}
        onChange={this.handleChange}
        name="country"
      >
        {table}
      </select>
    );

    // );
    return (
      <div className="form-group form-group-half">
        <span></span>
        {contents}
      </div>
    );
  }
}

export default CountryOption;
