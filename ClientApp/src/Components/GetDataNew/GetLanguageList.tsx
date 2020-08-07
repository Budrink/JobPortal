import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const GetLanguageList = async (): Promise<any[]> => {
  // export const getlanguageList = (): languageData[] => {
  //let languageList: Language[] = [];
  let languageList: any[] = [];
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Languages`,
      method: 'Get',
    });

    // console.log(response.parsedBody);

    if (response.parsedBody !== null) {
      languageList = response.parsedBody;
      languageList.map((lang) => (lang.languageName = lang.name));
      // console.log(languageList);
    }
  } catch (e) {
    console.log(e);
  }

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return languageList;
};
