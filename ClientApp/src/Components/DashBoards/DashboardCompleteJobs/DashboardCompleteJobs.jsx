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
import { amountOfProjectItemsInList } from '../../Data/GlobalValues';
import Header1 from '../../Header/Header1';
import { loadScripts } from '../../Functions/LoadScripts';
import JobList from '../JobList';
import { GetCompletedJobsList } from '../../GetData/GetCompletedJobsList.tsx';
import Paging from '../../Forms/Paging';
import LeftMenu from '../../Header/LeftMenu';
import RightPanel from '../RightPanel';

class DashboardCompleteJobs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      projectList: [],
      amountOfItemsOnPage: amountOfProjectItemsInList,
      pageNumber: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);

    //  const { companyiD } = this.props;
  }
  companyId = this.props.match.params.userId;
  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData();
  }

  populateData = async () => {
    // if (this.state.freelancerList.length === 0) {

    const data = await GetCompletedJobsList(
      this.companyId,
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
    );
    console.log(data);
    this.setState({ projectList: data }, () => {
      this.setState({ loading: false }, () => {});
      loadScripts(this.instance, false);
    });
    console.log(this.state.projectList);
  };
  async componentDidMount() {
    await this.populateData();
  }

  pagingCreate() {
    if (this.state.projectList.projectList !== undefined) {
      return (
        <Paging
          linkName="DashboardCompletedJobs"
          totalAmountOfItems={
            this.state.projectList.projectList.amountCompletedProjects
          }
          amountOfItemsOnPage={this.state.amountOfItemsOnPage}
          pageNumber={this.state.pageNumber}
          onClick={this.handlePageChange}
        />
      );
    } else return null;
  }

  render() {
    let paging = this.pagingCreate();
    let context = !this.state.loading ? (
      <div className="wt-login">
        <title>Completed Jobs</title>

        <div className="wt-wrapper wt-haslayout" id="wt-wrapper">
          {/* Content Wrapper Start */}
          <div className="wt-contentwrapper">
            {/* Header Start */}
            <Header1 />
            <main id="wt-main" className="wt-main wt-haslayout">
              <LeftMenu />
              {/*Register Form Start*/}

              <section className="wt-haslayout wt-dbsectionspace">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                    <div className="wt-dashboardbox">
                      <div className="wt-dashboardboxtitle">
                        <h2>All Jobs</h2>
                      </div>
                      <div className="wt-dashboardboxcontent wt-canceljobholder">
                        <div className="wt-tabscontenttitle">
                          <h2>Completed Jobs</h2>
                        </div>
                        <JobList
                          projectList={this.state.projectList}
                          loading={this.state.loading}
                          populateData={this.populateData}
                          type="complete"
                        />
                      </div>
                      <nav className="wt-pagination">{paging}</nav>
                    </div>
                  </div>
                  <RightPanel
                    amountOngoingProjects={
                      this.state.projectList.amountOngoingProjects
                    }
                    amountCompletedProjects={
                      this.state.projectList.amountCompletedProjects
                    }
                    amountCancelledProjects={
                      this.state.projectList.amountCancelledProjects
                    }
                  />
                </div>
              </section>

              {/*Register Form End*/}

              {/*Main End*/}
            </main>
          </div>
          {/*Content Wrapper End*/}
        </div>
        {/*Wrapper End*/}
      </div>
    ) : (
      <div>Loading ...</div>
    );
    return <div ref={(el) => (this.instance = el)}>{context}</div>;
  }
}

export default DashboardCompleteJobs;
