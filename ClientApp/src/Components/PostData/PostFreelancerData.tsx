import { http } from '../Data/Http';
import { FreelancerData } from '../Data/Data';

export const PostFreelancerData = async (
  freelancer: FreelancerData,
): Promise<any> => {
  let requestBody;
  requestBody = {
    userId: localStorage.getItem('userId'),
    userPhoto: freelancer.userPhoto,
    // userBunnerFile?: File;
    firstName: freelancer.firstName,
    lastName: freelancer.lastName,
    gender: freelancer.gender,
    countryId: freelancer.country.countryId,
    address: freelancer.address,
    longitude: freelancer.longitude,
    latitude: freelancer.latitude,
    numberOfEmployees: freelancer.numberOfEmployees,
    department: freelancer.department,
    description: freelancer.description,
    title: freelancer.title,
    awards: freelancer.awards,
    projects: freelancer.projects,
    hourRates: freelancer.hourRates,
    //   @valentine20658;

    servedHours: freelancer.servedHours,
    userSkills: freelancer.userSkills,
    englishLevel: freelancer.englishLevel,
    Languages: freelancer.Languages,
    // plusMember: boolean;
    remark: freelancer.remark,

    //craftedProjects?: CraftedProject[];
    experience: freelancer.experience,
    education: freelancer.education,
    // tagList?: string[];
    //  globalCategory?: GlobalCategoryData;
    userCompany: freelancer.userCompany,
  };
  // console.log(requestBody);
  let response;
  try {
    response = await http({
      path: `changefreelancer`,
      method: 'POST',
      body: requestBody,
    });
    return response.parsedBody;
  } catch (error) {
    window.alert(error);
    return error;
  }
};
