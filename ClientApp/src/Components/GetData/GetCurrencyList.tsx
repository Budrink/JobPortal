import { wait } from './wait';
export interface Currency {
  currencyId: string;
  currencyName: string;
}

export const GetCurrencyList = async (): Promise<Currency[]> => {
  // export const getcurrencyList = (): currencyData[] => {
  let currencyList: Currency[] = [];

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       currencyList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  currencyList = [
    {
      currencyId: 'L1',
      currencyName: 'Brazilian Real',
    },
    {
      currencyId: 'L2',
      currencyName: 'US Dollar',
    },
    {
      currencyId: 'L3',
      currencyName: 'Yuan Renminbi',
    },
    {
      currencyId: 'L4',
      currencyName: 'Colombian Peso',
    },
    {
      currencyId: 'L5',
      currencyName: 'Euro',
    },
    {
      currencyId: 'L6',
      currencyName: 'Hong Kong Dollar',
    },
  ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return currencyList;
};
