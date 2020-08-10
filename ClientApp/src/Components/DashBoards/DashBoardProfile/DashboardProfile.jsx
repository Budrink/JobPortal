/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/bootstrap.min.css';
import '../../../css/normalize.css';
import '../../../css/scrollbar.css';
import '../../../css/fontawesome/fontawesome-all.css';
import '../../../css/font-awesome.min.css';
import '../../../css/owl.carousel.min.css';
import '../../../css/linearicons.css';
import '../../../css/jquery-ui.css';
import '../../../css/tipso.css';
import '../../../css/chosen.css';
import '../../../css/prettyPhoto.css';
import '../../../css/main.css';
import '../../../css/color.css';
import '../../../css/transitions.css';
import '../../../css/responsive.css';
import '../../../css/display.css';
import loadScripts1 from '../../Functions/LoadScripts';
import Header1 from '../../Header/Header1';
import { GetFreelancer } from '../../GetDataNew/GetFreelancer';
import ExperienceList from './ExperienceList';
import EducationList from './EducationList';
import CountryOption from './CountryOption';
import NumberOfEmployersOption from './NumberOfEmployersOption';
import DepartmentOption from './DepartmentOption';
import SkillForm from './SkillForm';
import AwardList from './AwardList';
import ProjectList from './ProjectList';
import SidePanel from '../SidePanel';
import { PhotoUpload } from './PhotoUpload';
import { ProjectDefaultImgPath } from '../../Data/GlobalValues';
import { PostFreelancerData } from '../../PostData/PostFreelancerData';

class DashboardProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      freelancer: undefined,
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleExperienceChange = this.handleExperienceChange.bind(this);
    // this.handleSkillsChange = this.handleSkillsChange.bind(this);
    // this.handleEducationChange = this.handleEducationChange.bind(this);
    // this.handleAwardChange = this.handleAwardChange.bind(this);
    // this.handleProjectChange = this.handleProjectChange.bind(this);
  }

  iD = this.props.match.params.userId;
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    const name = input.name;
    console.log(input);
    console.log(name);
    console.log(value);
    this.setState((prevState) => ({
      ...prevState,
      freelancer: {
        ...prevState.freelancer,
        [name]: value,
      },
    }));
    console.log(this.state.freelancer);
  };

  // handleSkillsChange(userSkills) {
  //   let freelancer = this.state.freelancer;
  //   freelancer.userSkills = userSkills;
  //   this.setState({ freelancer: freelancer });
  // }
  // handleExperienceChange(userExperience) {
  //   let freelancer = this.state.freelancer;
  //   freelancer.experience = userExperience;
  //   this.setState({ freelancer: freelancer });
  // }
  // handleEducationChange(userEducation) {
  //   let freelancer = this.state.freelancer;
  //   freelancer.education = userEducation;
  //   this.setState({ freelancer: freelancer });
  // }
  // handleProjectChange(projects) {
  //   let freelancer = this.state.freelancer;
  //   freelancer.projects = projects;
  //   this.setState({ freelancer: freelancer });
  // }

  // handleAwardChange(awards) {
  //   let freelancer = this.state.freelancer;
  //   freelancer.education = awards;
  //   this.setState({ freelancer: freelancer });
  // }

  handleSubmit = async (event) => {
    event.preventDefault();

    PostFreelancerData(this.state.freelancer);
    // let result = await SendPassword();
    // this.setState({ errors: [''] });
    // this.setState({ message: result.messages });
    // this.setState({ showError: true });
  };

  populateData = async (iD) => {
    const data = await GetFreelancer(iD, 1, 0);
    this.setState({ freelancer: data }, () => {});
    this.setState({ loading: false }, () => {});
    console.log(this.state.freelancer);
    loadScripts1(this.instance, false);
    // console.log(JSON.stringify(this.state.freelancer));
  };
  async componentDidMount() {
    await this.populateData();

    //   loadScripts1(this.instance, false);
  }

  createMainContext() {
    if (this.state.loading === true) {
      return (
        <div>
          <em>Loading...</em>
        </div>
      );
    } else {
      return (
        <div ref={(el) => (this.instance = el)}>
          <div ref={(el) => (this.instance = el)}></div>
          {/* Wrapper Start */}
          <Header1 />
          {/*Header End*/}
          {/*  Main Start*/}
          <div className="wt-main wt-haslayout" id="wt-main">
            {/*Register Form Start*/}
            <section className="wt-haslayout"></section>
            {/*Register Form End*/}
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                <div className="wt-haslayout wt-dbsectionspace">
                  <div className="wt-dashboardbox wt-dashboardtabsholder">
                    <div className="wt-dashboardboxtitle">
                      <h2>My Profile</h2>
                    </div>
                    <div className="wt-dashboardtabs">
                      <ul className="wt-tabstitle nav navbar-nav">
                        <li className="nav-item">
                          <a
                            className="active"
                            href="#wt-skills"
                            data-toggle="tab"
                          >
                            Personal Details &amp; Skills
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#wt-education" data-toggle="tab">
                            Experience &amp; Education
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#wt-awards" data-toggle="tab">
                            Projects &amp; Awards
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="wt-tabscontent tab-content">
                      <div
                        className="wt-personalskillshold tab-pane active fade show"
                        id="wt-skills"
                      >
                        <div className="wt-yourdetails wt-tabsinfo">
                          <div className="wt-tabscontenttitle">
                            <h2>Your Details</h2>
                          </div>
                          <form className="wt-formtheme wt-userform">
                            <fieldset>
                              <div className="form-group form-group-half">
                                <span className="wt-select">
                                  <select
                                    value={this.state.freelancer.gender}
                                    onChange={this.handleChange}
                                    name="gender"
                                  >
                                    <option disabled>Select Gender</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                  </select>
                                </span>
                              </div>
                              <div className="form-group form-group-half">
                                <input
                                  name="firstName"
                                  className="form-control"
                                  type="text"
                                  defaultValue={this.state.freelancer.firstName}
                                  placeholder="First Name"
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group form-group-half">
                                <input
                                  name="lastName"
                                  className="form-control"
                                  type="text"
                                  placeholder="Last Name"
                                  defaultValue={this.state.freelancer.lastName}
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group form-group-half">
                                <input
                                  name="hourRates"
                                  className="form-control"
                                  type="number"
                                  placeholder="Your Service Hourly Rate ($)"
                                  defaultValue={this.state.freelancer.hourRates}
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  name="title"
                                  className="form-control"
                                  type="text"
                                  placeholder="Add Your Tagline Here"
                                  defaultValue={this.state.freelancer.title}
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group">
                                <textarea
                                  name="description"
                                  className="form-control"
                                  placeholder="Description"
                                  onChange={this.handleChange}
                                  defaultValue={
                                    this.state.freelancer.description
                                  }
                                />
                              </div>
                            </fieldset>
                          </form>
                        </div>
                        <div className="wt-profilephoto wt-tabsinfo">
                          <div className="wt-tabscontenttitle">
                            <h2>Profile Photo</h2>
                          </div>
                          <div className="wt-profilephotocontent">
                            <div className="wt-description">
                              <p>
                                Consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua aut enim ad minim veniamac quis nostrud
                                exercitation ullamco laboris.
                              </p>
                            </div>
                            <PhotoUpload
                              file={this.state.freelancer.userPhotoFile}
                              fileName="Profile Photo"
                              fileSize="500"
                              defaultPath={ProjectDefaultImgPath}
                            />
                          </div>
                        </div>
                        <div className="wt-bannerphoto wt-tabsinfo">
                          <div className="wt-tabscontenttitle">
                            <h2>Banner Photo</h2>
                          </div>
                          <div className="wt-profilephotocontent">
                            <div className="wt-description">
                              <p>
                                Consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna
                                aliqua aut enim ad minim veniamac quis nostrud
                                exercitation ullamco laboris.
                              </p>
                            </div>
                            <PhotoUpload
                              file={this.state.freelancer.bunnerPhoto}
                              fileName="Bunner Photo"
                              fileSize="500"
                              defaultPath={ProjectDefaultImgPath}
                            />
                          </div>
                        </div>
                        <div className="wt-location wt-tabsinfo">
                          <div className="wt-tabscontenttitle">
                            <h2>Your Location</h2>
                          </div>
                          <form className="wt-formtheme wt-userform">
                            <fieldset>
                              <CountryOption
                                defaultValue={this.state.freelancer.country}
                                handleChange={this.handleChange}
                              />
                              <div className="form-group form-group-half">
                                <input
                                  name="address"
                                  className="form-control"
                                  type="text"
                                  placeholder="Your Address"
                                  defaultValue={this.state.freelancer.address}
                                  onChange={this.handleChange}
                                />
                              </div>
                              {/* <div className="form-group wt-formmap">
                                <div
                                  className="wt-locationmap"
                                  id="wt-locationmap"
                                />
                              </div> */}
                              <div className="form-group form-group-half">
                                <input
                                  name="longitude"
                                  className="form-control"
                                  type="text"
                                  placeholder="Enter Longitude (Optional)"
                                  defaultValue={this.state.freelancer.longitude}
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="form-group form-group-half">
                                <input
                                  name="latitude"
                                  className="form-control"
                                  type="text"
                                  placeholder="Enter Latitude (Optional)"
                                  defaultValue={this.state.freelancer.latitude}
                                  onChange={this.handleChange}
                                />
                              </div>
                            </fieldset>
                          </form>
                        </div>
                        <div className="wt-tabcompanyinfo wt-tabsinfo">
                          <div className="wt-tabscontenttitle">
                            <h2>Company Details</h2>
                          </div>
                          <div className="wt-accordiondetails">
                            <NumberOfEmployersOption
                              numberOfEmployees={
                                this.state.freelancer.numberOfEmployees
                              }
                              handleChange={this.handleChange}
                            />

                            <DepartmentOption
                              department={this.state.freelancer.department}
                              handleChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <SkillForm
                          userSkills={this.state.freelancer.userSkills}
                          handleSkillsChange={this.handleSkillsChange}
                        />
                      </div>
                      <div
                        className="wt-educationholder tab-pane fade"
                        id="wt-education"
                      >
                        <ExperienceList
                          experienceList={this.state.freelancer.experience}
                          handleExperienceChange={this.handleExperienceChange}
                        />
                        <EducationList
                          educationList={this.state.freelancer.education}
                          handleEducationChange={this.handleEducationChange}
                        />
                      </div>
                      <div
                        className="wt-awardsholder tab-pane fade"
                        id="wt-awards"
                      >
                        <ProjectList
                          projectList={this.state.freelancer.projects}
                          handleProjectChange={this.handleProjectChange}
                        />
                        <AwardList
                          awardList={this.state.freelancer.awards}
                          handleAwardChange={this.handleAwardChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wt-updatall">
                  <i className="ti-announcement" />
                  <span>
                    Update all the latest changes made by you, by just clicking
                    on “Save &amp; Continue” button.
                  </span>
                  h{' '}
                  <button className="wt-btn" onClick={this.handleSubmit}>
                    Save &amp; Update
                  </button>
                </div>
              </div>
              <SidePanel />
            </div>
            {/*  Main End */}
          </div>
        </div>
      );
    }
  }
  render(contextMain = this.createMainContext()) {
    return <div ref={(el) => (this.instance = el)}>{contextMain}</div>;
  }
}
export default DashboardProfile;
