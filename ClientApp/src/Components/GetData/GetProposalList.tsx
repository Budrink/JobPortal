import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
import { http } from '../Data/Http';

interface proposal {
  iD: string;
  jobId: string;
  userId: string;
  userPhoto: string;
  terms: string;
  type: string;
  coverLetter: string;
  proposalDate: string;
  proposalStatus: string;
}

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const GetProposalList = async (jobId: string): Promise<any> => {
  let proposalList: proposal[];
  proposalList = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Proposal/job/${jobId}`,
      method: 'Get',
    });

    if (response.parsedBody !== null) {
      proposalList = response.parsedBody;
      if (proposalList !== undefined) {
        if (proposalList.length > 0)
          proposalList.map(
            (pr) =>
              (pr.userPhoto = pr.userPhoto
                ? userPhotoPath + pr.userPhoto
                : userDefaultIconPath),
          );
      }
    }
  } catch (e) {
    console.log(e);
  }
  return proposalList;
};

//  {
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
//    },
//   ];

//  proposalList.map(
//     (fr) =>
//       (fr.userPhoto = fr.userPhoto
//         ? userPhotoPath + fr.userPhoto
//         : userDefaultIconPath),
//   );
//   return { proposalList }; //, freelancerList.totalAmountOfFreelancers};
// };
