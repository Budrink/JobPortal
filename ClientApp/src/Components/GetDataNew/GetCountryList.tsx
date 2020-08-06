import { CountryData } from '../Data/Data';
import { countryFlagsPath } from '../Data/GlobalValues';

import { http } from '../Data/Http';
export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const GetCountryList = async (
  amount?: number,
): Promise<CountryData[]> => {
  let countryList: CountryData[] = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Countries`,
      method: 'Get',
    });
    console.log(response);
    if (response.parsedBody !== null) {
      countryList = response.parsedBody;
      console.log(countryList);
    }
  } catch (e) {
    console.log(e);
  }

  countryList.map(
    (country) =>
      (country.countryId =
        country.countryFlag === null
          ? countryFlagsPath + 'img-01.png'
          : countryFlagsPath + country.countryFlag),
  );
  return countryList;
};

// countryList = [
//   {
//     countryId: 'C1',
//     countryFlag: countryFlagsPath + 'img-01.png',
//     countryName: 'Australia',
//   },
//   {
//     countryId: 'C2',
//     countryFlag: countryFlagsPath + 'img-02.png',
//     countryName: 'United States',
//   },
//   {
//     countryId: 'c3',
//     countryFlag: countryFlagsPath + 'img-03.png',
//     countryName: 'Canada',
//   },
//   {
//     countryId: 'C4',
//     countryFlag: countryFlagsPath + 'img-04.png',
//     countryName: 'England',
//   },
//   {
//     countryId: 'C5',
//     countryFlag: countryFlagsPath + 'img-05.png',
//     countryName: 'United Emirates',
//   },
//   {
//     countryId: 'C6',
//     countryFlag: countryFlagsPath + 'img-01.png',
//     countryName: 'Australia1',
//   },
//   {
//     countryId: 'C7',
//     countryFlag: countryFlagsPath + 'img-02.png',
//     countryName: 'United States1',
//   },
//   {
//     countryId: 'C8',
//     countryFlag: countryFlagsPath + 'img-03.png',
//     countryName: 'Canada1',
//   },
//   {
//     countryId: 'C9',
//     countryFlag: countryFlagsPath + 'img-04.png',
//     countryName: 'England1',
//   },
//   {
//     countryId: 'C10',
//     countryFlag: countryFlagsPath + 'img-05.png',
//     countryName: 'United Emirates1',
//   },
// ];

// // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
// if (amountOfCategories === undefined) {
//   return countryList;
// } else {
//   return countryList.filter((x) => x.countryId <= 'C' + amountOfCategories);
// }
//};
