import { ComplainReasons } from '../Data/Data';

import { http } from '../Data/Http';
export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const getComplainReasons = async (): Promise<any[]> => {
  let reasonList: ComplainReasons[] = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `ComplainReason`,
      method: 'Get',
    });
    //  console.log(response);
    if (response.parsedBody !== null) {
      reasonList = response.parsedBody;
    }
  } catch (e) {
    console.log(e);
  }

  return reasonList;
};

// export const getComplainReasons = async (): Promise<ComplainReasons[]> => {
//   // export const getCategoryList = (): CategoryData[] => {
//   let reasonList: ComplainReasons[] = [];

//   reasonList = [
//     {
//       reasonId: '1',
//       reasonName: 'Reason 1',
//     },
//     {
//       reasonId: '2',
//       reasonName: 'Reason 2',
//     },
//     {
//       reasonId: '3',
//       reasonName: 'Reason 3',
//     },
//     {
//       reasonId: '4',
//       reasonName: 'Reason 4',
//     },
//   ];

//   // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
//   return reasonList;
// };
