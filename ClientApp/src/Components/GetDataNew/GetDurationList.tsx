import { DurationData } from '../Data/Data';
import { wait } from '../GetData/wait';

export const getDurationList = async (): Promise<DurationData[]> => {
  // export const getCategoryList = (): CategoryData[] => {

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
