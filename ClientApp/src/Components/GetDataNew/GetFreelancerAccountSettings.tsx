import { AccountSettings } from '../Data/Data';
import { http } from '../Data/Http';

interface FreelancerAccountSettings {
  userId: string;
  userName: string;
  email: string;
  password: string;
  accountSettings?: AccountSettings;
}

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const GetFreelancerAccountSettings = async (): Promise<
  FreelancerAccountSettings
> => {
  let settings: FreelancerAccountSettings;
  settings = {
    userId: '',
    userName: '',
    password: '',
    email: '',
    accountSettings: undefined,
  };
  if (localStorage.getItem('login') !== 'true') {
    return settings;
  }
  const userId = localStorage.getItem('userId');
  console.log(userId);
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Freelancer/${userId}/accountsettings`,
      method: 'Get',
    });
    //  console.log(response);
    if (response.parsedBody !== null) {
      settings = response.parsedBody;
      console.log(settings);
    }
  } catch (e) {
    console.log(e);
  }

  //   countryList.map(
  //     (country) =>
  //       (country.countryFlag =
  //         country.countryFlag === null
  //           ? flagDefaultPath
  //           : countryFlagsPath + country.countryFlag),
  //   );
  //   return countryList;
  // };

  return settings;
};

// let Settings: FreelancerAccountSettings = {
//   userId: '1',
//   email: 'fff',

//   userName: 'Valentine Mehring',
//   password: 'sss',
//   accountSettings: {
//     iD: '1',
//     publicProfile: true,
//     sharePhoto: true,
//     showFeedback: true,
//     profileSearchible: false,
//     disableAccount: false,
//     // language: { languageId: 'L4', languageName: '' },
//     currency: undefined,
//     sendWeeklyAlerts: true,
//     sendBonusAlerts: true,
//     forwardMessages: true,
//     shareSecurityAlerts: true,
//     disableTemporarily: false,
//   },
// };
//   return Settings;
// };
