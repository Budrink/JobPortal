import { CountryData } from '../Data/Data';
import { wait } from './wait';
import { countryFlagsPath } from '../Data/GlobalValues';
export const GetCountryList = async (
  amountOfCategories?: number,
): Promise<CountryData[]> => {
  let countryList: CountryData[] = [];

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       countryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(5);

  countryList = [
    {
      countryId: 'C1',
      countryFlag: countryFlagsPath + 'img-01.png',
      countryName: 'Australia',
    },
    {
      countryId: 'C2',
      countryFlag: countryFlagsPath + 'img-02.png',
      countryName: 'United States',
    },
    {
      countryId: 'c3',
      countryFlag: countryFlagsPath + 'img-03.png',
      countryName: 'Canada',
    },
    {
      countryId: 'C4',
      countryFlag: countryFlagsPath + 'img-04.png',
      countryName: 'England',
    },
    {
      countryId: 'C5',
      countryFlag: countryFlagsPath + 'img-05.png',
      countryName: 'United Emirates',
    },
    {
      countryId: 'C6',
      countryFlag: countryFlagsPath + 'img-01.png',
      countryName: 'Australia1',
    },
    {
      countryId: 'C7',
      countryFlag: countryFlagsPath + 'img-02.png',
      countryName: 'United States1',
    },
    {
      countryId: 'C8',
      countryFlag: countryFlagsPath + 'img-03.png',
      countryName: 'Canada1',
    },
    {
      countryId: 'C9',
      countryFlag: countryFlagsPath + 'img-04.png',
      countryName: 'England1',
    },
    {
      countryId: 'C10',
      countryFlag: countryFlagsPath + 'img-05.png',
      countryName: 'United Emirates1',
    },
  ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  if (amountOfCategories === undefined) {
    return countryList;
  } else {
    return countryList.filter((x) => x.countryId <= 'C' + amountOfCategories);
  }
};
