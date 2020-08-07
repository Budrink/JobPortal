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

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       categoryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  categoryList = [
    {
      topCategoryId: 'TC1',
      topCategory: {
        name: 'Graphic & Design',
        id: '1',
        img: 'img-01.png',
        sliderImg: 'img-01.png',
      },
      itemsAmount: '523,112',
    },
    {
      topCategoryId: 'TC2',
      topCategory: { name: 'Digital Marketing', id: '3' },
      itemsAmount: '523,112',
    },
    {
      topCategoryId: 'TC3',
      itemsAmount: '325,442',
      topCategory: { name: 'Writing & Translation', id: '4' },
    },
    {
      topCategoryId: 'TC4',
      itemsAmount: '421,305',
      topCategory: { name: 'Video & Animation', id: '5' },
    },

    // {
    //   topCategoryId: 'TC5',
    //   itemsAmount: '421,305',
    //   topCategory: { name: ' Music & Audio', id: '6' },
    // },
    // {
    //   topCategoryId: 'TC6',
    //   itemsAmount: '421,305',
    //   topCategory: { name: 'Programing & Tech', id: '7' },
    // },
  ];
  categoryList.map(
    (cat) =>
      (cat.topCategory.sliderImg = cat.topCategory.sliderImg
        ? categorySliderPath + cat.topCategory.sliderImg
        : categorySliderDefalutIconPath),
  );

  // let cat0 = categoryList[0] ? categoryList[0] : null;
  // let cat1 = categoryList[1] ? categoryList[1] : null;
  // let cat2 = categoryList[2] ? categoryList[2] : null;
  // let cat3 = categoryList[3] ? categoryList[3] : null;
  // let cat4 = categoryList[4] ? categoryList[4] : null;
  // let cat5 = categoryList[5] ? categoryList[5] : null;

  // const cats = { cat0, cat1, cat2, cat3, cat4, cat5 };
  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  // window.alert(JSON.stringify(categoryList));
  // console.log(JSON.stringify(categoryList));
  return categoryList;
};
