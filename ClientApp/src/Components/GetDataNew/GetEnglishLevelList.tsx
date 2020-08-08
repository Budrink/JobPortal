import { EnglishLevel } from '../Data/Data';
import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const getEnglishLevelList = async (): Promise<EnglishLevel[]> => {
  // export const getEnglishLevelList = (): EnglishLevelData[] => {
  let englishLevelList: EnglishLevel[] = [];

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Skills`,
      method: 'Get',
    });

    // console.log(response);
    if (response.parsedBody !== null) {
      englishLevelList = response.parsedBody;
    }
    // console.log(skillList);
  } catch (e) {
    console.log(e);
  }
  // englishLevelList = [
  //   {
  //     englishLevelId: 'EL1',
  //     englishLevelName: 'Basic',
  //   },
  //   {
  //     englishLevelId: 'EL2',
  //     englishLevelName: 'Conversational',
  //   },
  //   {
  //     englishLevelId: 'EL3',
  //     englishLevelName: 'Fluent',
  //   },
  //   {
  //     englishLevelId: 'EL4',
  //     englishLevelName: 'Native or bilingual',
  //   },
  //   {
  //     englishLevelId: 'EL5',
  //     englishLevelName: 'Professional',
  //   },
  // ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return englishLevelList;
};
