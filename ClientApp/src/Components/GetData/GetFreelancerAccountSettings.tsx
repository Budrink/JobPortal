import { FreelancerData, AccountSettings } from '../Data/Data';
import { wait } from './wait';
import {
  userPhotoPath,
  ProjectImgPath,
  ProjectDefaultImgPath,
} from '../Data/GlobalValues';
import { GetFeedbackList } from './GetFeedBackList';
import { GetUserSkillList } from './GetUserSkillList';
import { GetCraftedProjectList } from './GetCraftedProjectList';
import {
  countryFlagsPath,
  amountOfFeedbackOnPage,
  amountOfCraftedProjectsOnPage,
} from '../Data/GlobalValues';
// Временно

interface FreelancerAccountSettings {
  userId: string;
  userName: string;
  email: string;
  password: string;
  accountSettings?: AccountSettings;
}

export const GetFreelancerAccountSettings = async (
  freelancerId: string,
): Promise<FreelancerAccountSettings> => {
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

  let Settings: FreelancerAccountSettings = {
    userId: '1',
    email: 'fff',

    userName: 'Valentine Mehring',
    password: 'sss',
    accountSettings: {
      iD: '1',
      publicProfile: true,
      sharePhoto: true,
      showFeedback: true,
      profileSearchible: false,
      disableAccount: false,
      // language: { languageId: 'L4', languageName: '' },
      currency: undefined,
      sendWeeklyAlerts: true,
      sendBonusAlerts: true,
      forwardMessages: true,
      shareSecurityAlerts: true,
      disableTemporarily: false,
    },
  };
  return Settings;
};
