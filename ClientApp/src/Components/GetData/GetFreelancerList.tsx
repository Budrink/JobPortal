import { GetFreelancers } from './GetFreelancers';
import { FreelancerData } from '../Data/Data';

///Переписать для БД
interface ItemProps {
  name: string;
  value: boolean;
}

export const FilterCategories = (
  freelancers: FreelancerData[],
  categoryFilter: string[],
) => {
  // if (categoryFilter !== undefined && categoryFilter.length > 0) {
  //   // let filter1 = categoryFilter.filter((item) => (item.value = true));
  // let  arr: FreelancerData[];
  //   categoryFilter.forEach(element => {
  //     freelancers
  //     //  return arr.push(freelancers.filter(

  //     //     (freelancer) =>
  //     //       freelancer.userSkills !== undefined &&
  //     //       freelancer.userSkills
  //     //         .map((skill) => skill.skill.skillName)
  //     //         .indexOf(elemt) > -1,
  //       );
  //  }
  //}   else
  return freelancers;
};

export const getFreelancerList = async (
  pageNumber: number,
  amounOfItemsOnPage: number,
  categoryFilter: string[],
  projectTypeFilter: string[],
  locationFilter: string[],
  typeFilter: string[],
  projectLengthFilter: string[],
  langFilter: string[],
  stringFilter: string,
  globalCategoryFilter: string,
) => {
  const freelancerList = await GetFreelancers();

  // let filterLocationStrings: string[];
  // let filterTypeStrings: string[];
  // let filterLevelStrings: string[];
  // let filterLangStrings: string[];
  // let filterRateStrings: string[];
  // let freelancers: any;
  // freelancers = freelancerList;

  // freelancers = FilterCategories(freelancers, categoryFilter);

  // console.log('locationFilter' + JSON.stringify(locationFilter));
  // if (locationFilter !== undefined && locationFilter.length > 0) {
  //   filterLocationStrings = locationFilter
  //     .filter((item) => (item.value = true))
  //     .map((item) => item.name);

  //   if (
  //     filterLocationStrings !== undefined &&
  //     filterLocationStrings.length > 0
  //   ) {
  //     const freelancers1 = freelancers.filter(
  //       (freelancer) =>
  //         freelancer.userCountry !== undefined &&
  //         filterLocationStrings.indexOf(freelancer.userCountry.countryName) >
  //           -1,
  //     );

  //     freelancers = freelancers1;
  //     console.log('freelancers ' + JSON.stringify(freelancers));
  //   }
  // }

  // let freelancers10 = freelancerList.freelancers.filter(
  //   (freelancer: { userId: any }) =>
  //     Number(freelancer.userId) > pageNumber * amounOfItemsOnPage &&
  //     Number(freelancer.userId) <= (pageNumber + 1) * amounOfItemsOnPage,
  // );
  // freelancers = freelancers10;
  // console.log('freelancers10 ' + freelancers10);
  // console.log('freelancerList ' + freelancerList.totalAmountOfFreelancers);
  return { freelancerList }; //, freelancerList.totalAmountOfFreelancers};
};
