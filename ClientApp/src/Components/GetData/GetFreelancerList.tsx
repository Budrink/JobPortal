import { FreelancerData } from '../Data/Data';
import { http } from '../Data/Http';
import {
  userPhotoPath,
  userDefaultIconPath,
  countryFlagsPath,
  flagDefaultPath,
} from '../Data/GlobalValues';

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
  skillFilter?: string[],
  locationFilter?: string[],
  typeFilter?: string[],
  levelFilter?: string[],
  langFilter?: string[],
  rateFilter?: string[],
  stringFilter?: string,
  globalCategoryFilter?: string,
): Promise<any> => {
  let freelancerList: FreelancersProps = {
    totalAmountOfFreelancers: 0,
    freelancers: [],
  };
  // console.log(skillFilter);
  let requestBody = {
    pageNumber: pageNumber,
    amountOfItemsOnPage: amounOfItemsOnPage,

    categoryFilter: skillFilter,
    locationFilter: locationFilter,
    typeFilter: typeFilter,
    projectLangFilter: langFilter,
    levelFilter: levelFilter,
    stringFilter: stringFilter,
    langFilter: langFilter,
    globalCategoryFilter: globalCategoryFilter,
    rateFilter: rateFilter,
  };
  // console.log(requestBody);
  let response: HttpResponse<any>;

  try {
    response = await http({
      path: `Freelancer`,
      method: 'Post',
      body: requestBody,
    });

    if (response.parsedBody !== null) {
      freelancerList = response.parsedBody;
      freelancerList.freelancers.map(
        (freelancer) =>
          (freelancer.userPhoto =
            freelancer.userPhoto !== null
              ? userPhotoPath + freelancer.userPhoto
              : userDefaultIconPath),
      );
      freelancerList.freelancers.map(
        (freelancer) =>
          (freelancer.country.countryFlag =
            freelancer.country.countryFlag !== null
              ? countryFlagsPath + freelancer.country.countryFlag
              : flagDefaultPath),
      );
      // console.log(freelancerList);
    }
  } catch (e) {
    console.log(e);
  }

  return { freelancerList }; //, freelancerList.totalAmountOfFreelancers};
};

// // let filterLocationStrings: string[];
// // let filterTypeStrings: string[];
// // let filterLevelStrings: string[];
// // let filterLangStrings: string[];
// // let filterRateStrings: string[];
// // let freelancers: any;
// // freelancers = freelancerList;

// // freelancers = FilterCategories(freelancers, categoryFilter);

// // console.log('locationFilter' + JSON.stringify(locationFilter));
// // if (locationFilter !== undefined && locationFilter.length > 0) {
// //   filterLocationStrings = locationFilter
// //     .filter((item) => (item.value = true))
// //     .map((item) => item.name);

// //   if (
// //     filterLocationStrings !== undefined &&
// //     filterLocationStrings.length > 0
// //   ) {
// //     const freelancers1 = freelancers.filter(
// //       (freelancer) =>
// //         freelancer.userCountry !== undefined &&
// //         filterLocationStrings.indexOf(freelancer.userCountry.countryName) >
// //           -1,
// //     );

// //     freelancers = freelancers1;
// //     console.log('freelancers ' + JSON.stringify(freelancers));
// //   }
// // }

// // let freelancers10 = freelancerList.freelancers.filter(
// //   (freelancer: { userId: any }) =>
// //     Number(freelancer.userId) > pageNumber * amounOfItemsOnPage &&
// //     Number(freelancer.userId) <= (pageNumber + 1) * amounOfItemsOnPage,
// // );
// // freelancers = freelancers10;
// // console.log('freelancers10 ' + freelancers10);
// // console.log('freelancerList ' + freelancerList.totalAmountOfFreelancers);
