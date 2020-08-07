import { HourRate } from '../Data/Data';
import { wait } from './wait';

export const getHourRateList = async (): Promise<HourRate[]> => {
  // export const gethourRateList = (): hourRateData[] => {
  let hourRateList: HourRate[] = [];

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       hourRateList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  hourRateList = [
    {
      hourRateId: 'HR1',
      hourRateName: '$10 and below',
    },
    {
      hourRateId: 'HR2',
      hourRateName: '$10 - $30',
    },
    {
      hourRateId: 'HR3',
      hourRateName: '$30 - $60',
    },
    {
      hourRateId: 'HR4',
      hourRateName: '$60 - $90',
    },
    {
      hourRateId: 'HR5',
      hourRateName: '$90 &amp;above ',
    },
  ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return hourRateList;
};
