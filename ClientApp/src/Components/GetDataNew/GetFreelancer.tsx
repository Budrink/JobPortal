import { FreelancerData } from '../Data/Data';
import { wait } from '../GetData/wait';
import { userPhotoPath, ProjectDefaultImgPath } from '../Data/GlobalValues';
// import { GetFeedbackList } from './GetFeedBackList';
import { GetUserSkillList } from '../GetData/GetUserSkillList';
import { GetCraftedProjectList } from '../GetData/GetCraftedProjectList';
import {
  countryFlagsPath,
  amountOfFeedbackOnPage,
  amountOfCraftedProjectsOnPage,
} from '../Data/GlobalValues';
// Временно

interface Freelancer extends FreelancerData {
  userName: string;
  saved?: boolean;
}
// const feedBackList = (userId: string, amountofFeedBaacksOnPage: number) => {
//   return GetFeedbackList(userId, amountofFeedBaacksOnPage, 1);
// };
const feedBackList = undefined;
// const freelancerfeedBacklist = (freelancerId: string) => {
//   return feedBackList.filter(
//     (feedback) => feedback.freelancerId === freelancerId,
//   );
// };
const userSkills = GetUserSkillList();
// const userSkillList = (freelancerId: string) => {
//   return userSkills.filter((skill) => skill.userId === freelancerId);
// };
const userSkillList = (freelancerId: string) => {
  return userSkills;
};

///Как параметр нужно передать кол-во feedback для загрузки за один раз
//The firest tiem download the first page of feedback
export const GetFreelancer = async (
  freelancerId: string,
  amountofFeedBaacksOnPage?: number,
): Promise<Freelancer> => {
  //Функция для получения списка с сервера
  //   await fetch('http://localhost:17525/api/user')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       countryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  await wait(500);

  let freelancer: Freelancer = {
    userId: '1',
    userPhoto: userPhotoPath + 'img-10.png',
    userPhotoFile: {
      iD: '1',
      name: 'profile photo',
      link: userPhotoPath + 'img-10.png',
      size: 300,
    },
    firstName: 'Valentine',
    lastName: 'Mehring',
    email: 'fff',
    gender: 'female',
    userName: 'Valentine Mehring',
    userRates: '5.0',
    feedbacksCount: 31,
    // userFeedbacks: await feedBackList(freelancerId, amountOfFeedbackOnPage),
    joinDate: 'May 30, 2013',
    title: 'Classified Posting, Data Entry, Typing Expert',
    hourRates: '44.00',
    //   @valentine20658;
    country: {
      countryId: '2',
      countryFlag: countryFlagsPath + 'img-02.png',
      countryName: 'United States',
    },
    description: `<p>    Excepteur sint occaecat cupidatat nonproident,
     saeunt in culpa qui officia deserunt mollit nim id est laborum. 
      Seden utem perspiciatis undesieu omnis
       iste natus error sit voluptatem.                       </p><p>
                         Accusantium doque laudantium, totam rem aiam
                           eaqueiu ipsa quae ab illoion inventore veritatisetm 
      quasitea architecto beataea dictaed quia couuntur
                                 magni dolores eos quist ratione vtatem seque nesnt.
      Neque porro quamest quioremas ipsum  uiatem dolor 
      sitem amet conctetur adipisci velit sedate quianon. 
      Excepteur sint occaecat cupidatat non proident,                                     saeunt in culpa qui officia deserunt mollit anim id est laborum.
      Seden utem perspiciatis undesieu  omnis iste natus error sit voluptatem.  </p><p>
          Accusantium doque laudantium, totam rem aiam eaqueiu ipsa quae ab illoion inventore veritatisetm quasitea 
       architecto beataea dictaed quia couuntur magni dolores eos quist ratione vtatem seque nesnt. Neque porro 
      quamest quioremas ipsum quiatem dolor sitem amet conctetur adipisci velit sedate quianon. </p>`,
    amountOngoingProjects: 3,
    amountCompletedProjects: 1305,
    amountCancelledProjects: 2,
    servedHours: '25',
    userSkills: userSkillList(freelancerId),
    userType: { userTypeId: '1', userTypeName: 'freelancer' },
    englishLevel: { englishLevelId: '1', englishLevelName: 'professional' },
    Languages: [{ languageId: '1', languageName: 'English' }],
    plusMember: true,
    remark:
      '  * Adpsicing elit sed do eiusmod temporincididunt ut labore et dolore.',
    //  userFeedbacks = GetFeedbackList(),
    craftedProjects: GetCraftedProjectList(
      freelancerId,
      amountOfCraftedProjectsOnPage,
      1,
    ),
    experience: [
      {
        iD: '1',

        title: 'Web &amp; Apps Project Manager',
        description:
          'Consectetur adipisicing elit sed doeiusmod tempor incididunt ut labore et   dolore magna aliquaenim ad minimveniamac quis nostrud exercitation ullamco laboris. ',
        companyName: 'Amento Tech',
        beginDate: ' Aug 2017',
      },
      {
        iD: '2',

        title: 'Sr. PHP &amp; Laravel Developer',
        description:
          '   “ Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
        companyName: 'Amento Tech',
        beginDate: 'Jun 2017',
        endDate: 'Jul 2018',
      },
      {
        iD: '3',
        title: 'PHP Developer',
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
        companyName: 'Amento Tech',
        beginDate: ' Apr 2016',
        endDate: 'Jul 2018',
      },
    ],
    education: [
      {
        iD: '0',
        title: 'Web &amp; Apps Project Manager',
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
        companyName: 'Amento Tech',
        beginDate: 'Aug 2017',
        endDate: 'Till now',
      },
      {
        iD: '1',
        title: 'Web &amp; Apps Project Manager',
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
        companyName: 'Amento Tech',
        beginDate: 'Aug 2017',
        endDate: 'Till now',
      },
      {
        iD: '2',
        title: 'Web &amp; Apps Project Manager',
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
        companyName: 'Amento Tech',
        beginDate: 'Jun 2017',
        endDate: 'Jul 2018',
      },
      {
        iD: '3',
        title: 'Web &amp; Apps Project Manager',
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
        companyName: 'Amento Tech',
        beginDate: 'Apr 2016 ',
        endDate: 'Jul 2017',
      },
      {
        iD: '4',
        title: 'Web &amp; Apps Project Manager',
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
        companyName: 'Amento Tech',
        beginDate: 'Aug 2017',
        endDate: 'Till now',
      },
      {
        iD: '5',
        title: 'Web &amp; Apps Project Manager',
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
        companyName: 'Amento Tech',
        beginDate: 'Aug 2017',
        endDate: 'Till now',
      },
      {
        iD: '6',
        title: 'Web &amp; Apps Project Manager',
        description:
          'Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore etdolore magna aliquaenim ad minimveniamac quis nostrud exercitationullamco laboris. ”',
        companyName: 'Amento Tech',
        beginDate: 'Aug 2017',
        endDate: 'Till now',
      },
    ],
    tagList: [
      'Project Manager',
      'PHP',
      'web',
      'Classified Posting',
      'Data Entry',
      'Typing Expert',
      'PHP Developer',
      'My SQL',
    ],

    //     awards:[
    // {
    //   iD: '1';
    //   title: string;
    //   date: string;
    //   img?: string;
    //   files?: string[];
    // }
    projects: [
      {
        iD: '1',
        title: 'Project Title',
        url: 'www.themeforest.net',
        img: ProjectDefaultImgPath,
        files: [
          { iD: '1', name: 'Wireframe Document.doc', link: '/', size: 512 },
          { iD: '2', name: '>Requirments.pdf', link: '/', size: 110 },
          { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
        ],
      },
      {
        iD: '2',
        title: 'Project Title1',
        url: 'www.themeforest.net',
        img: '/images/thumbnail/img-12.jpg',
        files: [
          { iD: '1', name: 'Wireframe Document.doc', link: '/', size: 512 },
          { iD: '2', name: 'Requirments.pdf', link: '/', size: 110 },
          { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
        ],
      },
      {
        iD: '',
        title: 'Project Title2',
        url: 'www.themeforest.net',
        img: '/images/thumbnail/img-12.jpg',
        files: [
          { iD: '1', name: 'Wireframe Document.doc', link: '/', size: 512 },
          { iD: '2', name: 'Requirments.pdf', link: '/', size: 110 },
          { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
        ],
      },
    ],
    awards: [
      {
        iD: '1',
        title: ' Awards Title Here',
        date: 'Apr 27, 2016',
        img: '/images/thumbnail/img-12.jpg',
        files: [
          { iD: '1', name: 'Logo.jpg', link: '/', size: 512 },
          { iD: '2', name: 'Requirments.pdf', link: '/', size: 110 },
          { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
        ],
      },
      {
        iD: '2',
        title: ' Awards Title Here',
        date: 'Apr 27, 2016',
        img: '/images/thumbnail/img-12.jpg',
        files: [
          { iD: '1', name: 'Logo.jpg', link: '/', size: 512 },
          { iD: '2', name: 'Requirments.pdf', link: '/', size: 110 },
          { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
        ],
      },
      {
        iD: '3',
        title: ' Awards Title Here',
        date: 'Apr 27, 2016',
        img: '/images/thumbnail/img-12.jpg',
        files: [
          { iD: '1', name: 'Logo.jpg', link: '/', size: 512 },
          { iD: '2', name: 'Requirments.pdf', link: '/', size: 110 },
          { iD: '3', name: 'Company Intro.docx', link: '/', size: 224 },
        ],
      },
    ],
  };
  return freelancer;
};
