import React, { Component } from 'react';

import { GetLanguageList } from '../GetDataNew/GetLanguageList';

class LanguageList extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, languagesList: [] };

    this.handleChange = this.handleChange.bind(this);
  }
  defaultValue = '0';
  handleChange(event) {
    this.props.handleChange(event);
    this.defaultValue = event.target.value;
  }

  renderLanguage(data) {
    return (
      <option value={data.language.languageId} key={data.language.languageId}>
        {data.language.languageName}
      </option>
    );
  }

  componentDidMount() {
    this.populateData();
  }
  renderTable(cats) {
    if (cats !== []) {
      return cats.map((language) => this.renderLanguage({ language }));
    } else return <div> Loading...</div>;
  }

  async populateData() {
    if (this.props.initialValue !== undefined) {
      this.defaultValue = this.props.initialValue.languageId;
    } else {
      this.defaultValue = '0';
    }
    const data = await GetLanguageList();
    if (data !== undefined) {
      this.setState({ languagesList: data });
      this.setState({ loading: false }, () => {});
    }
    console.log(data);
  }

  render() {
    let contents = this.state.loading
      ? null
      : this.renderTable(this.state.languagesList);

    // console.log(this.props.initialValue.languageId);
    return (
      <div className="form-group form-group-half">
        <span className="wt-select">
          <select
            name="language"
            onChange={this.handleChange}
            value={this.defaultValue}
          >
            <option disabled value="0">
              Select System Language
            </option>
            {contents}
          </select>
        </span>
      </div>
    );
  }
}
export default LanguageList;
