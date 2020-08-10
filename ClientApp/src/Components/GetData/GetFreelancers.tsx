import { FreelancerData } from '../Data/Data';
// import { wait } from './wait';
// import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
// // import { GetFeedbackList } from '../GetDataNew/GetFeedBackList';
import { GetUserSkillList } from './GetUserSkillList';
// import { countryFlagsPath } from '../Data/GlobalValues';

// Временно

// // const feedBackList = GetFeedbackList('1', 3, 3);
// const userSkillList = GetUserSkillList();
// //Add property saved by currentUser
// interface extendedFreelancer extends FreelancerData {
//   saved?: boolean;
// }
// interface FreelancersProps {
//   totalAmountOfFreelancers: number;
//   freelancers: extendedFreelancer[];
// }
// export const GetFreelancers = async (): Promise<FreelancersProps> => {
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

//   // let freelancerList: FreelancersProps = {
//   //   totalAmountOfFreelancers: 100,
//   //   freelancers: [
//   //     {
//   //       saved: true,
//   //       userId: '1',
//   //       userPhoto: 'img-10.png',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Valentine Mehring',
//   //       userRates: '3.0',
//   //       plusMember: true,
//   //       feedbacksCount: 860,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '1',
//   //       ),

//   //       joinDate: 'May 30, 2013',
//   //       title: 'Classified Posting, Data Entry, Typing Expert',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-02.png',
//   //         countryName: 'United States',
//   //       },
//   //       description:
//   //         'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris... ',
//   //       amountOngoingProjects: 3,
//   //       amountCompletedProjects: 1305,
//   //       amountCancelledProjects: 2,
//   //       servedHours: '25K',
//   //       userSkills: [
//   //         {
//   //           id: '1',
//   //           skill: { id: '1', name: 'PHP' },
//   //           percent: 90,
//   //         },
//   //         {
//   //           id: '156',
//   //           skill: { id: '2', name: 'Website Design' },
//   //           percent: 55,
//   //         },
//   //         {
//   //           id: '2',
//   //           skill: { id: '3', name: 'HTML 5 ' },
//   //           percent: 99,
//   //         },

//   //         {
//   //           id: '13',
//   //           skill: { id: '4', name: 'Graphic Design' },
//   //           percent: 80,
//   //         },

//   //         {
//   //           id: '14',
//   //           skill: { id: '5', name: '   WordPress ' },
//   //           percent: 75,
//   //         },
//   //         {
//   //           id: '15',
//   //           skill: { id: '6', name: 'SEO' },
//   //           percent: 35,
//   //         },

//   //         {
//   //           id: '18',
//   //           skill: { id: '7', name: 'My SQL' },
//   //           percent: 40,
//   //         },

//   //         {
//   //           id: '19',
//   //           skill: { id: '8', name: 'Content Writing' },
//   //           percent: 80,
//   //         },
//   //       ],
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '2',
//   //       plusMember: true,
//   //       userPhoto: 'img-02.jpg',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Alfredo Bossard',
//   //       userRates: '4.5',
//   //       feedbacksCount: 760,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '2',
//   //       ),

//   //       joinDate: 'May 30, 2015',
//   //       title: 'Classifieds Posting, Data Entry, Typing',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-02.png',
//   //         countryName: 'United States',
//   //       },
//   //       description:
//   //         'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris... ',
//   //       amountOngoingProjects: 6,
//   //       amountCompletedProjects: 1590,
//   //       amountCancelledProjects: 2,
//   //       servedHours: '25K',
//   //       userSkills: [
//   //         {
//   //           id: '13',
//   //           skill: { id: '3', name: 'HTML 5 ' },
//   //           percent: 99,
//   //         },

//   //         {
//   //           id: '15',
//   //           skill: { id: '5', name: '   WordPress ' },
//   //           percent: 75,
//   //         },
//   //         {
//   //           id: '1555',
//   //           skill: { id: '6', name: 'JavaScript' },
//   //           percent: 35,
//   //         },

//   //         {
//   //           id: '155555',
//   //           skill: { id: '7', name: 'Team Managemant' },
//   //           percent: 40,
//   //         },

//   //         {
//   //           id: '190999',
//   //           skill: { id: '8', name: 'jQuery' },
//   //           percent: 80,
//   //         },
//   //       ],
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '3',
//   //       plusMember: false,
//   //       userPhoto: 'img-03.png',
//   //       userName: 'Marsele Westerberg',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userRates: '4.2',
//   //       feedbacksCount: 760,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '3',
//   //       ),

//   //       joinDate: 'May 30, 2017',
//   //       title: 'SEO/PPC Social Media Marketing Expert',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-03.png',
//   //         countryName: 'Canada',
//   //       },
//   //       description:
//   //         'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad       minim veniamac quis nostrud exercitation ullamco        laboris... ',
//   //       amountOngoingProjects: 6,
//   //       amountCompletedProjects: 1590,
//   //       amountCancelledProjects: 2,
//   //       servedHours: '25K',
//   //       userSkills: userSkillList,
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '4',
//   //       plusMember: false,
//   //       userPhoto: 'img-04.png',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Herlinda Hundley',
//   //       userRates: '3.7',
//   //       feedbacksCount: 760,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '4',
//   //       ),

//   //       joinDate: 'May 30, 2016',
//   //       title: 'Classified Posting, Data Entry, Typing Expert',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-03.png',
//   //         countryName: 'Canada',
//   //       },
//   //       description:
//   //         ' Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad       minim veniamac quis nostrud exercitation ullamco        laboris...  ',
//   //       amountOngoingProjects: 3,
//   //       amountCompletedProjects: 1503,
//   //       amountCancelledProjects: 4,
//   //       servedHours: '25K',
//   //       userSkills: userSkillList,
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '5',
//   //       plusMember: false,
//   //       userPhoto: 'img-10.png',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Valentine Mehring',
//   //       userRates: '5.0',
//   //       feedbacksCount: 860,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '5',
//   //       ),

//   //       joinDate: 'May 30, 2013',
//   //       title: 'Classified Posting, Data Entry, Typing Expert',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-02.png',
//   //         countryName: 'United States',
//   //       },
//   //       description:
//   //         'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad       minim veniamac quis nostrud exercitation ullamco        laboris... ',
//   //       amountOngoingProjects: 3,
//   //       amountCompletedProjects: 1305,
//   //       amountCancelledProjects: 2,
//   //       servedHours: '25K',
//   //       userSkills: userSkillList,
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '6',
//   //       plusMember: false,
//   //       userPhoto: 'img-02.png',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Alfredo Bossard',
//   //       userRates: '4.1',
//   //       feedbacksCount: 760,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '6',
//   //       ),

//   //       joinDate: 'May 30, 2015',
//   //       title: 'Classifieds Posting, Data Entry, Typing',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-02.png',
//   //         countryName: 'United States',
//   //       },
//   //       description:
//   //         'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris... ',
//   //       amountOngoingProjects: 6,
//   //       amountCompletedProjects: 1590,
//   //       amountCancelledProjects: 2,
//   //       servedHours: '25K',
//   //       userSkills: userSkillList,
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '7',
//   //       plusMember: false,
//   //       userPhoto: 'img-03.jpg',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Marsele Westerberg',
//   //       userRates: '4.5',
//   //       feedbacksCount: 760,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '7',
//   //       ),

//   //       joinDate: 'May 30, 2017',
//   //       title: 'SEO/PPC Social Media Marketing Expert',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-03.png',
//   //         countryName: 'Canada',
//   //       },
//   //       description:
//   //         'Excepteur sint occaecat cupidatat nonproident, saeunt in culpa qui officia deserunt mollit nim id est laborum. Seden utem perspiciatis undesieu omnis iste natus error sit voluptatem.   Accusantium doque laudantium, totam rem aiam eaqueiu ipsa quae ab illoion inventore veritatisetm quasitea architecto beataea dictaed quia couuntur magni dolores eos quist ratione vtatem seque nesnt. Neque porro quamest quioremas ipsum  uiatem dolor sitem amet conctetur adipisci velit sedate quianon.   Excepteur sint occaecat cupidatat non proident, saeunt in culpa qui officia deserunt mollit anim id est laborum. Seden utem perspiciatis undesieu  omnis iste natus error sit voluptatem.   Accusantium doque laudantium, totam rem aiam eaqueiu ipsa quae ab illoion inventore veritatisetm quasitea architecto beataea dictaed quia couuntur magni dolores eos quist ratione vtatem seque nesnt. Neque porro quamest quioremas ipsum quiatem dolor sitem amet conctetur adipisci velit sedate quianon.',
//   //       amountOngoingProjects: 6,
//   //       amountCompletedProjects: 1590,
//   //       amountCancelledProjects: 2,
//   //       servedHours: '25K',
//   //       userSkills: userSkillList,
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '8',
//   //       plusMember: true,
//   //       userPhoto: 'img-04.jpg',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Herlinda Hundley',
//   //       userRates: '4.5',
//   //       feedbacksCount: 760,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '8',
//   //       ),

//   //       joinDate: 'May 30, 2016',
//   //       title: 'Classified Posting, Data Entry, Typing Expert',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-03.png',
//   //         countryName: 'Canada',
//   //       },
//   //       description:
//   //         'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris... ',
//   //       amountOngoingProjects: 3,
//   //       amountCompletedProjects: 1503,
//   //       amountCancelledProjects: 4,
//   //       servedHours: '25K',
//   //       userSkills: userSkillList,
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '9',
//   //       plusMember: false,
//   //       userPhoto: 'img-10.jpg',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Valentine Mehring',
//   //       userRates: '5.0',
//   //       feedbacksCount: 860,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '9',
//   //       ),

//   //       joinDate: 'May 30, 2013',
//   //       title: ' Data Entry, Typing Expert',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-02.png',
//   //         countryName: 'United States',
//   //       },
//   //       description:
//   //         'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris... ',
//   //       amountOngoingProjects: 3,
//   //       amountCompletedProjects: 1305,
//   //       amountCancelledProjects: 2,
//   //       servedHours: '25K',
//   //       userSkills: userSkillList,
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '10',
//   //       plusMember: false,
//   //       userPhoto: 'img-02.jpg',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Alfredo Bossard',
//   //       userRates: '4.5',
//   //       feedbacksCount: 760,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '10',
//   //       ),

//   //       joinDate: 'May 30, 2015',
//   //       title: 'Classifieds Posting, Data Entry, Typing',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-02.png',
//   //         countryName: 'United States',
//   //       },
//   //       description:
//   //         'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris... ',
//   //       amountOngoingProjects: 6,
//   //       amountCompletedProjects: 1590,
//   //       amountCancelledProjects: 2,
//   //       servedHours: '25K',
//   //       userSkills: userSkillList,
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '11',
//   //       plusMember: false,
//   //       userPhoto: 'img-03.jpg',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Marsele Westerberg',
//   //       userRates: '4.5',
//   //       feedbacksCount: 760,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '11',
//   //       ),

//   //       joinDate: 'May 30, 2017',
//   //       title: 'SEO/PPC Social Media Marketing Expert',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-03.png',
//   //         countryName: 'Canada',
//   //       },
//   //       description:
//   //         'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris... ',
//   //       amountOngoingProjects: 6,
//   //       amountCompletedProjects: 1590,
//   //       amountCancelledProjects: 2,
//   //       servedHours: '25K',
//   //       userSkills: userSkillList,
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //     {
//   //       userId: '12',
//   //       plusMember: false,
//   //       userPhoto: 'img-04.jpg',
//   //       firstName: 'Valentine',
//   //       lastName: 'Mehring',
//   //       email: 'fff',
//   //       gender: 'male',
//   //       userName: 'Herlinda Hundley',
//   //       userRates: '4.5',
//   //       feedbacksCount: 760,
//   //       userFeedbacks: feedBackList.filter(
//   //         (feedback) => feedback.freelancerId === '12',
//   //       ),

//   //       joinDate: 'May 30, 2016',
//   //       title: 'Classified Posting, Data Entry, Typing Expert',
//   //       hourRates: '$44.00 / hr',
//   //       //   @valentine20658;
//   //       country: {
//   //         countryId: '2',
//   //         countryFlag: countryFlagsPath + 'img-03.png',
//   //         countryName: 'Canada',
//   //       },
//   //       description:
//   //         'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris... ',
//   //       amountOngoingProjects: 3,
//   //       amountCompletedProjects: 1503,
//   //       amountCancelledProjects: 4,
//   //       servedHours: '25K',
//   //       userSkills: userSkillList,
//   //       userType: { userTypeId: '1', userTypeName: 'freelancer' },
//   //       englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//   //       Languages: [{ languageId: '1', languageName: 'English' }],
//   //     },
//   //   ],
//   // };
//   // freelancerList.freelancers.map(
//   //   (fr) =>
//   //     (fr.userPhoto = fr.userPhoto
//   //       ? userPhotoPath + fr.userPhoto
//   //       : userDefaultIconPath),
//   // );

//   // // console.log(
//   // //   freelancerList.filter((item) => (item.userId = '1'))[0].userPhoto),

//   // return freelancerList;
// };
