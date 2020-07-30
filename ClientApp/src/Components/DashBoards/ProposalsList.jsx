import React, { Component } from 'react';
import { GetProposalList } from '../GetData/GetProposalList';
import { Link } from 'react-router-dom';
class ProposalsList extends Component {
  constructor(props) {
    super(props);
    // Фильтр - это массив, в котором собраны все фильтры

    //  {projectList} = this.props
    this.state = {
      proposalList: [],
      loading: true,
    };
  }

  async populateData(iD) {
    let data = await GetProposalList(iD);
    this.setState({ proposalList: data }, () => {
      this.setState({ loading: false });
    });
  }

  componentDidMount() {
    this.populateData(this.props.jobId);
  }

  renderTable(proposals) {
    // <div class="wt-hireduserstatus">
    // 													<h4>04</h4><span>Proposals</span>
    // 													<ul class="wt-hireduserimgs">
    // 														<li><figure><img src="images/user/userlisting/img-05.jpg" alt="img description"></figure></li>
    // 														<li><figure><img src="images/user/userlisting/img-01.jpg" alt="img description"></figure></li>
    // 														<li><figure><img src="images/user/userlisting/img-02.jpg" alt="img description"></figure></li>
    // 														<li><figure><img src="images/user/userlisting/img-03.jpg" alt="img description"></figure></li>
    // 													</ul>
    // 												</div>
    if (proposals !== []) {
      const cont = proposals.proposalList.map((fr) => (
        <li key={fr.userId}>
          <figure>
            <img src={fr.userPhoto} alt="" />
          </figure>
        </li>
      ));
      return (
        <div>
          <h4>04</h4>
          <span>
            <Link to={`/DashboardProposals/:${this.props.jobId}`}>
              Proposals
            </Link>
          </span>
          <ul className="wt-hireduserimgs">{cont}</ul>
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
      this.renderTable(this.state.proposalList)
    );

    // );
    return <div className="wt-hireduserstatus"> {contents} </div>;
  }
}
export default ProposalsList;
