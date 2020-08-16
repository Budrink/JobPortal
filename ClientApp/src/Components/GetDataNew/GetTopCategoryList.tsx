import { TopCategoryData } from '../Data/Data';
import { http } from '../Data/Http';
import {
  categorySliderPath,
  categorySliderDefalutIconPath,
  amountOfTopcategories,
} from '../Data/GlobalValues';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const getTopCategoryList = async (): Promise<any> => {
  let categoryList: TopCategoryData[] = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Skills/top?amountOfItems=${amountOfTopcategories}`,
      method: 'Get',
    });

    // console.log(response);
    if (response.parsedBody !== null) {
      categoryList = response.parsedBody;
      categoryList.map(
        (cat) =>
          (cat.topCategory.sliderImg = cat.topCategory.sliderImg
            ? categorySliderPath + cat.topCategory.sliderImg
            : categorySliderDefalutIconPath),
      );
    }
    // console.log(skillList);
  } catch (e) {
    console.log(e);
  }

  return categoryList;
};

// categoryList = [
//   {
//     topCategoryId: 'TC1',
//     topCategory: {
//       name: 'Graphic & Design',
//       id: '1',
//       img: 'img-01.png',
//       sliderImg: 'img-01.png',
//     },
//     itemsAmount: '523,112',
//   },
//   {
//     topCategoryId: 'TC2',
//     topCategory: { name: 'Digital Marketing', id: '3' },
//     itemsAmount: '523,112',
//   },
//   {
//     topCategoryId: 'TC3',
//     itemsAmount: '325,442',
//     topCategory: { name: 'Writing & Translation', id: '4' },
//   },
//   {
//     topCategoryId: 'TC4',
//     itemsAmount: '421,305',
//     topCategory: { name: 'Video & Animation', id: '5' },
//   },

//   // {
//   //   topCategoryId: 'TC5',
//   //   itemsAmount: '421,305',
//   //   topCategory: { name: ' Music & Audio', id: '6' },
//   // },
//   // {
//   //   topCategoryId: 'TC6',
//   //   itemsAmount: '421,305',
//   //   topCategory: { name: 'Programing & Tech', id: '7' },
//   // },
// ];
//   categoryList.map(
//     (cat) =>
//       (cat.topCategory.sliderImg = cat.topCategory.sliderImg
//         ? categorySliderPath + cat.topCategory.sliderImg
//         : categorySliderDefalutIconPath),
//   );
//   return categoryList;
// };
