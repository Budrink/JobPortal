import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const GetLanguageList = async (): Promise<any[]> => {
  let languageList: any[] = [];
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Languages`,
      method: 'Get',
    });

    console.log(localStorage.getItem('userId'));

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
