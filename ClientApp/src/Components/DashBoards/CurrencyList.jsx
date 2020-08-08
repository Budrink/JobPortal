import React, { Component } from 'react';

import { GetCurrencyList } from '../GetDataNew/GetCurrencyList';

class CurrencyList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, currencysList: [] };

    this.handleChange = this.handleChange.bind(this);
  }
  defaultValue = '0';
  handleChange(event) {
    this.props.handleChange(event);
    this.defaultValue = event.target.value;
  }

  renderCurrency(data) {
    return (
      <option value={data.currency.currencyId} key={data.currency.currencyId}>
        {data.currency.currencyName}
      </option>
    );
  }

  componentDidMount() {
    this.populateData();
  }
  renderTable(cats) {
    if (cats !== []) {
      return cats.map((currency) => this.renderCurrency({ currency }));
    } else return <div> Loading...</div>;
  }

  async populateData() {
    if (this.props.initialValue !== undefined) {
      this.defaultValue = this.props.initialValue.currencyId;
    } else {
      this.defaultValue = '0';
    }
    const data = await GetCurrencyList();
    if (data !== undefined) {
      this.setState({ currencysList: data });
      this.setState({ loading: false }, () => {});
    }
  }

  render() {
    let contents = this.state.loading
      ? null
      : this.renderTable(this.state.currencysList);
    return (
      <div className="form-group form-group-half">
        <span className="wt-select">
          <select
            name="currency"
            onChange={this.handleChange}
            value={this.defaultValue}
          >
            <option disabled value="0">
              Select System Currency
            </option>
            {contents}
          </select>
        </span>
      </div>
    );
  }
}
export default CurrencyList;
