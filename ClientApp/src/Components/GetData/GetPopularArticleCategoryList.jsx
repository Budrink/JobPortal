import { wait } from './wait';

// export const getTopCategoryList = async (): Promise<Props> => {
export const GetPopularArticleCategoryList = async () => {
  let categoryList = [
    {
      categoryId: 'TC1',
      categoryName: 'Graphic & Design',
      itemsAmount: '523,112',
    },
    {
      categoryId: 'TC2',
      categoryName: 'Digital Marketing',
      itemsAmount: '523,112',
    },
    {
      categoryId: 'TC3',
      itemsAmount: '325,442',
      categoryName: 'Writing & Translation',
    },
    {
      categoryId: 'TC4',
      itemsAmount: '421,305',
      categoryName: 'Video & Animation',
    },

    {
      categoryId: 'TC5',
      itemsAmount: '421,305',
      categoryName: ' Music & Audio',
    },
    {
      categoryId: 'TC6',
      itemsAmount: '421,305',
      categoryName: 'Programing & Tech',
    },
  ];

  return categoryList;
};
