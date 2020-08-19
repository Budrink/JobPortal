import { countryFlagsPath, flagDefaultPath } from '../Data/GlobalValues';
import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

interface proposal {
  iD: string;
  proposalStatus: string;
  freelancer: {
    userId: string;
    firstName: string;
    lastName: string;
    userPhoto: string;
    userRates: string;
    feedbacksCount: number;
    plusMember: boolean;
  };
  terms: string;
  coverLetter: string;
  attachments: [];
}
interface proposalList {
  totalAmountOfProposals: number;
  job?: {
    jobId: string;
    title: string;
    qualification: string;
    company: {
      verifiedCompany: boolean;
      companyId: string;
      companyName: string;
      country: {
        countryId: string;
        countryFlag: string;
        countryName: string;
      };
      amountOngoingProjects: number;
      amountCompletedProjects: number;
      amountCancelledProjects: number;
    };
    type: string;
    duration: string;
  };
  proposals: proposal[];
}

export const GetProposals = async (jobId: string): Promise<any> => {
  let proposalList: proposalList;
  proposalList = {
    totalAmountOfProposals: 0,
    proposals: [],
    job: undefined,
  };

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Job/${jobId}/proposals`,
      method: 'Get',
    });

    if (response.parsedBody !== null) {
      proposalList = response.parsedBody;
      if (proposalList !== undefined) {
        if (proposalList.proposals !== undefined) {
          if (proposalList.proposals.length > 0) {
            proposalList.proposals.map(
              (pr) =>
                (pr.freelancer.userPhoto = pr.freelancer.userPhoto
                  ? userPhotoPath + pr.freelancer.userPhoto
                  : userDefaultIconPath),
            );
          }
        }
        if (proposalList.job?.company !== undefined) {
          if (proposalList.job.company.country !== undefined) {
            proposalList.job.company.country.countryFlag = proposalList.job
              .company.country.countryFlag
              ? countryFlagsPath + proposalList.job.company.country.countryFlag
              : flagDefaultPath;
          }
        }
      }
    }
  } catch (e) {
    console.log(e);
  }

  return proposalList;
};

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
