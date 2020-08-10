import { FreelancerData } from '../Data/Data';
import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
interface extendedFreelancer extends FreelancerData {
  saved?: boolean;
}
interface FreelancersProps {
  totalAmountOfFreelancers: number;
  freelancers: extendedFreelancer[];
}

export const getFreelancerList = async (
  pageNumber: number,
  amounOfItemsOnPage: number,
  categoryFilter: string[],
  locationFilter: string[],
  typeFilter: string[],
  ProjectLangFilter: string[],
  langFilter: string[],
  stringFilter: string,
  globalCategoryFilter: string,
  englishLevelFilter?: string[],
): Promise<any> => {
  let freelancersResponse: FreelancersProps = {
    totalAmountOfFreelancers: 0,
    freelancers: [],
  };
  let requestBody = {
    pageNumber: pageNumber,
    amountOfItemsOnPage: amounOfItemsOnPage,
    categoryFilter: categoryFilter,
    locationFilter: locationFilter,
    typeFilter: typeFilter,
    projectLangFilter: ProjectLangFilter,
    levelFilter: englishLevelFilter === undefined ? [''] : englishLevelFilter,
    stringFilter: stringFilter === undefined ? '' : stringFilter,
    // langFilter: langFilter,
    globalCategoryFilter: globalCategoryFilter,
  };
  console.log(requestBody);
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Freelancer`,
      method: 'Post',
      body: requestBody,
    });

    console.log(response);
    if (response.parsedBody !== null) {
      freelancersResponse = response.parsedBody;
    }
    // console.log(skillList);
  } catch (e) {
    console.log(e);
  }

  return { freelancersResponse }; //, freelancerList.totalAmountOfFreelancers};
};

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
