import { companyPath, companyDefaultImgPng } from '../Data/GlobalValues';
//import { countryFlagsPath, flagDefaultPath } from '../Data/GlobalValues';
import { http } from '../Data/Http';
import { CountryData } from '../Data/Data';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
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
  savedItems: [];
}

//iD- iD of user who asked for saved companies
export const GetSavedCompanyList = async (
  id: string,
  pageNumber: number,
  amounOfItemsOnPage: number,
): Promise<any> => {
  let companyList: CompanyProps = {
    totalAmountOfCompanies: 0,
    companies: [],
    savedItems: [],
  };

  let requestBody = {
    pageNumber: pageNumber,
    amountOfItemsOnPage: amounOfItemsOnPage,
    userId: id,
    savedItemtype: '1',
    // 1
  };
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `user/saveditems`,
      method: 'Post',
      body: requestBody,
    });

    if (response.parsedBody !== null) {
      companyList = response.parsedBody;
      if (companyList.savedItems !== undefined) {
        companyList.companies = companyList.savedItems;
        companyList.companies.map(
          (company) =>
            (company.companyImgPng =
              company.companyImgPng !== null
                ? companyPath + company.companyImgPng
                : companyDefaultImgPng),
        );
      }
    }
  } catch (e) {
    console.log(e);
  }

  return companyList;
};
// let companyList = {
//   totalAmountOfCompanies: 100,
//   companies: [
//     {
//       companyId: '1',
//       companyName: 'Angry Creative Studio',
//       companyImgPng: companyPath + 'img-01.png',
//       verifiedCompany: true,
//     },
//     {
//       companyId: '2',
//       companyName: 'Aviato Care Company',
//       companyImgPng: companyPath + 'img-02.png',
//     },
//     {
//       companyId: '3',
//       companyName: 'Ember Planner & Organizer',
//       verifiedCompany: true,
//       companyImgPng: companyPath + 'img-03.png',
//     },
//     {
//       companyId: '4',
//       companyName: 'Firy Birds & Company',
//       verifiedCompany: true,
//       companyImgPng: companyPath + 'img-04.png',
//     },
//     {
//       companyId: '5',
//       companyName: 'VAV Creative Studio',
//       companyImgPng: companyPath + 'img-05.png',
//     },
//     {
//       companyId: '6',
//       companyName: 'Sass Studio',
//       verifiedCompany: true,
//       companyImgPng: companyPath + 'img-06.png',
//     },
//   ],
// };
// // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
// return companyList;
// };
