import { FollowerData } from '../Data/Data';
import { wait } from './wait';
import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
export const GetFollowerList = async (
  companyId: string,
): Promise<FollowerData[]> => {
  // export const getfollowerList = (): followerData[] => {
  let FollowerList: FollowerData[] = [];

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       followerList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  FollowerList = [
    {
      userId: '1',
      userName: 'Ramona Acedo',
      userPhoto: 'img-10.png',
    },
    {
      userId: '2',
      userName: 'Bruna Perera',
      userPhoto: 'img-02.jpg',
    },
    {
      userId: '3',
      userName: 'Sophie Roman',
      userPhoto: 'img-03.jpg',
    },
    {
      userId: '4',
      userName: 'Danica Letourneau',
    },
    {
      userId: '5',
      userName: 'Arturo Doolin',
      userPhoto: 'img-05.png',
    },
    {
      userId: '6',
      userName: 'Dominique Llanos',
    },
    {
      userId: '7',
      userName: 'Fannie Touchet',
      userPhoto: 'img-07.png',
    },
    {
      userId: '8',
      userName: 'Ramona Acedo',
      userPhoto: 'img-08.png',
    },
    {
      userId: '9',
      userName: 'Danica Letourneau',
    },
  ];

  FollowerList.map(
    (follower) =>
      (follower.userPhoto = follower.userPhoto
        ? userPhotoPath + follower.userPhoto
        : userDefaultIconPath),
  );

  return FollowerList;
};
