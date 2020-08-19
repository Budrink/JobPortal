import React from 'react';
import { Link } from 'react-router-dom';
import { amountOfFreelancersItemsInList } from '../../Data/GlobalValues';
import Paging from '../../Forms/Paging';
// import { GetSavedFreelancers } from '../../GetData/GetSavedFreelancers';
import { GetSavedFreelancers } from '../../GetData/GetSavedFreelancers';
// import { GetSavedProjectList } from '../../GetData/GetSavedProjectList';
import FavouriteButton from '../../Forms/FavouriteButton';

class SavedFreelancerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      freelancerList: [],
      amountOfItemsOnPage: amountOfFreelancersItemsInList,
      pageNumber: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);

    //  const { freelanceriD } = this.props;
  }

  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData();
  }

  populateData = async () => {
    const data = await GetSavedFreelancers(
      localStorage.getItem('userId'),
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
    );
    this.setState({ freelancerList: data }, () => {
      this.setState({ loading: false }, () => {});
    });
  };
  componentDidMount() {
    this.populateData();
  }
  pagingCreate(pageName) {
    if (this.state.freelancerList.freelancers !== undefined) {
      return (
        <Paging
          linkName="SavedFreelancerList"
          totalAmountOfItems={this.state.freelancerList.totalCount}
          amountOfItemsOnPage={this.state.amountOfItemsOnPage}
          pageNumber={this.state.pageNumber}
          onClick={this.handlePageChange}
        />
      );
    } else return null;
  }

  CreateFeaturedContent(featured) {
    return featured ? (
      <span className="wt-featuredtag">
        <img
          className="template-content tipso_style"
          alt="featured member"
          src="/images/featured.png"
          data-tipso="Plus Member"
        />
      </span>
    ) : null;
  }

  CreateFreelancer(freelancer) {
    let style = ['', '', '', '', ''];
    if (freelancer.userRates !== undefined) {
      for (let i = 0; i < Math.round(Number(freelancer.userRates)); i++) {
        style[i] = 'active';
      }
    }
    return (
      <div className="wt-userlistinghold wt-featured" key={freelancer.userId}>
        {this.CreateFeaturedContent(freelancer.plusMember)}
        <figure className="wt-userlistingimg">
          <img src={freelancer.userPhoto} alt="freelancer" />
        </figure>
        <div className="wt-userlistingcontent">
          <div className="wt-contenthead">
            <div className="wt-title">
              <Link to={`/UserSingle/:${freelancer.userId}`}>
                <i className="fa fa-check-circle"></i>
                {freelancer.firstName} + + {freelancer.lastName}
              </Link>
              <h2>{freelancer.title}</h2>
            </div>
            <ul className="wt-userlisting-breadcrumb">
              <li>
                <span>
                  <i className="far fa-money-bill-alt"></i>${' '}
                  {freelancer.hourRates} / hr
                </span>
              </li>
              <li>
                <span>
                  <img
                    src={freelancer.country.countryFlag}
                    alt="freelacner img"
                  />
                  {freelancer.country.countryName}
                </span>
              </li>
              <li>
                <FavouriteButton
                  saved={freelancer.saved}
                  itemType="freelancer"
                />
              </li>
            </ul>
          </div>
          <div className="wt-rightarea">
            <div className="rating-mini">
              <span className={style[0]}></span>
              <span className={style[1]}></span>
              <span className={style[2]}></span>
              <span className={style[3]}></span>
              <span className={style[4]}></span>
            </div>
            <span className="wt-starcontent">
              {freelancer.userRates}/<sub>5</sub>{' '}
              <em>({freelancer.feedbacksCount} Feedback)</em>
            </span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let paging = this.state.loading ? null : this.pagingCreate();
    let content = this.state.loading ? (
      <div>Loading....</div>
    ) : (
      <div className="wt-addprojectsholder wt-likefreelan">
        <div className="wt-tabscontenttitle">
          <h2>Liked Freelancers</h2>
        </div>
        {this.state.freelancerList.freelancers.map((freelancer) =>
          this.CreateFreelancer(freelancer),
        )}
      </div>
    );
    return (
      <div>
        {content} {paging}
      </div>
    );
  }
}

export default SavedFreelancerList;
