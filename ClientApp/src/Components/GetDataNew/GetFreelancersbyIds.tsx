import { FreelancerData } from '../Data/Data';
import { wait } from '../GetData/wait';
import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
// import { GetFeedbackList } from '../GetDataNew/GetFeedBackList';
// import { GetUserSkillList } from '../GetDataNew/GetUserSkillList';
import { countryFlagsPath } from '../Data/GlobalValues';

// Временно

// let feedBackList; //GetFeedbackList('1', 3, 3);
// const userSkillList = GetUserSkillList();
interface extendedFreelancer extends FreelancerData {
  saved?: boolean; // it's the property of current user
}
interface FreelancersProps {
  totalAmountOfFreelancers: number;
  freelancers: extendedFreelancer[];
}
//List of freelancers buy the list of their iDs
export const GetFreelancersbyIds = async (
  iDList: string[],
): Promise<FreelancersProps> => {
  //Функция для получения списка с сервера
  //   await fetch('http://localhost:17525/api/user')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       countryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  let freelancerList: FreelancersProps = {
    totalAmountOfFreelancers: 100,
    freelancers: [
      {
        userId: '1',
        saved: true,
        userPhoto: 'img-10.png',
        firstName: 'Valentine',
        lastName: 'Mehring',
        email: 'fff',
        gender: 'male',
        userName: 'Valentine Mehring',
        userRates: '5.0',
        plusMember: true,
        feedbacksCount: 860,
        userFeedbacks: [],
        //  feedBackList.filter(
        // //   (feedback) => feedback.freelancerId === '1',
        // // ),

        joinDate: 'May 30, 2013',
        title: 'Classified Posting, Data Entry, Typing Expert',
        hourRates: '70.00 ',
        //   @valentine20658;
        country: {
          countryId: '2',
          countryFlag: countryFlagsPath + 'img-02.png',
          countryName: 'United States',
        },
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris... ',
        amountOngoingProjects: 3,
        amountCompletedProjects: 1305,
        amountCancelledProjects: 2,
        servedHours: '25K',
        userSkills: [
          {
            id: '1',
            skill: { id: '1', name: 'PHP' },
            percent: 90,
          },
          {
            id: '1444',
            skill: { id: '2', name: 'Website Design' },
            percent: 55,
          },
          {
            id: '167777',
            skill: { id: '3', name: 'HTML 5 ' },
            percent: 99,
          },

          {
            id: '177778',
            skill: { id: '4', name: 'Graphic Design' },
            percent: 80,
          },

          {
            id: '166778',
            skill: { id: '5', name: '   WordPress ' },
            percent: 75,
          },
          {
            id: '157575',
            skill: { id: '6', name: 'SEO' },
            percent: 35,
          },

          {
            id: '15y7565',
            skill: { id: '7', name: 'My SQL' },
            percent: 40,
          },

          {
            id: '1vbnv',
            skill: { id: '8', name: 'Content Writing' },
            percent: 80,
          },
        ],
        userType: { userTypeId: '1', userTypeName: 'freelancer' },
        englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
        Languages: [{ languageId: '1', languageName: 'English' }],
      },
      {
        userId: '2',
        plusMember: true,
        userPhoto: 'img-02.jpg',
        firstName: 'Valentine',
        lastName: 'Mehring',
        email: 'fff',
        gender: 'male',
        userName: 'Alfredo Bossard',
        userRates: '4.5',
        feedbacksCount: 760,
        userFeedbacks: [],
        // feedBackList.filter(
        //   (feedback) => feedback.freelancerId === '2',
        // ),

        joinDate: 'May 30, 2015',
        title: 'Classifieds Posting, Data Entry, Typing',
        hourRates: '70.00 ',
        //   @valentine20658;
        country: {
          countryId: '2',
          countryFlag: countryFlagsPath + 'img-02.png',
          countryName: 'United States',
        },
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris... ',
        amountOngoingProjects: 6,
        amountCompletedProjects: 1590,
        amountCancelledProjects: 2,
        servedHours: '25K',
        userSkills: [
          {
            id: '1',
            skill: { id: '3', name: 'HTML 5 ' },
            percent: 99,
          },

          {
            id: '1555',
            skill: { id: '5', name: '   WordPress ' },
            percent: 75,
          },
          {
            id: '1huyghm',
            skill: { id: '6', name: 'JavaScript' },
            percent: 35,
          },

          {
            id: '1vnfgn',
            skill: { id: '7', name: 'Team Managemant' },
            percent: 40,
          },

          {
            id: '1tghrthr',
            skill: { id: '8', name: 'jQuery' },
            percent: 80,
          },
        ],
        userType: { userTypeId: '1', userTypeName: 'freelancer' },
        englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
        Languages: [{ languageId: '1', languageName: 'English' }],
      },
      {
        userId: '3',
        plusMember: false,
        userPhoto: 'img-03.png',
        userName: 'Marsele Westerberg',
        firstName: 'Valentine',
        lastName: 'Mehring',
        email: 'fff',
        gender: 'male',
        userRates: '4.5',
        feedbacksCount: 760,
        userFeedbacks: [],
        // userFeedbacks: feedBackList.filter(
        //   (feedback) => feedback.freelancerId === '3',
        //
        //    ),

        joinDate: 'May 30, 2017',
        title: 'SEO/PPC Social Media Marketing Expert',
        hourRates: '44.00',
        //   @valentine20658;
        country: {
          countryId: '2',
          countryFlag: countryFlagsPath + 'img-03.png',
          countryName: 'Canada',
        },
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad       minim veniamac quis nostrud exercitation ullamco        laboris... ',
        amountOngoingProjects: 6,
        amountCompletedProjects: 1590,
        amountCancelledProjects: 2,
        servedHours: '25K',
        // userSkills: userSkillList,
        userType: { userTypeId: '1', userTypeName: 'freelancer' },
        englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
        Languages: [{ languageId: '1', languageName: 'English' }],
      },
      {
        userId: '4',
        plusMember: false,
        userPhoto: 'img-04.png',
        firstName: 'Valentine',
        lastName: 'Mehring',
        email: 'fff',
        gender: 'male',
        userName: 'Herlinda Hundley',
        userRates: '4.5',
        feedbacksCount: 760,
        userFeedbacks: [],

        joinDate: 'May 30, 2016',
        title: 'Classified Posting, Data Entry, Typing Expert',
        hourRates: '44.00',
        //   @valentine20658;
        country: {
          countryId: '2',
          countryFlag: countryFlagsPath + 'img-03.png',
          countryName: 'Canada',
        },
        description:
          ' Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad       minim veniamac quis nostrud exercitation ullamco        laboris...  ',
        amountOngoingProjects: 3,
        amountCompletedProjects: 1503,
        amountCancelledProjects: 4,
        servedHours: '25K',
        // userSkills: userSkillList,
        userType: { userTypeId: '1', userTypeName: 'freelancer' },
        englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
        Languages: [{ languageId: '1', languageName: 'English' }],
      },
    ],
  };
  freelancerList.freelancers.map(
    (fr) =>
      (fr.userPhoto = fr.userPhoto
        ? userPhotoPath + fr.userPhoto
        : userDefaultIconPath),
  );

  // console.log(
  //   freelancerList.filter((item) => (item.userId = '1'))[0].userPhoto),

  return freelancerList;
};
