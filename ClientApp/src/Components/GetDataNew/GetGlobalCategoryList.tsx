import { GlobalCategoryData } from '../Data/Data';
import {
  globalCategoryPath,
  globalCategoryDefalutIconPath,
} from '../Data/GlobalValues';
import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const GetGlobalCategoryList = async (
  amountOfCategories?: number,
): Promise<any> => {
  // export const getCategoryList = (): CategoryData[] => {
  let categoryList: GlobalCategoryData[] = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `EnglishLevel`,
      method: 'Get',
    });

    console.log(response);
    if (response.parsedBody !== null) {
      categoryList = response.parsedBody;
    }
    // console.log(skillList);
  } catch (e) {
    console.log(e);
  }

  categoryList.map(
    (cat) =>
      (cat.globalCategoryImg = cat.globalCategoryImg
        ? globalCategoryPath + cat.globalCategoryImg
        : globalCategoryDefalutIconPath),
  );

  return categoryList;
};

// categoryList = [
//   {
//     globalCategoryId: 'GC1',
//     globalCategoryName: 'Mobiles',
//     globalCategoryImg: 'img-01.png',
//     description:
//       'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
//   },

//   {
//     globalCategoryId: 'GC2',
//     globalCategoryName: 'Digital Marketing',
//     globalCategoryImg: 'img-08.png',
//     description:
//       'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
//   },
//   {
//     globalCategoryId: 'GC3',
//     globalCategoryName: 'Writing & Translation',
//     globalCategoryImg: 'img-01.png',
//     description:
//       'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
//   },
//   {
//     globalCategoryId: 'GC4',
//     globalCategoryName: ' Video & Animation',
//     globalCategoryImg: 'img-01.png',
//     description:
//       'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
//   },
//   {
//     globalCategoryId: 'GC5',
//     globalCategoryName: 'Programming & Tech',
//     globalCategoryImg: 'img-01.png',
//     description:
//       'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
//   },
//   {
//     globalCategoryId: 'GC6',
//     globalCategoryName: 'Music & Audio',
//     globalCategoryImg: 'img-01.png',
//     description:
//       'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
//   },
//   {
//     globalCategoryId: 'GC7',
//     globalCategoryName: 'Business',
//     globalCategoryImg: 'img-01.png',
//     description:
//       'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
//   },
//   {
//     globalCategoryId: 'GC8',
//     globalCategoryName: 'Lifestyle',
//     globalCategoryImg: 'img-01.png',
//     description:
//       'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
//   },
// ];

// categoryList.map(
//   (cat) =>
//     (cat.globalCategoryImg = cat.globalCategoryImg
//       ? globalCategoryPath + cat.globalCategoryImg
//       : globalCategoryDefalutIconPath),
// );
// if (amountOfCategories === undefined) {
//   return categoryList;
// } else {
//   return categoryList.filter(
//     (x) => x.globalCategoryId <= 'GC' + amountOfCategories,
//   );
// }
// .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
// };
