import { HourRate } from '../Data/Data';
import { http } from '../Data/Http';
export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const getHourRateList = async (): Promise<HourRate[]> => {
  // export const gethourRateList = (): hourRateData[] => {
  let hourRateList: HourRate[] = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `HourRates`,
      method: 'Get',
    });
    //  console.log(response);
    if (response.parsedBody !== null) {
      hourRateList = response.parsedBody;
      //   console.log(countryList);
    }
  } catch (e) {
    console.log(e);
  }

  // hourRateList = [
  //   {
  //     hourRateId: 'HR1',
  //     hourRateName: '$10 and below',
  //   },
  //   {
  //     hourRateId: 'HR2',
  //     hourRateName: '$10 - $30',
  //   },
  //   {
  //     hourRateId: 'HR3',
  //     hourRateName: '$30 - $60',
  //   },
  //   {
  //     hourRateId: 'HR4',
  //     hourRateName: '$60 - $90',
  //   },
  //   {
  //     hourRateId: 'HR5',
  //     hourRateName: '$90 &amp;above ',
  //   },
  // ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return hourRateList;
};
