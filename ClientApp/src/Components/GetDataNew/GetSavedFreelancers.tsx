import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
import { countryFlagsPath, flagDefaultPath } from '../Data/GlobalValues';
import { http } from '../Data/Http';
import { FreelancerData } from '../Data/Data';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
interface ExtendedFreelancer extends FreelancerData {
  saved?: boolean;
}
interface FreelancersProps {
  totalAmountOfFreelancers: number;
  freelancers: ExtendedFreelancer[];
  savedItems: [];
}
export const GetSavedFreelancers = async (
  id: string,
  pageNumber: number,
  amounOfItemsOnPage: number,
): Promise<any> => {
  let freelancerList: FreelancersProps = {
    totalAmountOfFreelancers: 0,
    freelancers: [],
    savedItems: [],
  };
  // console.log(localStorage.getItem('login'));
  // if (
  //   localStorage.getItem('login') !== 'true' ||
  //   localStorage.getItem('userId') === undefined
  // ) {
  //   return [];
  // }

  let requestBody = {
    userId: id,
    savedItemtype: '2',
    pageNumber: pageNumber,
    amountOfItemsOnPage: amounOfItemsOnPage,
    // 1
  };
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `user/saveditems`,
      method: 'Post',
      body: requestBody,
    });

    if (response.parsedBody !== null) {
      freelancerList = response.parsedBody;
    }
    if (freelancerList.savedItems !== undefined) {
      freelancerList.freelancers = freelancerList.savedItems;
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
    }
  } catch (e) {
    console.log(e);
  }

  return freelancerList;
};
//iD- iD of user who asked for saved freelancers
// export const GetSavedFreelancers = async (
//   iD: string,
//   pageNumber: number,
//   amounOfItemsOnPage: number,
// ) => {

//   let freelancerList = {
//     totalAmountOfFreelancers: 100,
//     freelancers: [
//       {
//         userId: '1',
//         userPhoto: 'img-10.png',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '3.0',
//         plusMember: true,
//         feedbacksCount: 860,
//         joinDate: 'May 30, 2013',
//         title: 'Classified Posting, Data Entry, Typing Expert',
//         hourRates: '44.00',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-02.png',
//           countryName: 'United States',
//         },
//       },
//       {
//         userId: '2',
//         plusMember: true,
//         userPhoto: 'img-02.jpg',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '4.5',
//         feedbacksCount: 760,
//         title: 'Classifieds Posting, Data Entry, Typing',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-02.png',
//           countryName: 'United States',
//         },
//       },
//       {
//         userId: '3',
//         plusMember: false,
//         userPhoto: 'img-03.png',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '4.2',
//         feedbacksCount: 760,
//         title: 'SEO/PPC Social Media Marketing Expert',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-03.png',
//           countryName: 'Canada',
//         },
//       },
//       {
//         userId: '4',
//         plusMember: false,
//         userPhoto: 'img-04.png',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '3.7',
//         title: 'Classified Posting, Data Entry, Typing Expert',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-03.png',
//           countryName: 'Canada',
//         },
//       },
//       {
//         userId: '5',
//         plusMember: false,
//         userPhoto: 'img-10.png',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '5.0',
//         feedbacksCount: 860,
//         title: 'Classified Posting, Data Entry, Typing Expert',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-02.png',
//           countryName: 'United States',
//         },
//       },
//       {
//         userId: '6',
//         plusMember: false,
//         userPhoto: 'img-02.png',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '4.1',
//         feedbacksCount: 760,
//         title: 'Classifieds Posting, Data Entry, Typing',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-02.png',
//           countryName: 'United States',
//         },
//       },
//       {
//         userId: '7',
//         plusMember: false,
//         userPhoto: 'img-03.jpg',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '4.5',
//         feedbacksCount: 760,
//         title: 'SEO/PPC Social Media Marketing Expert',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-03.png',
//           countryName: 'Canada',
//         },
//       },
//       {
//         userId: '8',
//         plusMember: true,
//         userPhoto: 'img-04.jpg',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '4.5',
//         feedbacksCount: 760,
//         title: 'Classified Posting, Data Entry, Typing Expert',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-03.png',
//           countryName: 'Canada',
//         },
//       },
//       {
//         userId: '9',
//         plusMember: false,
//         userPhoto: 'img-10.jpg',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '5.0',
//         feedbacksCount: 860,
//         title: ' Data Entry, Typing Expert',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-02.png',
//           countryName: 'United States',
//         },
//       },
//       {
//         userId: '10',
//         plusMember: false,
//         userPhoto: 'img-02.jpg',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '4.5',
//         feedbacksCount: 760,
//         title: 'Classifieds Posting, Data Entry, Typing',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-02.png',
//           countryName: 'United States',
//         },
//       },
//       {
//         userId: '11',
//         plusMember: false,
//         userPhoto: 'img-03.jpg',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '4.5',
//         feedbacksCount: 760,
//         title: 'SEO/PPC Social Media Marketing Expert',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-03.png',
//           countryName: 'Canada',
//         },
//       },
//       {
//         userId: '12',
//         plusMember: false,
//         userPhoto: 'img-04.jpg',
//         firstName: 'Valentine',
//         lastName: 'Mehring',
//         userRates: '4.5',
//         feedbacksCount: 760,
//         title: 'Classified Posting, Data Entry, Typing Expert',
//         hourRates: '$44.00 / hr',
//         country: {
//           countryId: '2',
//           countryFlag: countryFlagsPath + 'img-03.png',
//           countryName: 'Canada',
//         },
//       },
//     ],
//   };
//   freelancerList.freelancers.map(
//     (fr) =>
//       (fr.userPhoto = fr.userPhoto
//         ? userPhotoPath + fr.userPhoto
//         : userDefaultIconPath),
//   );

//   // console.log(
//   //   freelancerList.filter((item) => (item.userId = '1'))[0].userPhoto),

//   return freelancerList;
// };
