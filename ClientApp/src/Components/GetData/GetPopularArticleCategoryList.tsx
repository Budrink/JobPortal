import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const GetPopularArticleCategoryList = async (
  amount?: number,
): Promise<any> => {
  let categoryList: [] = [];

  let response: HttpResponse<any>;
  try {
    if (amount === undefined) {
      amount = 10;
    }
    response = await http({
      path: `Article/popularCategoryList?amount=${amount}`,
      method: 'Get',
    });
    //  console.log(response);
    if (response.parsedBody !== null) {
      categoryList = response.parsedBody;
      //   console.log(countryList);
    }
  } catch (e) {
    console.log(e);
  }

  return categoryList;
};

// export const GetPopularArticleCategoryList = async () => {
//   let categoryList = [
//     {
//       categoryId: 'TC1',
//       categoryName: 'Graphic & Design',
//       itemsAmount: '523,112',
//     },
//     {
//       categoryId: 'TC2',
//       categoryName: 'Digital Marketing',
//       itemsAmount: '523,112',
//     },
//     {
//       categoryId: 'TC3',
//       itemsAmount: '325,442',
//       categoryName: 'Writing & Translation',
//     },
//     {
//       categoryId: 'TC4',
//       itemsAmount: '421,305',
//       categoryName: 'Video & Animation',
//     },

//     {
//       categoryId: 'TC5',
//       itemsAmount: '421,305',
//       categoryName: ' Music & Audio',
//     },
//     {
//       categoryId: 'TC6',
//       itemsAmount: '421,305',
//       categoryName: 'Programing & Tech',
//     },
//   ];

//   return categoryList;
// };
