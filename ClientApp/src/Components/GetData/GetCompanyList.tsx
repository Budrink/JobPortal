import { CountryData } from '../Data/Data';
import { wait } from './wait';
import { companyPath, countryFlagsPath } from '../Data/GlobalValues';

interface company {
  companyId: string;
  companyName: string;
  companyImgJpg?: string;
  companyImgPng?: string;
  companyCountry: CountryData;
  verifiedCompany?: boolean;
  companyDescription?: string;
  numberOfEmployers?: number;
  department?: string;
  saved?: boolean;
}
interface CompanyProps {
  totalAmountOfCompanies: number;
  companies: company[];
}
export const getCompanyList = async (): Promise<CompanyProps> => {
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

  let companyList: CompanyProps = {
    totalAmountOfCompanies: 100,
    companies: [
      {
        companyId: '1',
        companyName: 'Angry Creative Studio',
        companyImgJpg: companyPath + 'img-01.jpg',
        companyImgPng: companyPath + 'img-01.png',
        companyCountry: {
          countryId: '1',
          countryFlag: countryFlagsPath + 'img-01.png',
          countryName: 'United Kingdom',
        },
        verifiedCompany: true,
        saved: true,
      },
      {
        companyId: '2',
        companyName: 'Aviato Care Company',
        companyImgJpg: companyPath + 'img-02.jpg',
        companyImgPng: companyPath + 'img-02.png',
        companyCountry: {
          countryId: '2',
          countryFlag: countryFlagsPath + 'img-02.png',
          countryName: 'Unated States',
        },
      },
      {
        companyId: '3',
        companyName: 'Ember Planner & Organizer',
        companyImgJpg: companyPath + 'img-03.jpg',
        companyImgPng: companyPath + 'img-03.png',
        companyCountry: {
          countryId: '2',
          countryFlag: countryFlagsPath + 'img-02.png',
          countryName: 'Unated States',
        },
      },
      {
        companyId: '4',
        companyName: 'Firy Birds & Company',
        companyImgJpg: companyPath + 'img-04.jpg',
        companyImgPng: companyPath + 'img-04.png',
        companyCountry: {
          countryId: '3',
          countryFlag: countryFlagsPath + 'img-03.png',
          countryName: 'Canada',
        },
      },
      {
        companyId: '5',
        companyName: 'VAV Creative Studio',
        companyImgJpg: companyPath + 'img-05.jpg',
        companyImgPng: companyPath + 'img-05.png',
        companyCountry: {
          countryId: '2',
          countryFlag: countryFlagsPath + 'img-02.png',
          countryName: 'Unated States',
        },
      },
      {
        companyId: '6',
        companyName: 'Sass Studio',
        companyImgJpg: companyPath + 'img-06.jpg',
        companyImgPng: companyPath + 'img-06.png',
        companyCountry: {
          countryId: '2',
          countryFlag: countryFlagsPath + 'img-02.png',
          countryName: 'Unated States',
        },
      },
    ],
  };
  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return companyList;
};
