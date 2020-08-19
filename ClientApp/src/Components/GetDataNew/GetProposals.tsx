import { countryFlagsPath } from '../Data/GlobalValues';
import { wait } from '../GetData/wait';
import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
import { http } from '../Data/Http';
import { JobData, CompanyData, CountryData } from '../Data/Data';

// export interface HttpResponse<RESB> extends Response {
//   parsedBody?: RESB;
// }
// interface company {
//   companyId: string;
//   companyName: string;
//   companyImgJpg?: string;
//   companyImgPng?: string;
//   companyCountry: CountryData;
//   verifiedCompany?: boolean;
//   companyDescription?: string;
//   numberOfEmployers?: number;
//   department?: string;
//   saved?: boolean;
// }
// interface CompanyProps {
//   totalAmountOfCompanies: number;
//   companies: company[];
//   savedItems: [];
// }

// export const GetProposals = async (jobId: string)
// : Promise<any> => {

//   const proposalList = {
//     totalAmountOfProposals: 5,
//   };
//   return proposalList;
// };

//   let requestBody = {
//     pageNumber: pageNumber,
//     amountOfItemsOnPage: amounOfItemsOnPage,
//     userId: id,
//     savedItemtype: '1',
//     // 1
//   };
//   let response: HttpResponse<any>;
//   try {
//     response = await http({
//       path: `user/saveditems`,
//       method: 'Post',
//       body: requestBody,
//     });

//     if (response.parsedBody !== null) {
//       companyList = response.parsedBody;
//       if (companyList.savedItems !== undefined) {
//         companyList.companies = companyList.savedItems;
//         companyList.companies.map(
//           (company) =>
//             (company.companyImgPng =
//               company.companyImgPng !== null
//                 ? companyPath + company.companyImgPng
//                 : companyDefaultImgPng),
//         );
//       }
//     }
//   } catch (e) {
//     console.log(e);
//   }

//   return companyList;
// };

// jobId: string;
// title: string;
// qualification: string;
// company: CompanyData;
// type: string; //'fixed' or 'hourly'
// duration?: string;
// jobDetails: string;
// skillsRequired?: Skill[];
// Attachments?: Attachment[];
// proposalsCount?: number;
// proposals?: Proposal[];
// status?: string; // canceled, ongoing, completed
// hiredFreelancers?: string[]; //List of userId
// }
//   const proposalList = {
//     totalAmountOfProposals: 5,
//     job: {
//       jobId: 'gy3yV2Vm5u',
//       title: 'I want some customization and installation',
//       qualification: 'Professional',
//       company: {
//         verifiedCompany: true,
//         companyId: '1',
//         companyName: 'Light Bulb Association',
//         country: {
//           countryId: 'C4',
//           countryFlag: countryFlagsPath + 'img-04.png',
//           countryName: 'England',
//         },
//         amountOngoingProjects: 55,
//         amountCompletedProjects: 22,
//         amountCancelledProjects: 33,
//       },
//       type: 'Per Hour',
//       duration: '03 Months',
//     },
//     // proposalStatus:
//     proposals: [
//       {
//         iD: '1',
//         proposalStatus: 'waiting',
//         freelancer: {
//           userId: '1',
//           firstName: 'Alfredo',
//           lastName: 'Bossard',
//           userPhoto: 'img-10.png',
//           userRates: '4.5',
//           feedbacksCount: 500,
//           plusMember: true,
//         },
//         terms: '$30',
//         coverLetter:
//           '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
//           'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
//           'qui dolorem ipsum quia dolor sit amet' +
//           'Sed quia consequuntur magni dolores eos qui ratione volupt ',
//         attachments: [
//           { iD: '1', name: 'introduction', link: 'https:www.yandex.ru' },
//           { iD: '12', name: 'description', link: 'https:www.yandex.ru' },
//         ],
//       },
//       {
//         iD: '2',
//         proposalStatus: 'waiting',
//         freelancer: {
//           userId: '2',
//           firstName: 'Luigi',
//           lastName: 'Bossari',
//           userPhoto: 'img-10.png',
//           userRates: '5',
//           feedbacksCount: 300,
//         },
//         terms: '$30',
//         coverLetter:
//           '2 Adipisci velit, sed quia non numquam eius modi tempora ' +
//           'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
//           'qui dolorem ipsum quia dolor sit amet' +
//           'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui ' +
//           'dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora ' +
//           'incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ',
//       },
//       {
//         iD: '3',
//         proposalStatus: 'waiting',
//         freelancer: {
//           userId: '3',
//           firstName: 'Alfredo',
//           lastName: 'Bossard',
//           userPhoto: 'img-10.png',
//           userRates: '4.5',
//           feedbacksCount: 500,
//           plusMember: true,
//         },
//         terms: '$30',
//         coverLetter:
//           '3 Adipisci velit, sed quia non numquam eius modi tempora ' +
//           'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
//           'qui dolorem ipsum quia dolor sit amet' +
//           'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui ' +
//           'dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora ' +
//           'incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ',
//         attachments: [
//           { iD: '1', name: 'introduction', link: 'https:www.yandex.ru' },
//           { iD: '2', name: 'description', link: 'https:www.yandex.ru' },
//         ],
//       },
//       {
//         iD: '4',
//         proposalStatus: 'waiting',
//         freelancer: {
//           userId: '4',
//           firstName: 'Alfredo',
//           lastName: 'Bossard',
//           userPhoto: 'img-10.png',
//           userRates: '3',
//           feedbacksCount: 500,
//           plusMember: true,
//         },
//         terms: '$30',
//         coverLetter:
//           '4 Adipisci velit, sed quia non numquam eius modi tempora ' +
//           'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
//           'qui dolorem ipsum quia dolor sit amet' +
//           'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui ' +
//           'dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora ' +
//           'incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ',
//       },
//       {
//         iD: '5',
//         proposalStatus: 'waiting',
//         freelancer: {
//           userId: '5',
//           firstName: 'Alfredo',
//           lastName: 'Bossard',
//           userPhoto: 'img-10.png',
//           userRates: '4.5',
//           feedbacksCount: 500,
//           plusMember: true,
//         },
//         terms: '$08',
//         coverLetter:
//           '5 Adipisci velit, sed quia non numquam eius modi tempora ' +
//           'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
//           'qui dolorem ipsum quia dolor sit amet' +
//           'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui ' +
//           'dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora ' +
//           'incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ',
//       },
//     ],
//   };
//   proposalList.proposals.map(
//     (pr) =>
//       (pr.freelancer.userPhoto = pr.freelancer.userPhoto
//         ? userPhotoPath + pr.freelancer.userPhoto
//         : userDefaultIconPath),
//   );

//   return proposalList;
// };
