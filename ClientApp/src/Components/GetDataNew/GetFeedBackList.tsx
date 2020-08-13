import { UserFeedback } from '../Data/Data';
// import { wait } from './wait';
import {
  flagDefaultPath,
  countryFlagsPath,
  companyPath,
  companyDefaultImgPng,
} from '../Data/GlobalValues';
import { http } from '../Data/Http';
export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export interface UserFeedbacks {
  totalFeedbackAmount: number;
  userFeedbacks: UserFeedback[];
}

export const GetFeedbackList = async (
  userId: string,
  amountOfItemsOnPage: number,
  pageNumber: number,
): Promise<any> => {
  let userFeedbacks: UserFeedbacks;
  userFeedbacks = { totalFeedbackAmount: 0, userFeedbacks: [] };
  const requestBody = {
    AmountItemsOnPage: amountOfItemsOnPage,
    FreelancerId: userId,
    PageNumber: pageNumber,
  };
  // console.log(requestBody);
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `freelancer/feedbacks`,
      method: 'Post',
      body: requestBody,
    });

    if (response.parsedBody !== null) {
      userFeedbacks = response.parsedBody;
      userFeedbacks.userFeedbacks.map(
        (feedback) =>
          (feedback.contract.job.company.country.countryFlag =
            feedback.contract.job.company.country.countryFlag !== null
              ? countryFlagsPath +
                feedback.contract.job.company.country.countryFlag
              : flagDefaultPath),
      );
      userFeedbacks.userFeedbacks.map(
        (feedback) =>
          (feedback.contract.job.company.companyImgPng =
            feedback.contract.job.company.companyImgPng !== null
              ? companyPath + feedback.contract.job.company.companyImgPng
              : companyDefaultImgPng),
      );
    }
  } catch (e) {
    console.log(e);
  }
  return userFeedbacks;
};
// //Функция для получения списка с севрера
// //   await fetch('http://localhost:17525/api/user')
// //     .then((res) => res.json())
// //     .then((body) => {
// //       countryList = body;
// //     })
// //     .catch((err) => {
// //       console.error(err);
// //     });

// // await wait(500);
// // let userFeedbacks: userFeedback[] = [
// //   {
// //     feedbackId: '1',
// //     freelancerId: '1',
// //     mark: 5,
// //     contract: {
// //       contractId: '1',
// //       userId: '1',
// //       status: 'Finished',
// //       terms: 'Beginner',
// //       type: 'fixed',

// //       job: {
// //         jobId: '55',
// //         title: 'Translation and Proof Reading (Multi Language)',
// //         qualification: 'Beginner',
// //         company: {
// //           userId: '1',
// //           firstName: 'G',
// //           lastName: 'G',
// //           email: 'G',
// //           gender: 'male',
// //           joinDate: '06.07.30',
// //           userName: '',
// //           companyId: '1',
// //           companyName: 'Themeforest company',
// //           companyImgJpg: companyPath + 'img-01.jpg',
// //           companyImgPng: companyPath + 'img-01.png',
// //           country: {
// //             countryId: '1',
// //             countryFlag: countryFlagsPath + 'img-01.png',
// //             countryName: 'United Kingdom',
// //           },
// //         },
// //         type: 'fixed',
// //         jobDetails: '  ',
// //       },
// //     },
// //   },
// //   {
// //     feedbackId: '2',
// //     freelancerId: '1',
// //     mark: 4,
// //     text:
// //       ' Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris.',
// //     contract: {
// //       contractId: '45',
// //       terms: 'expert',
// //       status: 'finished',
// //       userId: '1',
// //       type: 'fixed',
// //       job: {
// //         jobId: '56',
// //         title: 'Need help translating app stringlist from English to Arabic',
// //         qualification: 'Intermediate',
// //         company: {
// //           userId: '1',
// //           firstName: 'G',
// //           lastName: 'G',
// //           email: 'G',
// //           gender: 'male',
// //           joinDate: '06.07.30',
// //           userName: '',
// //           companyId: '2',
// //           companyName: 'Videohive Studio',
// //           companyImgJpg: companyPath + 'img-02.jpg',
// //           companyImgPng: companyPath + 'img-02.png',
// //           country: {
// //             countryId: '3',
// //             countryFlag: countryFlagsPath + 'img-03.png',
// //             countryName: 'Canada',
// //           },
// //         },
// //         type: 'fixed',
// //         jobDetails: '  ',
// //       },
// //       beginDate: '2017-06-01',
// //       endDate: '2017-07-01',
// //       // rate: 5,
// //     },
// //   },

// //   {
// //     feedbackId: '3',
// //     freelancerId: '1',
// //     mark: 2,
// //     text:
// //       'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliquaenim ad minim veniamac quis nostrud exercitation ullamco laboris. ',
// //     contract: {
// //       contractId: '55',
// //       terms: 'expert',
// //       status: 'finished',
// //       userId: '1',
// //       type: 'fixed',
// //       job: {
// //         jobId: '57',
// //         title: 'Blog Post Writing in English Language',
// //         qualification: 'Professional',
// //         company: {
// //           userId: '1',
// //           firstName: 'G',
// //           lastName: 'G',
// //           email: 'G',
// //           gender: 'male',
// //           joinDate: '06.07.30',
// //           userName: '',
// //           companyId: '3',
// //           companyName: 'Photodune Company',
// //           companyImgJpg: companyPath + 'img-03.jpg',
// //           companyImgPng: companyPath + 'img-03.png',
// //           country: {
// //             countryId: '2',
// //             countryFlag: countryFlagsPath + 'img-02.png',
// //             countryName: 'Unated States',
// //           },
// //         },
// //         type: 'Fixed',
// //         jobDetails: '  ',
// //       },
// //       beginDate: '2017-07-01',
// //       endDate: '2017-07-01',
// //       // rate: 5,
// //     },
// //   },
// // ];
// //};
