import { JobData, CompanyData } from '../Data/Data';
import { wait } from './wait';
import { countryFlagsPath } from '../Data/GlobalValues';
import { RepostJob, DeleteJob } from '../PostData/PostData';
///Переписать для БД

interface ProjectsProps {
  amountOngoingProjects: number;
  amountCompletedProjects: number;
  amountCancelledProjects: number;
  projects: JobData[];
}

export const GetGanceledJobsList = async (
  companyId: string,
  pageNumber: number,
  amounOfItemsOnPage: number,
) => {
  await wait(500);
  const projectList: ProjectsProps = {
    amountOngoingProjects: 150,
    amountCompletedProjects: 1400,
    amountCancelledProjects: 2000,
    projects: [
      {
        jobId: 'gy3yV2Vm5u',
        title: 'I want some customization and installation',
        qualification: 'Professional',
        company: {
          userId: '1',
          firstName: 'Luanne',
          lastName: 'Mattioli',
          email: 'G',
          gender: 'male',
          joinDate: '06.07.30',
          userName: '',
          verifiedCompany: true,
          companyId: '1',
          companyName: 'Light Bulb Association',
          country: {
            countryId: 'C4',
            countryFlag: countryFlagsPath + 'img-04.png',
            countryName: 'England',
          },
        },
        type: ' Per Hour',
        duration: '03 Months',
        jobDetails:
          'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit inati voluptate velit esse cillum doloreeutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit animid est laborum ut perspiciatis...',
        skillsRequired: [
          { iD: '1', name: 'PHP' },
          { iD: '2', name: 'HTML' },
          { iD: '3', name: 'JQuery' },
        ],
      },

      {
        jobId: '5aUQgM2ZbW',
        title: 'Website changes in HTML &amp; PH',
        qualification: 'Professional',
        company: {
          userId: '1',
          firstName: 'Luanne',
          lastName: 'Mattioli',
          email: 'G',
          gender: 'male',
          joinDate: '06.07.30',
          userName: '',
          companyId: '2',
          companyName: 'Point trend Studio',
          verifiedCompany: true,
          country: {
            countryId: 'C2',
            countryFlag: countryFlagsPath + 'img-02.png',
            countryName: 'United States',
          },
        },
        type: ' Per Hour',
        duration: '15 Days',
        jobDetails:
          'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
        skillsRequired: [
          { iD: '1', name: 'PHP' },
          { iD: '2', name: 'HTML' },
          { iD: '3', name: 'JQuery' },
          { iD: '4', name: 'Team Management' },
        ],
      },
      {
        jobId: 'gy3yV2V67ff',
        title: 'Develop a transportation company website',
        qualification: 'Professional',
        company: {
          companyId: '3',
          userId: '1',
          firstName: 'Luanne',
          lastName: 'Mattioli',
          email: 'G',
          gender: 'male',
          joinDate: '06.07.30',
          userName: '',
          companyName: 'Vertex Association',
          country: {
            countryId: 'C5',
            countryFlag: countryFlagsPath + 'img-05.png',
            countryName: 'United Emirates',
          },
        },
        type: 'Fixed',
        duration: '03 Months',
        jobDetails:
          'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
        skillsRequired: [
          { iD: '1', name: 'PHP' },
          { iD: '2', name: 'HTML' },
          { iD: '3', name: 'JQuery' },
        ],
      },
      {
        jobId: 'gy3yV2V675u',
        title: 'Need Amazon MWS handshaking',
        qualification: 'Professional',
        company: {
          companyId: '3',
          userId: '1',
          firstName: 'Luanne',
          lastName: 'Mattioli',
          email: 'G',
          gender: 'male',
          joinDate: '06.07.30',
          userName: '',
          companyName: 'Vertex Association',
          country: {
            countryId: 'C5',
            countryFlag: countryFlagsPath + 'img-05.png',
            countryName: 'United Emirates',
          },
        },
        type: 'Fixed',
        duration: '03 Months',
        jobDetails:
          'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
        skillsRequired: [
          { iD: '1', name: 'PHP' },
          { iD: '2', name: 'HTML' },
          { iD: '3', name: 'JQuery' },
        ],
      },

      {
        jobId: 'gy3675yV2Vm5u',
        title: 'Form-Slider Plugin for Wordpress',
        qualification: 'Professional',
        company: {
          userId: '1',
          firstName: 'Luanne',
          lastName: 'Mattioli',
          email: 'G',
          gender: 'male',
          joinDate: '06.07.30',
          userName: '',
          companyId: '3',
          companyName: 'Traprator House',
          country: {
            countryId: 'C5',
            countryFlag: countryFlagsPath + 'img-05.png',
            countryName: 'United Emirates',
          },
        },
        type: 'Fixed',
        duration: '03 Months',
        jobDetails:
          'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
        skillsRequired: [
          { iD: '1', name: 'PHP' },
          { iD: '2', name: 'HTML' },
          { iD: '3', name: 'JQuery' },
        ],
      },

      {
        jobId: 'bsf3NAxTMj',
        title: 'Classifieds Posting, Data Entry, Typing',
        qualification: 'Intermediate',
        company: {
          userId: '1',
          firstName: 'Luanne',
          lastName: 'Mattioli',
          email: 'G',
          gender: 'male',
          joinDate: '06.07.30',
          userName: '',
          companyId: '5',
          companyName: 'Alfredo Bossard',
          country: {
            countryId: 'c3',
            countryFlag: countryFlagsPath + 'img-03.png',
            countryName: 'Canada',
          },
        },
        type: 'Per Fixed',
        duration: '15 Days',
        jobDetails:
          'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
        skillsRequired: [
          { iD: '1', name: 'PHP' },
          { iD: '2', name: 'HTML' },
          { iD: '3', name: 'JQuery' },
        ],
      },

      {
        jobId: '5aUQgM2ZbW3',
        title: 'Develop a transportation company website',
        qualification: 'Professional',
        company: {
          userId: '1',
          firstName: 'Luanne',
          lastName: 'Mattioli',
          email: 'G',
          gender: 'male',
          joinDate: '06.07.30',
          userName: '',
          companyId: '6',
          companyName: 'Revolutions',
          verifiedCompany: true,
          country: {
            countryId: 'C2',
            countryFlag: countryFlagsPath + 'img-02.png',
            countryName: 'United States',
          },
        },
        type: 'Per Fixed',
        duration: '15 Days',
        jobDetails:
          'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
        skillsRequired: [
          { iD: '1', name: 'PHP' },
          { iD: '2', name: 'HTML' },
          { iD: '4', name: 'Team Management' },
        ],
      },

      {
        jobId: 'gy3yV2V567m5u',
        title: 'Designer Finger Change temp to Arabic and install on alloi',
        qualification: 'Professional',
        company: {
          userId: '1',
          firstName: 'Luanne',
          lastName: 'Mattioli',
          email: 'G',
          gender: 'male',
          joinDate: '06.07.30',
          userName: '',
          companyId: '7',
          companyName: 'Alfredo Bossard',
          country: {
            countryId: 'C1',
            countryFlag: countryFlagsPath + 'img-01.png',
            countryName: 'Australia',
          },
        },
        type: 'Per Hour',
        duration: '03 Months',
        jobDetails:
          'Nisi ut aliquip ex ea commodo consequat  duis aute irure dolor in reprehenderit  inati voluptate velit esse cillum dolore  eutates fugiat nulla pariatur sunt in culpa asequi officia deserunt mollit anim  id est laborum ut perspiciatis...',
        skillsRequired: [
          { iD: '1', name: 'PHP' },
          { iD: '2', name: 'HTML' },
          { iD: '4', name: 'Team Management' },
        ],
      },
    ],
  };
  return { projectList }; //, freelancerList.totalAmountOfFreelancers};
};
