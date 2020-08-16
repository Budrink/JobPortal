import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
import { wait } from './wait';

///Переписать для БД

// export const GetProposalList = async (jobId: string) => {
//   await wait(500);
//   const proposalList = [
//     {
//       iD: '1',
//       jobId: 'gy3yV2Vm5u',
//       userId: '1',
//       userPhoto: 'img-10.png',
//       terms: ' dsfgasA',
//       type: ' Per Hour',
//       coverLetter: 'SDFSDFS RTBDdfdfb dfgdfgbdfb',
//       proposalDate: '07-05-2020',
//       proposalStatus: 'wait',
//     },
//     {
//       iD: '2',
//       jobId: 'gy3yV2Vm5u',
//       userId: '2',
//       userPhoto: 'img-01.jpg',
//       terms: ' dsfgasA',
//       type: ' Per Hour',
//       coverLetter: 'SDFSDFS RTBDdfdfb dfgdfgbdfb',
//       proposalDate: '07-05-2020',
//       proposalStatus: 'wait',
//     },
//     {
//       iD: '3',
//       jobId: 'gy3yV2Vm5u',
//       userId: '3',
//       userPhoto: 'img-01.jpg',
//       terms: ' dsfgasA',
//       type: ' Per Hour',
//       coverLetter: 'SDFSDFS RTBDdfdfb dfgdfgbdfb',
//       proposalDate: '07-05-2020',
//       proposalStatus: 'wait',
//     },
//     {
//       iD: '4',
//       jobId: 'gy3yV2Vm5u',
//       userId: '4',
//       userPhoto: 'img-01.jpg',
//       terms: ' dsfgasA',
//       type: ' Per Hour',
//       coverLetter: 'SDFSDFS RTBDdfdfb dfgdfgbdfb',
//       proposalDate: '07-05-2020',
//       proposalStatus: 'wait',
//     },
//     {
//       iD: '5',
//       jobId: 'gy3yV2Vm5u',
//       userId: '5',
//       userPhoto: 'img-10.png',
//       terms: ' dsfgasA',
//       type: ' Per Hour',
//       coverLetter: 'SDFSDFS RTBDdfdfb dfgdfgbdfb',
//       proposalDate: '07-05-2020',
//       proposalStatus: 'wait',
//     },
//   ];

//   proposalList.map(
//     (fr) =>
//       (fr.userPhoto = fr.userPhoto
//         ? userPhotoPath + fr.userPhoto
//         : userDefaultIconPath),
//   );
//   return { proposalList }; //, freelancerList.totalAmountOfFreelancers};
// };
