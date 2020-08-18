import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
import { http } from '../Data/Http';

// interface FreelancerAccountSettings {
//   userId: string;
//   userName: string;
//   email: string;
//   password: string;
//   accountSettings?: AccountSettings;
// }

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
//userId- the id of user whom correspondents we get
export const GetCorrespondentList = async (): Promise<any> => {
  let correspondentList = {
    totalAmountOfCorrespondents: 0,
    correspondents: [
      {
        userId: '',
        plusMember: false,
        userPhoto: '',
        firstName: '',
        lastName: '',
        userRates: '',
        feedbacksCount: 0,
        joinDate: '',
        title: '',
        newMessages: false,
      },
    ],
  };

  if (localStorage.getItem('login') !== 'true') {
    return correspondentList;
  }
  const userId = localStorage.getItem('userId');
  // console.log(userId);
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Messages/correspondentsList/${userId}`,
      method: 'Get',
    });
    // console.log(response);
    if (response.parsedBody !== null) {
      correspondentList = response.parsedBody;
      console.log(correspondentList);
    }
  } catch (e) {
    console.log(e);
  }

  if (correspondentList.correspondents !== undefined) {
    correspondentList.correspondents.map(
      (corr) =>
        (corr.userPhoto = corr.userPhoto
          ? userPhotoPath + corr.userPhoto
          : userDefaultIconPath),
    );
  }
  return correspondentList;
};
// totalAmountOfCorrespondents: 45,
// correspondents: [
//   {
//     userId: '121',
//     plusMember: true,
//     userPhoto: 'img-10.png',
//     firstName: 'Valentine',
//     lastName: 'Mehring',
//     userRates: '3.0',

//     feedbacksCount: 860,
//     joinDate: 'May 30, 2013',
//     title: 'Classified Posting, Data Entry, Typing Expert',
//     newMessages: true,
//     //   @valentine20658;
//   },
// {
//   userId: '2',
//   plusMember: true,
//   userPhoto: 'img-02.jpg',
//   firstName: 'Westerberg',
//   lastName: 'Mehring',
//   userRates: '4.5',
//   feedbacksCount: 760,

//   joinDate: 'May 30, 2015',
//   title: 'Classifieds Posting, Data Entry, Typing',
//   newMessages: true,
//   //   @valentine20658;
//     // },
//     {
//       userId: '3',
//       plusMember: false,
//       userPhoto: 'img-03.png',
//       firstName: 'Marsele',
//       lastName: 'Westerberg',
//       userRates: '4.2',
//       feedbacksCount: 760,

//       joinDate: 'May 30, 2017',
//       title: 'SEO/PPC Social Media Marketing Expert',
//       newMessages: true,
//       //   @valentine20658;
//     },
//     {
//       userId: '4',
//       plusMember: false,
//       userPhoto: 'img-04.jpg',
//       firstName: 'Herlinda',
//       lastName: 'Hundley',
//       userRates: '3.7',
//       feedbacksCount: 760,
//       joinDate: 'May 30, 2016',
//       title: 'Classified Posting, Data Entry, Typing Expert',
//       newMessages: false,
//       //   @valentine20658;
//     },
//     {
//       userId: '5',
//       plusMember: false,
//       userPhoto: 'img-10.png',
//       firstName: 'Mehring',
//       lastName: 'Valentine',

//       userRates: '5.0',
//       feedbacksCount: 860,
//       joinDate: 'May 30, 2013',
//       title: 'Classified Posting, Data Entry, Typing Expert',
//       newMessages: true,
//     },
//     {
//       userId: '6',
//       plusMember: false,
//       userPhoto: 'img-02.jpg',
//       firstName: 'Valentine',
//       lastName: 'Mehring',
//       userRates: '4.1',
//       feedbacksCount: 760,
//       joinDate: 'May 30, 2015',
//       title: 'Classifieds Posting, Data Entry, Typing',
//       newMessages: false,
//     },
//     {
//       userId: '7',
//       plusMember: false,
//       userPhoto: 'img-03.jpg',
//       firstName: 'Valentine',
//       lastName: 'Mehring',
//       userRates: '4.5',
//       feedbacksCount: 760,
//       joinDate: 'May 30, 2017',
//       title: 'SEO/PPC Social Media Marketing Expert',
//       newMessages: false,
//     },
//     {
//       userId: '8',
//       plusMember: true,
//       userPhoto: 'img-04.jpg',
//       firstName: 'Valentine',
//       lastName: 'Mehring',
//       userRates: '4.5',
//       feedbacksCount: 760,
//       joinDate: 'May 30, 2016',
//       title: 'Classified Posting, Data Entry, Typing Expert',
//       newMessages: false,
//     },
//     {
//       userId: '9',
//       plusMember: false,
//       userPhoto: 'img-10.png',
//       firstName: 'Valentine',
//       lastName: 'Mehring',

//       userRates: '5.0',
//       feedbacksCount: 860,

//       joinDate: 'May 30, 2013',
//       title: ' Data Entry, Typing Expert',
//       newMessages: false,
//     },
//     {
//       userId: '10',
//       plusMember: false,
//       userPhoto: 'img-02.jpg',
//       firstName: 'Valentine',
//       lastName: 'Mehring',

//       userRates: '4.5',
//       feedbacksCount: 760,

//       joinDate: 'May 30, 2015',
//       title: 'Classifieds Posting, Data Entry, Typing',
//       newMessages: false,
//     },
//     {
//       userId: '11',
//       plusMember: false,
//       userPhoto: 'img-03.jpg',
//       firstName: 'Valentine',
//       lastName: 'Mehring',

//       userRates: '4.5',
//       feedbacksCount: 760,

//       joinDate: 'May 30, 2017',
//       title: 'SEO/PPC Social Media Marketing Expert',
//       newMessages: false,
//     },
//     {
//       userId: '12',
//       plusMember: false,
//       userPhoto: 'img-04.jpg',
//       firstName: 'Valentine',
//       lastName: 'Mehring',

//       userRates: '4.5',
//       feedbacksCount: 760,

//       joinDate: 'May 30, 2016',
//       title: 'Classified Posting, Data Entry, Typing Expert',
//       newMessages: false,
//     },
//   ],
// };
//   correspondentList.correspondents.map(
//     (corr) =>
//       (corr.userPhoto = corr.userPhoto
//         ? userPhotoPath + corr.userPhoto
//         : userDefaultIconPath),
//   );

//   // console.log(
//   //   freelancerList.filter((item) => (item.userId = '1'))[0].userPhoto),

//   return correspondentList;
// };
