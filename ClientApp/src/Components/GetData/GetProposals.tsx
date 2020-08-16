import { countryFlagsPath } from '../Data/GlobalValues';
import { wait } from './wait';
import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';

// export const GetProposals = async (jobId: string) => {
//   //Функция для получения списка с севрера
//   //   await fetch('http://localhost:17525/api/countries')
//   //     .then((res) => res.json())
//   //     .then((body) => {
//   //       countryList = body;
//   //     })
//   //     .catch((err) => {
//   //       console.error(err);
//   //     });
//   await wait(500);

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
