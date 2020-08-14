import { JobData } from '../Data/Data';
import { http } from '../Data/Http';
import { countryFlagsPath, flagDefaultPath } from '../Data/GlobalValues';
import { type } from 'jquery';
import { isNullOrUndefined } from 'util';
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

export const GetProjectList = async (
  pageNumber: number,
  amounOfItemsOnPage: number,
  categoryFilter: string[],
  projectTypeFilter: string[],
  locationFilter: string[],
  arrayTypeFilter: string[],
  projectLengthFilter: string[],
  langFilter: string[],
  companyFilter: string[],
  stringForSearching: string,
  statusFilter: string[], // ongoing, cancel, completed
) => {
  let projectList: ProjectsProps;
  projectList = { totalAmountOfProjects: 0, projects: [] };
  let response: HttpResponse<any>;
  let requestBody;
  let minPrice = '';
  let maxPrice = '';
  let typeFilter = '';
  if (arrayTypeFilter.length > 0) {
    if (arrayTypeFilter[0].substring(0, 1) === '0') {
      typeFilter = '0';
      let startPos = arrayTypeFilter[0].indexOf(' ' + 1);
      let endPos = arrayTypeFilter[0].indexOf('$');
      minPrice = arrayTypeFilter[0].substring(startPos, endPos);
      startPos = endPos + 2;
      endPos = arrayTypeFilter[0].lastIndexOf('$');
      maxPrice = arrayTypeFilter[0].substring(startPos, endPos);
    } else {
      if (arrayTypeFilter[0].substring(0, 1) === '1') {
        typeFilter = '1';
      } else {
        typeFilter = '';
      }
    }
  }
  // console.log(stringForSearching);
  requestBody = {
    pageNumber: pageNumber,
    amountOfItemsOnPage: amounOfItemsOnPage,
    categoryFilter: categoryFilter,
    projectTypeFilter: projectTypeFilter,
    locationFilter: locationFilter,
    typeFilter: typeFilter,
    minPrice: minPrice,
    maxPrice: maxPrice,
    projectLength: projectLengthFilter,
    langFilter: langFilter,
    companyFilter: companyFilter,
    stringForSearching:
      stringForSearching === undefined ? '' : stringForSearching,
    statusFilter: statusFilter === undefined ? '' : statusFilter[0],
  };
  console.log(requestBody);
  //console.log(statusFilter);
  try {
    response = await http({
      path: `Job/List`,
      method: 'Post',
      body: requestBody,
    });
    console.log(response);
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

  // projectList = {
  //   totalAmountOfProjects: 100,
  //   projects: [
  //     {
  //       jobId: 'gy3yV2Vm5u',
  //       title: 'I want some customization and installation',
  //       qualification: 'Professional',
  //       saved: true,
  //       company: {
  //         userId: '1',
  //         firstName: 'Luanne',
  //         lastName: 'Mattioli',
  //         email: 'G',
  //         gender: 'male',
  //         joinDate: '06.07.30',
  //         userName: '',
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
  //       jobDetails:
  //         'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit inati voluptate velit esse cillum doloreeutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit animid est laborum ut perspiciatis...',
  //       skillsRequired: [
  //         { id: '1', name: 'PHP' },
  //         { id: '2', name: 'HTML' },
  //         { id: '3', name: 'JQuery' },
  //       ],
  //     },
  //     {
  //       jobId: '5aUQgM2ZbW',
  //       title: 'Website changes in HTML &amp; PH',
  //       qualification: 'Professional',
  //       company: {
  //         userId: '1',
  //         firstName: 'Luanne',
  //         lastName: 'G',
  //         email: 'G',
  //         gender: 'male',
  //         joinDate: '06.07.30',
  //         userName: '',
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
  //       jobDetails:
  //         'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
  //       skillsRequired: [
  //         { id: '1', name: 'PHP' },
  //         { id: '2', name: 'HTML' },
  //         { id: '3', name: 'JQuery' },
  //         { id: '4', name: 'Team Management' },
  //       ],
  //     },

  //     {
  //       jobId: 'gy3yV2V675u',
  //       title: 'Need Amazon MWS handshaking',
  //       qualification: 'Professional',
  //       company: {
  //         companyId: '3',
  //         userId: '1',
  //         firstName: 'G',
  //         lastName: 'G',
  //         email: 'G',
  //         gender: 'male',
  //         joinDate: '06.07.30',
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
  //       jobDetails:
  //         'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
  //       skillsRequired: [
  //         { id: '1', name: 'PHP' },
  //         { id: '2', name: 'HTML' },
  //         { id: '3', name: 'JQuery' },
  //       ],
  //     },

  //     {
  //       jobId: 'gy3675yV2Vm5u',
  //       title: 'Form-Slider Plugin for Wordpress',
  //       qualification: 'Professional',
  //       company: {
  //         userId: '1',
  //         firstName: 'Luanne',
  //         lastName: 'G',
  //         email: 'G',
  //         gender: 'male',
  //         joinDate: '06.07.30',
  //         userName: '',
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
  //       jobDetails:
  //         'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
  //       skillsRequired: [
  //         { id: '1', name: 'PHP' },
  //         { id: '2', name: 'HTML' },
  //         { id: '3', name: 'JQuery' },
  //       ],
  //     },

  //     {
  //       jobId: 'bsf3NAxTMj',
  //       title: 'Classifieds Posting, Data Entry, Typing',
  //       qualification: 'Intermediate',
  //       company: {
  //         userId: '1',
  //         firstName: 'Luanne',

  //         lastName: 'G',
  //         email: 'G',
  //         gender: 'male',
  //         joinDate: '06.07.30',
  //         userName: '',
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
  //       jobDetails:
  //         'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
  //       skillsRequired: [
  //         { id: '1', name: 'PHP' },
  //         { id: '2', name: 'HTML' },
  //         { id: '3', name: 'JQuery' },
  //       ],
  //     },

  //     {
  //       jobId: '5aUQgM2ZbW3',
  //       title: 'Develop a transportation company website',
  //       qualification: 'Professional',
  //       company: {
  //         userId: '1',
  //         firstName: 'Luanne',
  //         lastName: 'G',
  //         email: 'G',
  //         gender: 'male',
  //         joinDate: '06.07.30',
  //         userName: '',
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
  //       jobDetails:
  //         'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
  //       skillsRequired: [
  //         { id: '1', name: 'PHP' },
  //         { id: '2', name: 'HTML' },
  //         { id: '4', name: 'Team Management' },
  //       ],
  //     },

  //     {
  //       jobId: 'gy3yV2V567m5u',
  //       title: 'Designer Finger Change temp to Arabic and install on alloi',
  //       qualification: 'Professional',
  //       company: {
  //         userId: '1',
  //         firstName: 'Luanne',
  //         lastName: 'G',
  //         email: 'G',
  //         gender: 'male',
  //         joinDate: '06.07.30',
  //         userName: '',
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
  //       jobDetails:
  //         'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
  //       skillsRequired: [
  //         { id: '1', name: 'PHP' },
  //         { id: '2', name: 'HTML' },
  //         { id: '4', name: 'Team Management' },
  //       ],
  //     },
  //   ],
  // };
  return { projectList }; //, freelancerList.totalAmountOfFreelancers};
};
