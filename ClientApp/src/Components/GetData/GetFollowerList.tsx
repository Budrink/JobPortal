import { FollowerData } from '../Data/Data';
import { http } from '../Data/Http';
import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const GetFollowerList = async (companyId: string): Promise<any> => {
  let FollowerList: FollowerData[] = [];
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Company/${companyId}/followers`,
      method: 'Post',
    });

    // console.log(response);
    if (response.parsedBody !== null) {
      FollowerList = response.parsedBody;
    }
    console.log(FollowerList);
  } catch (e) {
    console.log(e);
  }

  FollowerList.map(
    (follower) =>
      (follower.userPhoto = follower.userPhoto
        ? userPhotoPath + follower.userPhoto
        : userDefaultIconPath),
  );

  return FollowerList;
};

// FollowerList = [
//   {
//     userId: '1',
//     userName: 'Ramona Acedo',
//     userPhoto: 'img-10.png',
//   },
//   {
//     userId: '2',
//     userName: 'Bruna Perera',
//     userPhoto: 'img-02.jpg',
//   },
//   {
//     userId: '3',
//     userName: 'Sophie Roman',
//     userPhoto: 'img-03.jpg',
//   },
//   {
//     userId: '4',
//     userName: 'Danica Letourneau',
//   },
//   {
//     userId: '5',
//     userName: 'Arturo Doolin',
//     userPhoto: 'img-05.png',
//   },
//   {
//     userId: '6',
//     userName: 'Dominique Llanos',
//   },
//   {
//     userId: '7',
//     userName: 'Fannie Touchet',
//     userPhoto: 'img-07.png',
//   },
//   {
//     userId: '8',
//     userName: 'Ramona Acedo',
//     userPhoto: 'img-08.png',
//   },
//   {
//     userId: '9',
//     userName: 'Danica Letourneau',
//   },
// ];

//   FollowerList.map(
//     (follower) =>
//       (follower.userPhoto = follower.userPhoto
//         ? userPhotoPath + follower.userPhoto
//         : userDefaultIconPath),
//   );

//   return FollowerList;
// };
