import { countryFlagsPath, flagDefaultPath } from '../Data/GlobalValues';
import { http } from '../Data/Http';
import { JobData } from '../Data/Data';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

///Переписать для БД
interface extendedJob extends JobData {
  saved?: boolean; // from savedJob of current user
}

interface ProjectsProps {
  totalAmountOfProjects: number;
  projects: extendedJob[];
}

//iD- iD of user who asked for saved freelancers
export const GetSavedProjectList = async (
  id: string,
  pageNumber: number,
  amounOfItemsOnPage: number,
) => {
  let projectList: ProjectsProps;
  projectList = { totalAmountOfProjects: 0, projects: [] };
  let response: HttpResponse<any>;
  let requestBody;

  console.log(localStorage.getItem('login'));
  if (
    localStorage.getItem('login') !== 'true' ||
    localStorage.getItem('userId') === undefined
  ) {
    return [];
  }

  requestBody = {
    pageNumber: pageNumber,
    amountOfItemsOnPage: amounOfItemsOnPage,
    id: localStorage.getItem('userId'),
    SavedItemType: '0',
  };
  try {
    response = await http({
      path: `User/saveditems`,
      method: 'Post',
      body: requestBody,
    });

    if (response.parsedBody !== null) {
      projectList = response.parsedBody;
      // console.log(projectList);
      projectList.projects.map(
        (pr) =>
          (pr.company.country.countryFlag =
            pr.company.country.countryFlag !== null
              ? countryFlagsPath + pr.company.country.countryFlag
              : flagDefaultPath),
      );
    }
  } catch (e) {
    console.log(e);
  }

  return { projectList };
};
// const projectList = {
//   totalAmountOfProjects: 100,
//   projects: [
//     {
//       jobId: 'gy3yV2Vm5u',
//       title: 'I want some customization and installation',
//       qualification: 'Professional',
//       saved: true,
//       company: {
//         verifiedCompany: true,
//         companyId: '1',
//         companyName: 'Light Bulb Association',
//         country: {
//           countryId: 'C4',
//           countryFlag: countryFlagsPath + 'img-04.png',
//           countryName: 'England',
//         },
//       },
//       type: ' Per Hour',
//       duration: '03 Months',
//     },
//     {
//       jobId: '5aUQgM2ZbW',
//       title: 'Website changes in HTML &amp; PH',
//       qualification: 'Professional',
//       company: {
//         companyId: '2',
//         companyName: 'Point trend Studio',
//         verifiedCompany: true,
//         country: {
//           countryId: 'C2',
//           countryFlag: countryFlagsPath + 'img-02.png',
//           countryName: 'United States',
//         },
//       },
//       type: ' Per Hour',
//       duration: '15 Days',
//     },

//     {
//       jobId: 'gy3yV2V675u',
//       title: 'Need Amazon MWS handshaking',
//       qualification: 'Professional',
//       company: {
//         companyId: '3',
//         userName: '',
//         companyName: 'Vertex Association',
//         country: {
//           countryId: 'C5',
//           countryFlag: countryFlagsPath + 'img-05.png',
//           countryName: 'United Emirates',
//         },
//       },
//       type: 'Fixed',
//       duration: '03 Months',
//     },

//     {
//       jobId: 'gy3675yV2Vm5u',
//       title: 'Form-Slider Plugin for Wordpress',
//       qualification: 'Professional',
//       company: {
//         companyId: '3',
//         companyName: 'Traprator House',
//         country: {
//           countryId: 'C5',
//           countryFlag: countryFlagsPath + 'img-05.png',
//           countryName: 'United Emirates',
//         },
//       },
//       type: 'Fixed',
//       duration: '03 Months',
//     },
//     {
//       jobId: 'bsf3NAxTMj',
//       title: 'Classifieds Posting, Data Entry, Typing',
//       qualification: 'Intermediate',
//       company: {
//         companyId: '5',
//         companyName: 'Alfredo Bossard',
//         country: {
//           countryId: 'c3',
//           countryFlag: countryFlagsPath + 'img-03.png',
//           countryName: 'Canada',
//         },
//       },
//       type: 'Per Fixed',
//       duration: '15 Days',
//     },
//     {
//       jobId: '5aUQgM2ZbW3',
//       title: 'Develop a transportation company website',
//       qualification: 'Professional',
//       company: {
//         companyId: '6',
//         companyName: 'Revolutions',
//         verifiedCompany: true,
//         country: {
//           countryId: 'C2',
//           countryFlag: countryFlagsPath + 'img-02.png',
//           countryName: 'United States',
//         },
//       },
//       type: 'Per Fixed',
//       duration: '15 Days',
//     },
//     {
//       jobId: 'gy3yV2V567m5u',
//       title: 'Designer Finger Change temp to Arabic and install on alloi',
//       qualification: 'Professional',
//       company: {
//         companyId: '7',
//         companyName: 'Alfredo Bossard',
//         country: {
//           countryId: 'C1',
//           countryFlag: countryFlagsPath + 'img-01.png',
//           countryName: 'Australia',
//         },
//       },
//       type: 'Per Hour',
//       duration: '03 Months',
//     },
//   ],
// };
//   return { projectList }; //, freelancerList.totalAmountOfFreelancers};
// };
