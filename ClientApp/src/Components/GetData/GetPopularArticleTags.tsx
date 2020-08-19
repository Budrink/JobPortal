import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const GetPopularArticleTags = async (amount?: number): Promise<any> => {
  let tagList: [] = [];

  let response: HttpResponse<any>;
  try {
    if (amount === undefined) {
      amount = 10;
    }
    response = await http({
      path: `Article/popularTagsList?amount=${amount}`,
      method: 'Get',
    });
    //  console.log(response);
    if (response.parsedBody !== null) {
      tagList = response.parsedBody;
      //   console.log(countryList);
    }
  } catch (e) {
    console.log(e);
  }

  return tagList;
};

//   let tagList = [
//     {
//       tagId: 'TC1',
//       tagName: 'Electronics',
//     },
//     {
//       tagId: 'TC2',
//       tagName: 'DIY',
//     },
//     {
//       tagId: 'TC3',
//       tagName: 'Superism',
//     },
//     {
//       tagId: 'TC4',
//       tagName: 'Business',
//     },

//     {
//       tagId: 'TC15',
//       tagName: 'Development',
//     },
//     {
//       tagId: 'TC16',
//       tagName: 'Collaboration',
//     },
//     {
//       tagId: 'TC17',
//       tagName: 'Decent',
//     },
//   ];

//   return tagList;
// };
