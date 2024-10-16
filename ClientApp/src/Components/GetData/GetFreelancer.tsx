import { FreelancerData } from '../Data/Data';
import { http } from '../Data/Http';
import { GetFeedbackList } from './GetFeedBackList';
// import dateformat from 'dateformat';
import {
  userPhotoPath,
  userDefaultIconPath,
  countryFlagsPath,
  flagDefaultPath,
  CraftedProjectPath,
  CraftedProjectDefaultPath,
  awardDefalutIconPath,
  awardPath,
} from '../Data/GlobalValues';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const GetFreelancer = async (
  freelancerId: string,
  pageNumber?: number,
  amountofFeedBaacksOnPage?: number,
): Promise<any> => {
  let freelancer: FreelancerData;
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Freelancer/${freelancerId}`,
      method: 'Get',
    });

    if (response.parsedBody !== null) {
      freelancer = response.parsedBody;
      freelancer.userPhoto =
        freelancer.userPhoto !== null
          ? userPhotoPath + freelancer.userPhoto
          : userDefaultIconPath;
      freelancer.country.countryFlag =
        freelancer.country.countryFlag !== null
          ? countryFlagsPath + freelancer.country.countryFlag
          : flagDefaultPath;
      if (freelancer.craftedProjects !== undefined) {
        freelancer.craftedProjects.map(
          (project) =>
            (project.img =
              project.img === null
                ? CraftedProjectPath + project.img
                : CraftedProjectDefaultPath),
        );
      }
      if (freelancer.awards !== undefined) {
        freelancer.awards.map(
          (award) =>
            (award.img =
              award.img === null
                ? awardPath + award.img
                : awardDefalutIconPath),
        );
        // );
        freelancer.gender =
          freelancer.gender !== undefined ? freelancer.gender : 'male';
        var dateFormat = require('dateformat');
        freelancer.awards.map(
          (award) =>
            //  (award.dateString = dateFormat(award.date, 'mmmm dS - d, yyyy ')),
            (award.dateString = dateFormat(award.date, 'mmmm d, yyyy ')),
        );
      }

      let FeedbackList = await GetFeedbackList(
        freelancerId,
        amountofFeedBaacksOnPage === undefined ? 0 : amountofFeedBaacksOnPage,
        pageNumber === undefined ? 0 : pageNumber,
      );

      freelancer.userFeedbacks = FeedbackList;
      return freelancer;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

// let freelancer: Freelancer = {

//     feedbacksCount: 31,
//     // userFeedbacks: await feedBackList(freelancerId, amountOfFeedbackOnPage),
//     joinDate: 'May 30, 2013',
//     title: 'Classified Posting, Data Entry, Typing Expert',
//     hourRates: '44.00',
//     //   @valentine20658;
//     country: {
//       countryId: '2',
//       countryFlag: countryFlagsPath + 'img-02.png',
//       countryName: 'United States',
//     },
//     description: `<p>    Excepteur sint occaecat cupidatat nonproident,
//      saeunt in culpa qui officia deserunt mollit nim id est laborum.
//       Seden utem perspiciatis undesieu omnis
//        iste natus error sit voluptatem.                       </p><p>
//                          Accusantium doque laudantium, totam rem aiam
//                            eaqueiu ipsa quae ab illoion inventore veritatisetm
//       quasitea architecto beataea dictaed quia couuntur
//                                  magni dolores eos quist ratione vtatem seque nesnt.
//       Neque porro quamest quioremas ipsum  uiatem dolor
//       sitem amet conctetur adipisci velit sedate quianon.
//       Excepteur sint occaecat cupidatat non proident,                                     saeunt in culpa qui officia deserunt mollit anim id est laborum.
//       Seden utem perspiciatis undesieu  omnis iste natus error sit voluptatem.  </p><p>
//           Accusantium doque laudantium, totam rem aiam eaqueiu ipsa quae ab illoion inventore veritatisetm quasitea
//        architecto beataea dictaed quia couuntur magni dolores eos quist ratione vtatem seque nesnt. Neque porro
//       quamest quioremas ipsum quiatem dolor sitem amet conctetur adipisci velit sedate quianon. </p>`,
//     amountOngoingProjects: 3,
//     amountCompletedProjects: 1305,
//     amountCancelledProjects: 2,
//     servedHours: '25',
//     userSkills: userSkillList(freelancerId),
//     userType: { userTypeId: '1', userTypeName: 'freelancer' },
//     englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
//     Languages: [{ languageId: '1', languageName: 'English' }],
//     plusMember: true,
//     remark:
//       '  * Adpsicing elit sed do eiusmod temporincididunt ut labore et dolore.',
//     //  userFeedbacks = GetFeedbackList(),
//     craftedProjects: GetCraftedProjectList(
//       freelancerId,
//       amountOfCraftedProjectsOnPage,
//       1,
//     ),
//     experience: [
//       {
//         iD: '1',

//         title: 'Web &amp; Apps Project Manager',
//         description:
//           'Consectetur adipisicing elit sed doeiusmod tempor incididunt ut labore et   dolore magna aliquaenim ad minimveniamac quis nostrud exercitation ullamco laboris. ',
//         companyName: 'Amento Tech',
//         beginDate: ' Aug 2017',
//       },
//       {
//         iD: '2',

//         title: 'Sr. PHP &amp; Laravel Developer',
//         description:
//           '   “ Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
//         companyName: 'Amento Tech',
//         beginDate: 'Jun 2017',
//         endDate: 'Jul 2018',
//       },
//       {
//         iD: '3',
//         title: 'PHP Developer',
//         description:
//           'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
//         companyName: 'Amento Tech',
//         beginDate: ' Apr 2016',
//         endDate: 'Jul 2018',
//       },
//     ],
//     education: [
//       {
//         iD: '0',
//         title: 'Web &amp; Apps Project Manager',
//         description:
//           'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
//         companyName: 'Amento Tech',
//         beginDate: 'Aug 2017',
//         endDate: 'Till now',
//       },
//       {
//         iD: '1',
//         title: 'Web &amp; Apps Project Manager',
//         description:
//           'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
//         companyName: 'Amento Tech',
//         beginDate: 'Aug 2017',
//         endDate: 'Till now',
//       },
//       {
//         iD: '2',
//         title: 'Web &amp; Apps Project Manager',
//         description:
//           'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
//         companyName: 'Amento Tech',
//         beginDate: 'Jun 2017',
//         endDate: 'Jul 2018',
//       },
//       {
//         iD: '3',
//         title: 'Web &amp; Apps Project Manager',
//         description:
//           'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
//         companyName: 'Amento Tech',
//         beginDate: 'Apr 2016 ',
//         endDate: 'Jul 2017',
//       },
//       {
//         iD: '4',
//         title: 'Web &amp; Apps Project Manager',
//         description:
//           'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
//         companyName: 'Amento Tech',
//         beginDate: 'Aug 2017',
//         endDate: 'Till now',
//       },
//       {
//         iD: '5',
//         title: 'Web &amp; Apps Project Manager',
//         description:
//           'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
//         companyName: 'Amento Tech',
//         beginDate: 'Aug 2017',
//         endDate: 'Till now',
//       },
//       {
//         iD: '6',
//         title: 'Web &amp; Apps Project Manager',
//         description:
//           'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
//         companyName: 'Amento Tech',
//         beginDate: 'Aug 2017',
//         endDate: 'Till now',
//       },
//     ],
//     tagList: [
//       'Project Manager',
//       'PHP',
//       'web',
//       'Classified Posting',
//       'Data Entry',
//       'Typing Expert',
//       'PHP Developer',
//       'My SQL',
//     ],

//     //     awards:[
//     // {
//     //   iD: '1';
//     //   title: string;
//     //   date: string;
//     //   img?: string;
//     //   files?: string[];
//     // }
//     projects: [
//       {
//         iD: '1',
//         title: 'Project Title',
//         url: 'www.themeforest.net',
//         img: ProjectDefaultImgPath,
//         files: [
//           { iD: '1', name: 'Wireframe Document.doc', link: '/', size: 512 },
//           { iD: '2', name: '>Requirments.pdf', link: '/', size: 110 },
//           { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
//         ],
//       },
//       {
//         iD: '2',
//         title: 'Project Title1',
//         url: 'www.themeforest.net',
//         img: '/images/thumbnail/img-12.jpg',
//         files: [
//           { iD: '1', name: 'Wireframe Document.doc', link: '/', size: 512 },
//           { iD: '2', name: 'Requirments.pdf', link: '/', size: 110 },
//           { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
//         ],
//       },
//       {
//         iD: '',
//         title: 'Project Title2',
//         url: 'www.themeforest.net',
//         img: '/images/thumbnail/img-12.jpg',
//         files: [
//           { iD: '1', name: 'Wireframe Document.doc', link: '/', size: 512 },
//           { iD: '2', name: 'Requirments.pdf', link: '/', size: 110 },
//           { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
//         ],
//       },
//     ],
//     awards: [
//       {
//         iD: '1',
//         title: ' Awards Title Here',
//         date: 'Apr 27, 2016',
//         img: '/images/thumbnail/img-12.jpg',
//         files: [
//           { iD: '1', name: 'Logo.jpg', link: '/', size: 512 },
//           { iD: '2', name: 'Requirments.pdf', link: '/', size: 110 },
//           { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
//         ],
//       },
//       {
//         iD: '2',
//         title: ' Awards Title Here',
//         date: 'Apr 27, 2016',
//         img: '/images/thumbnail/img-12.jpg',
//         files: [
//           { iD: '1', name: 'Logo.jpg', link: '/', size: 512 },
//           { iD: '2', name: 'Requirments.pdf', link: '/', size: 110 },
//           { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
//         ],
//       },
//       {
//         iD: '3',
//         title: ' Awards Title Here',
//         date: 'Apr 27, 2016',
//         img: '/images/thumbnail/img-12.jpg',
//         files: [
//           { iD: '1', name: 'Logo.jpg', link: '/', size: 512 },
//           { iD: '2', name: 'Requirments.pdf', link: '/', size: 110 },
//           { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
//         ],
//       },
//     ],
//   };
//   return freelancer;
// };
