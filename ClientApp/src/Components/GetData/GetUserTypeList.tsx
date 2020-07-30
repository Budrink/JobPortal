import { UserType } from '../Data/Data';
import { wait } from './wait';

export const getUserTypeList = async (): Promise<UserType[]> => {
  // export const getuserTypeList = (): userTypeData[] => {
  let userTypeList: UserType[] = [];

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       userTypeList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  userTypeList = [
    {
      userTypeId: 'UT1',
      userTypeName: 'Pro Independent Freelancers',
    },
    {
      userTypeId: 'UT2',
      userTypeName: 'Pro Agency Freelancers',
    },
    {
      userTypeId: 'UT3',
      userTypeName: 'Independent Freelancers',
    },
    {
      userTypeId: 'UT4',
      userTypeName: 'Agency Freelancers',
    },
    {
      userTypeId: 'UT5',
      userTypeName: 'New Rising Talent',
    },
  ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return userTypeList;
};
