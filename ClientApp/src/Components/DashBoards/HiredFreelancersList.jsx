import React, { Component } from 'react';
import { GetFreelancersbyIds } from '../GetData/GetFreelancersbyIds';
class HiredFreelancersList extends Component {
  constructor(props) {
    super(props);
    // Фильтр - это массив, в котором собраны все фильтры

    //  {projectList} = this.props
    this.state = {
      freelancerList: [],
      loading: true,
    };
  }

  async populateData(iDs) {
    let data = await GetFreelancersbyIds(iDs);
    this.setState({ freelancerList: data }, () => {
      this.setState({ loading: false });
    });
  }

  componentDidMount() {
    this.populateData(this.props.hiredFreelancers);
  }

  renderTable(freelancers) {
    if (freelancers !== []) {
      const cont = freelancers.map((fr) => (
        <div key={fr.userId}>
          <span>{fr.userName}</span>
          <ul className="wt-hireduserimgs">
            <li>
              <figure>
                <img src={fr.userPhoto} alt="" className="mCS_img_loaded" />
              </figure>
            </li>
          </ul>
        </div>
      ));
      return (
        <div>
          <h4>Hired</h4>
          {cont}
        </div>
      );
    } else return <div> Loading </div>;
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.freelancerList.freelancers)
    );

    // );
    return <div className="wt-hireduserstatus"> {contents} </div>;
  }
}
export default HiredFreelancersList;
