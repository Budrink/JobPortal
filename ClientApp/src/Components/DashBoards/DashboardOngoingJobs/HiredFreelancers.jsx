import React, { Component } from 'react';
import HiredFreelancer from './HiredFreelancer';
class HiredFreelancersList extends Component {
  renderTable(frs) {
    if (frs !== []) {
      return frs.map(
        (contract) => (
          // <div className="form-group" key={contract.feelancerId} >

          <HiredFreelancer contract={contract} key={contract.contractId} />
        ),
        // </div>
      );
    } else return <div> Loading </div>;
  }

  render() {
    let contractList = this.props.contractList;

    let contents = this.props.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(contractList)
    );

    // );
    return (
      <div className="wt-managejobcontent wt-verticalscrollbar">{contents}</div>
    );
  }
}
export default HiredFreelancersList;
