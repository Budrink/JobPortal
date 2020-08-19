/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
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
import '../../../css/rating.css';
import { amountOfProjectItemsInList } from '../../Data/GlobalValues';
import Header1 from '../../Header/Header1';
import { loadScripts2 } from '../../Functions/LoadScripts';
import HiredFreelancersList from './HiredFreelancers';
import { GetContractsByJobId } from '../../GetData/GetContractsByJobId';
// import Paging from '../../Forms/Paging';
import LeftMenu from '../../Header/LeftMenu';

class DashboardOngoingJobSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      contractList: [],
      amountOfItemsOnPage: amountOfProjectItemsInList,
      pageNumber: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);

    //  const { companyiD } = this.props;
  }
  jobiD = this.props.match.params.jobId;

  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData();
  }

  populateData = async () => {
    const data = await GetContractsByJobId(this.jobiD);
    this.setState({ contractList: data }, () => {
      this.setState({ loading: false }, () => {});
      loadScripts2(this.instance, false);
    });
    // console.log(data);
    // console.log(this.state.projectList);
  };

  componentDidMount() {
    this.populateData();
  }

  // pagingCreate() {
  //   if (this.state.projectList.projectList !== undefined) {
  //     return (
  //       // <Paging
  //       //   linkName="DashboardOngoingJobSingle"
  //       //   totalAmountOfItems={
  //       //     this.state.projectList.projectList.amountOngoingProjects
  //       //   }
  //       //   amountOfItemsOnPage={this.state.amountOfItemsOnPage}
  //       //   pageNumber={this.state.pageNumber}
  //       //   onClick={this.handlePageChange}
  //       // />
  //     );
  //   } else return null;
  // }

  render() {
    let content = this.state.loading ? null : (
      <div>
        <title>Ongoing Jobs</title>
        <div className="wt-wrapper wt-haslayout" id="wt-wrapper">
          {/* Content Wrapper Start */}
          <div className="wt-contentwrapper">
            {/* Header Start */}
            <Header1 />
            <main id="wt-main" className="wt-main wt-haslayout">
              <LeftMenu />
              <section className="wt-haslayout wt-dbsectionspace">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-9">
                    <div className="wt-dashboardbox">
                      <div className="wt-dashboardboxtitle">
                        <h2>Job Details</h2>
                      </div>
                      <HiredFreelancersList
                        ref={(el) => (this.instance = el)}
                        contractList={this.state.contractList}
                      />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3"></div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    );
    return <div ref={(el) => (this.instance = el)}>{content}</div>;
  }
}

export default DashboardOngoingJobSingle;
