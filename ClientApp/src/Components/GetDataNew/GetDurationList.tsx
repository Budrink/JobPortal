import { DurationData } from '../Data/Data';
import { http } from '../Data/Http';
export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const getDurationList = async (): Promise<DurationData[]> => {
  let durationList: DurationData[] = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Duration`,
      method: 'Get',
    });
    //  console.log(response);
    if (response.parsedBody !== null) {
      durationList = response.parsedBody;
      //   console.log(countryList);
    }
  } catch (e) {
    console.log(e);
  }

  // let durationList = [
  // //   {
  //     durationId: 'D1',
  //     durationText: 'Less Than 01 Month',
  //   },
  //   {
  //     durationId: 'D2',

  //     durationText: '01 to 03 Months',
  //   },
  //   {
  //     durationId: 'D3',

  //     durationText: '03 to 06 Months',
  //   },
  //   {
  //     durationId: 'D4',
  //     durationText: 'More Than 06 Months',
  //   },
  // ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return durationList;
};
