import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export interface Currency {
  currencyId: string;
  currencyName: string;
}

export const GetCurrencyList = async (): Promise<Currency[]> => {
  // export const getcurrencyList = (): currencyData[] => {
  let currencyList: Currency[] = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Currency`,
      method: 'Get',
    });

    // console.log(response);
    if (response.parsedBody !== null) {
      currencyList = response.parsedBody;
    }
    // console.log(skillList);
  } catch (e) {
    console.log(e);
  }

  // currencyList = [
  //   {
  //     currencyId: 'L1',
  //     currencyName: 'Brazilian Real',
  //   },
  //   {
  //     currencyId: 'L2',
  //     currencyName: 'US Dollar',
  //   },
  //   {
  //     currencyId: 'L3',
  //     currencyName: 'Yuan Renminbi',
  //   },
  //   {
  //     currencyId: 'L4',
  //     currencyName: 'Colombian Peso',
  //   },
  //   {
  //     currencyId: 'L5',
  //     currencyName: 'Euro',
  //   },
  //   {
  //     currencyId: 'L6',
  //     currencyName: 'Hong Kong Dollar',
  //   },
  // ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return currencyList;
};
