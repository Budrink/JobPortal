import { DurationData } from '../Data/Data';
import { wait } from './wait';

export const getDurationList = async (): Promise<DurationData[]> => {
  // export const getCategoryList = (): CategoryData[] => {

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       categoryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  let durationList = [
    {
      durationId: 'D1',
      durationText: 'Less Than 01 Month',
    },
    {
      durationId: 'D2',

      durationText: '01 to 03 Months',
    },
    {
      durationId: 'D3',

      durationText: '03 to 06 Months',
    },
    {
      durationId: 'D4',
      durationText: 'More Than 06 Months',
    },
  ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return durationList;
};
