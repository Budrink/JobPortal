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

export const GetFreelancerAccountSettings = async (
  userId: string,
): Promise<FreelancerAccountSettings> => {
  let settings: FreelancerAccountSettings;
  settings = {
    userId: userId,
    userName: '',
    password: '',
    email: '',
    accountSettings: undefined,
  };

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Countries`,
      method: 'Get',
    });
    //  console.log(response);
    if (response.parsedBody !== null) {
      settings = response.parsedBody;
      //   console.log(countryList);
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

  return Settings;
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
