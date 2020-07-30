import { EnglishLevel } from '../Data/Data';
import { wait } from './wait';

export const getEnglishLevelList = async (): Promise<EnglishLevel[]> => {
  // export const getEnglishLevelList = (): EnglishLevelData[] => {
  let englishLevelList: EnglishLevel[] = [];

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       englishLevelList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  englishLevelList = [
    {
      englishLevelId: 'EL1',
      englishLevelName: 'Basic',
    },
    {
      englishLevelId: 'EL2',
      englishLevelName: 'Conversational',
    },
    {
      englishLevelId: 'EL3',
      englishLevelName: 'Fluent',
    },
    {
      englishLevelId: 'EL4',
      englishLevelName: 'Native or bilingual',
    },
    {
      englishLevelId: 'EL5',
      englishLevelName: 'Professional',
    },
  ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return englishLevelList;
};
