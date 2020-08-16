import { wait } from './wait';
import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
import { countryFlagsPath } from '../Data/GlobalValues';

//List of freelancers buy the list of their iDs
// export const GetContractsByJobId = async (jobId: string[]) => {
//   //Функция для получения списка с сервера
//   //   await fetch('http://localhost:17525/api/user')
//   //     .then((res) => res.json())
//   //     .then((body) => {
//   //       countryList = body;
//   //     })
//   //     .catch((err) => {
//   //       console.error(err);
//   //     });
//   await wait(500);

//   let contractList = [
//     {
//       contractId: '1',
//       type: 'fixed',
//       status: 'finished',
//       beginDate: '08-03-2020',
//       endData: '10-07-2020',
//       rate: 30,
//       coverLetter: 'http://htmlbook.ru',
//       attachments: [
//         {
//           iD: '1',
//           size: 0,
//           name: 'attachment1',
//           link: 'https://yadi.sk/i/Plh0_V8z6yPb4Q',
//         },
//         {
//           iD: '2',
//           size: 0,
//           name: 'attachment2',
//           link: 'https://yadi.sk/i/Plh0_V8z6yPb4Q',
//         },
//       ],
//       messages: [
//         {
//           messageId: '1',
//           text:
//             'Adipisicing elit sed do eiusmod tempor incididunt ut labore eta dolore magnam aliqua. Ut enim ad minim veniam, qu nostrud exercitation ullamco laboris nisi ut aliquiprex ea commodo consequat eta dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumau dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa quiste officia deserunt mollit anim id est laborum. Sed uten perspiciatis unde omnis istetam natus error sit voluptatem accusantium doloremque laudantium.',
//           status: 'new',
//           date: '27-07-2020',
//           sender: 'freelancer',
//           attachments: [
//             {
//               iD: '1',
//               size: 0,
//               name: 'attachment1',
//               link: 'https://yadi.sk/i/Plh0_V8z6yPb4Q',
//             },
//             {
//               iD: '2',
//               size: 0,
//               name: 'attachment2',
//               link: 'https://yadi.sk/i/Plh0_V8z6yPb4Q',
//             },
//           ],
//         },
//         {
//           messageId: '2',
//           text:
//             'Adipisicing elit sed do eiusmod tempor incididunt ut labore eta dolore magnam aliqua. Ut enim ad minim veniam, qu nostrud exercitation ullamco laboris nisi ut aliquiprex ea commodo consequat eta dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumau dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa quiste officia deserunt mollit anim id est laborum. Sed uten perspiciatis unde omnis istetam natus error sit voluptatem accusantium doloremque laudantium.',
//           status: 'opened',
//           date: '27-07-2020',
//           sender: 'customer',
//         },
//         {
//           messageId: '3',
//           text:
//             'Adipisicing elit sed do eiusmod tempor incididunt ut labore eta dolore magnam aliqua. Ut enim ad minim veniam, qu nostrud exercitation ullamco laboris nisi ut aliquiprex ea commodo consequat eta dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumau dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa quiste officia deserunt mollit anim id est laborum. Sed uten perspiciatis unde omnis istetam natus error sit voluptatem accusantium doloremque laudantium.',
//           status: 'opened',
//           date: '27-07-2020',
//           sender: 'freelancer',
//         },
//         {
//           messageId: '4',
//           text:
//             'Adipisicing elit sed do eiusmod tempor incididunt ut labore eta dolore magnam aliqua. Ut enim ad minim veniam, qu nostrud exercitation ullamco laboris nisi ut aliquiprex ea commodo consequat eta dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumau dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa quiste officia deserunt mollit anim id est laborum. Sed uten perspiciatis unde omnis istetam natus error sit voluptatem accusantium doloremque laudantium.',
//           status: 'opened',
//           date: '27-07-2020',
//           sender: 'customer',
//         },
//       ],
//       userId: '1',
//       userPhoto: 'img-10.png',
//       userName: 'Valentine Mehring',
//       userRates: '5.0',
//       plusMember: true,
//       feedbacksCount: 860,
//       title: 'Classified Posting, Data Entry, Typing Expert',
//       hourRates: '70.00 ',
//       country: {
//         countryId: '2',
//         countryFlag: countryFlagsPath + 'img-02.png',
//         countryName: 'United States',
//       },
//     },
//     {
//       contractId: '2',
//       type: 'hourly',
//       status: 'inProgress',
//       beginDate: '08-03-2020',
//       endData: '10-07-2020',
//       rate: 70,
//       coverLetter: 'https://yadi.sk/i/Plh0_V8z6yPb4Q',

//       userId: '2',
//       plusMember: false,
//       userPhoto: 'img-02.jpg',
//       userName: 'Alfredo Bossard',
//       userRates: '4.5',
//       feedbacksCount: 760,
//       title: 'Classifieds Posting, Data Entry, Typing',
//       hourRates: '70.00 ',
//       country: {
//         countryId: '2',
//         countryFlag: countryFlagsPath + 'img-02.png',
//         countryName: 'United States',
//       },
//     },

//     {
//       contractId: '3',
//       type: 'fixed',
//       status: 'inProgress',
//       beginDate: '08-03-2020',
//       endData: '10-07-2020',
//       rate: 30,
//       coverLetter:
//         'H:\reactworktern-marketplaceworktern-marketplacearticleclassic.html',
//       attachments: [],
//       userId: '3',
//       plusMember: false,
//       userPhoto: 'img-03.png',
//       userName: 'Marsele Westerberg',
//       userRates: '4.5',
//       feedbacksCount: 760,
//       hourRates: '44.00',
//       country: {
//         countryId: '2',
//         countryFlag: countryFlagsPath + 'img-03.png',
//         countryName: 'Canada',
//       },
//     },
//     {
//       contractId: '4',
//       type: 'fixed',
//       status: 'inProgress',
//       beginDate: '08-05-2020',
//       endData: '10-06-2020',
//       rate: 20,
//       coverLetter: '',
//       attachments: [
//         {
//           name: 'attachment1',
//           link: 'https://yadi.sk/i/Plh0_V8z6yPb4Q',
//         },
//         {
//           name: 'attachment2',
//           link: 'https://yadi.sk/i/Plh0_V8z6yPb4Q',
//         },
//       ],
//       messages: [
//         {
//           messageId: '1',
//           text:
//             'Adipisicing elit sed do eiusmod tempor incididunt ut labore eta dolore magnam aliqua. Ut enim ad minim veniam, qu nostrud exercitation ullamco laboris nisi ut aliquiprex ea commodo consequat eta dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumau dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa quiste officia deserunt mollit anim id est laborum. Sed uten perspiciatis unde omnis istetam natus error sit voluptatem accusantium doloremque laudantium.',
//           status: 'new',
//           date: '27-07-2020',
//           sender: 'freelancer',
//         },
//         {
//           messageId: '2',
//           text:
//             'Adipisicing elit sed do eiusmod tempor incididunt ut labore eta dolore magnam aliqua. Ut enim ad minim veniam, qu nostrud exercitation ullamco laboris nisi ut aliquiprex ea commodo consequat eta dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumau dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa quiste officia deserunt mollit anim id est laborum. Sed uten perspiciatis unde omnis istetam natus error sit voluptatem accusantium doloremque laudantium.',
//           status: 'opened',
//           date: '27-07-2020',
//           sender: 'customer',
//         },
//         {
//           messageId: '3',
//           text:
//             'Adipisicing elit sed do eiusmod tempor incididunt ut labore eta dolore magnam aliqua. Ut enim ad minim veniam, qu nostrud exercitation ullamco laboris nisi ut aliquiprex ea commodo consequat eta dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumau dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa quiste officia deserunt mollit anim id est laborum. Sed uten perspiciatis unde omnis istetam natus error sit voluptatem accusantium doloremque laudantium.',
//           status: 'opened',
//           date: '27-07-2020',
//           sender: 'freelancer',
//         },
//         {
//           messageId: '4',
//           text:
//             'Adipisicing elit sed do eiusmod tempor incididunt ut labore eta dolore magnam aliqua. Ut enim ad minim veniam, qu nostrud exercitation ullamco laboris nisi ut aliquiprex ea commodo consequat eta dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillumau dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa quiste officia deserunt mollit anim id est laborum. Sed uten perspiciatis unde omnis istetam natus error sit voluptatem accusantium doloremque laudantium.',
//           status: 'opened',
//           date: '27-07-2020',
//           sender: 'customer',
//         },
//       ],
//       userId: '4',
//       plusMember: false,
//       userPhoto: 'img-04.png',
//       userName: 'Herlinda Hundley',
//       userRates: '4.5',
//       feedbacksCount: 760,
//       title: 'Classified Posting, Data Entry, Typing Expert',
//       hourRates: '44.00',
//       country: {
//         countryId: '2',
//         countryFlag: countryFlagsPath + 'img-03.png',
//         countryName: 'Canada',
//       },
//     },
//   ];

//   contractList.map(
//     (contract) =>
//       (contract.userPhoto = contract.userPhoto
//         ? userPhotoPath + contract.userPhoto
//         : userDefaultIconPath),
//   );

//   // console.log(
//   //   freelancerList.filter((item) => (item.userId = '1'))[0].userPhoto),

//   return contractList;
// };
