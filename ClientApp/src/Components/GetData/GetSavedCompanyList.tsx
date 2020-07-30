import { wait } from './wait';
import { companyPath } from '../Data/GlobalValues';

//iD- iD of user who asked for saved companies
export const GetSavedCompanyList = async (
  iD: string,
  pageNumber: number,
  amounOfItemsOnPage: number,
) => {
  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       countryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  let companyList = {
    totalAmountOfCompanies: 100,
    companies: [
      {
        companyId: '1',
        companyName: 'Angry Creative Studio',
        companyImgPng: companyPath + 'img-01.png',
        verifiedCompany: true,
      },
      {
        companyId: '2',
        companyName: 'Aviato Care Company',
        companyImgPng: companyPath + 'img-02.png',
      },
      {
        companyId: '3',
        companyName: 'Ember Planner & Organizer',
        verifiedCompany: true,
        companyImgPng: companyPath + 'img-03.png',
      },
      {
        companyId: '4',
        companyName: 'Firy Birds & Company',
        verifiedCompany: true,
        companyImgPng: companyPath + 'img-04.png',
      },
      {
        companyId: '5',
        companyName: 'VAV Creative Studio',
        companyImgPng: companyPath + 'img-05.png',
      },
      {
        companyId: '6',
        companyName: 'Sass Studio',
        verifiedCompany: true,
        companyImgPng: companyPath + 'img-06.png',
      },
    ],
  };
  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return companyList;
};
