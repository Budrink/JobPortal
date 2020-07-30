import { Language } from '../Data/Data';
import { wait } from './wait';

export const GetLanguageList = async (): Promise<Language[]> => {
  // export const getlanguageList = (): languageData[] => {
  let languageList: Language[] = [];

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       languageList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  languageList = [
    {
      languageId: 'L1',
      languageName: 'Chinese',
    },
    {
      languageId: 'L2',
      languageName: 'Spanish',
    },
    {
      languageId: 'L3',
      languageName: 'English',
    },
    {
      languageId: 'L4',
      languageName: 'Arabic',
    },
    {
      languageId: 'L5',
      languageName: 'Russian',
    },
    {
      languageId: 'L6',
      languageName: 'German',
    },
    {
      languageId: 'L7',
      languageName: 'Dutch',
    },
  ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return languageList;
};
