import { UserType } from '../Data/Data';

import { http } from '../Data/Http';
export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const getUserTypeList = async (): Promise<UserType[]> => {
  // export const getuserTypeList = (): userTypeData[] => {
  let userTypeList: UserType[] = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `UserTypes`,
      method: 'Get',
    });

    if (response.parsedBody !== null) {
      userTypeList = response.parsedBody;
    }
  } catch (e) {
    console.log(e);
  }

  return userTypeList;
};

// userTypeList = [
//   {
//     userTypeId: 'UT1',
//     userTypeName: 'Pro Independent Freelancers',
//   },
//   {
//     userTypeId: 'UT2',
//     userTypeName: 'Pro Agency Freelancers',
//   },
//   {
//     userTypeId: 'UT3',
//     userTypeName: 'Independent Freelancers',
//   },
//   {
//     userTypeId: 'UT4',
//     userTypeName: 'Agency Freelancers',
//   },
//   {
//     userTypeId: 'UT5',
//     userTypeName: 'New Rising Talent',
//   },
// ];

// // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
// return userTypeList;
//};
