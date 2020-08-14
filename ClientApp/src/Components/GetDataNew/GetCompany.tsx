import { CountryData } from '../Data/Data';
import { http } from '../Data/Http';
import {
  companyPath,
  companyDefaultImgJpg,
  companyDefaultImgPng,
} from '../Data/GlobalValues';

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
  saved?: boolean; //is taken from current user - in his favourits
}

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

const GetCompany = async (companyId: string): Promise<any> => {
  let company: company;

  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Company/${companyId}`,
      method: 'Get',
    });

    if (response.parsedBody !== null) {
      company = response.parsedBody;

      company.companyImgJpg =
        company.companyImgJpg !== null
          ? companyPath + company.companyImgJpg
          : companyDefaultImgJpg;

      company.companyImgPng =
        company.companyImgPng !== null
          ? companyPath + company.companyImgPng
          : companyDefaultImgPng;

      return company;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
// let company: company = {
//   companyId: '1',
//   companyName: 'Angry Creative Studio',
//   companyImgJpg: companyPath + 'img-01.jpg',
//   companyImgPng: companyPath + 'img-01.png',
//   companyCountry: {
//     countryId: '1',
//     countryFlag: countryFlagsPath + 'img-01.png',
//     countryName: 'United Kingdom',
//   },
//   verifiedCompany: true,
//   saved: true,
//   companyDescription:
//     '  <p>Excepteur sint occaecat cupidatat nonproident, saeunt in culpa qui officia deseruntmollit anim laborum. Seden utem perspiciatis   undesieu omnis voluptatem accusantium doque   laudantium, totam rem aiam eaqueiu ipsa quaeab illoion inventore veritatisetm quasiteaarchitecto beataea dictaed quia couuntur magnidolores eos aquist ratione vtatem seque nesnt.  Neque porro quamest quioremas ipsum quiatemdolor sitem ameteism conctetur adipisci velitsedate quianon.</p> <p>Laborum sed ut perspiciatis unde omnis iste   natus error sitems voluptatem accusantium doloremque laudantium, totam rem aiam eaque ipsa quae ab illo inventore veritatis etna  quasi architecto beatae vitae dictation explicabo. nemo enim ipsam fugit.</p>',
// };

// // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
// return company;

export default GetCompany;
