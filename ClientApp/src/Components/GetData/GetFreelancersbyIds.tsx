import { FreelancerData } from '../Data/Data';
import { wait } from './wait';
import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
import { GetFeedbackList } from './GetFeedBackList';
import { GetUserSkillList } from './GetUserSkillList';
import { countryFlagsPath } from '../Data/GlobalValues';

// Временно

const feedBackList = GetFeedbackList('1', 3, 3);
const userSkillList = GetUserSkillList();
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
        userFeedbacks: feedBackList.filter(
          (feedback) => feedback.freelancerId === '1',
        ),

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
            iD: '1',
            skill: { iD: '1', name: 'PHP' },
            percent: 90,
          },
          {
            iD: '1444',
            skill: { iD: '2', name: 'Website Design' },
            percent: 55,
          },
          {
            iD: '167777',
            skill: { iD: '3', name: 'HTML 5 ' },
            percent: 99,
          },

          {
            iD: '177778',
            skill: { iD: '4', name: 'Graphic Design' },
            percent: 80,
          },

          {
            iD: '166778',
            skill: { iD: '5', name: '   WordPress ' },
            percent: 75,
          },
          {
            iD: '157575',
            skill: { iD: '6', name: 'SEO' },
            percent: 35,
          },

          {
            iD: '15y7565',
            skill: { iD: '7', name: 'My SQL' },
            percent: 40,
          },

          {
            iD: '1vbnv',
            skill: { iD: '8', name: 'Content Writing' },
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
        userFeedbacks: feedBackList.filter(
          (feedback) => feedback.freelancerId === '2',
        ),

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
            iD: '1',
            skill: { iD: '3', name: 'HTML 5 ' },
            percent: 99,
          },

          {
            iD: '1555',
            skill: { iD: '5', name: '   WordPress ' },
            percent: 75,
          },
          {
            iD: '1huyghm',
            skill: { iD: '6', name: 'JavaScript' },
            percent: 35,
          },

          {
            iD: '1vnfgn',
            skill: { iD: '7', name: 'Team Managemant' },
            percent: 40,
          },

          {
            iD: '1tghrthr',
            skill: { iD: '8', name: 'jQuery' },
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
        userFeedbacks: feedBackList.filter(
          (feedback) => feedback.freelancerId === '3',
        ),

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
        userSkills: userSkillList,
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
        userFeedbacks: feedBackList.filter(
          (feedback) => feedback.freelancerId === '4',
        ),

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
        userSkills: userSkillList,
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
