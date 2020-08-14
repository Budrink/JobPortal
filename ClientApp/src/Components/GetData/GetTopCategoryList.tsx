import { TopCategoryData } from '../Data/Data';
import { wait } from './wait';
import {
  categorySliderPath,
  categorySliderDefalutIconPath,
} from '../Data/GlobalValues';
// interface Props {
//   cat0: TopCategoryData;
//   cat1: TopCategoryData;
//   cat2: TopCategoryData;
//   cat3: TopCategoryData;
//   cat4: TopCategoryData;
//   cat5: TopCategoryData;
// }
// export const getTopCategoryList = async (): Promise<Props> => {
export const getTopCategoryList = async (): Promise<TopCategoryData[]> => {
  let categoryList: TopCategoryData[] = [];

  categoryList.map(
    (cat) =>
      (cat.topCategory.sliderImg = cat.topCategory.sliderImg
        ? categorySliderPath + cat.topCategory.sliderImg
        : categorySliderDefalutIconPath),
  );
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
