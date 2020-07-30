import { wait } from './wait';
import { countryFlagsPath } from '../Data/GlobalValues';

//iD- iD of user who asked for saved freelancers
export const GetSavedProjectList = async (
  iD: string,
  pageNumber: number,
  amounOfItemsOnPage: number,
) => {
  await wait(500);
  const projectList = {
    totalAmountOfProjects: 100,
    projects: [
      {
        jobId: 'gy3yV2Vm5u',
        title: 'I want some customization and installation',
        qualification: 'Professional',
        saved: true,
        company: {
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
      },
      {
        jobId: '5aUQgM2ZbW',
        title: 'Website changes in HTML &amp; PH',
        qualification: 'Professional',
        company: {
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
      },

      {
        jobId: 'gy3yV2V675u',
        title: 'Need Amazon MWS handshaking',
        qualification: 'Professional',
        company: {
          companyId: '3',
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
      },

      {
        jobId: 'gy3675yV2Vm5u',
        title: 'Form-Slider Plugin for Wordpress',
        qualification: 'Professional',
        company: {
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
      },
      {
        jobId: 'bsf3NAxTMj',
        title: 'Classifieds Posting, Data Entry, Typing',
        qualification: 'Intermediate',
        company: {
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
      },
      {
        jobId: '5aUQgM2ZbW3',
        title: 'Develop a transportation company website',
        qualification: 'Professional',
        company: {
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
      },
      {
        jobId: 'gy3yV2V567m5u',
        title: 'Designer Finger Change temp to Arabic and install on alloi',
        qualification: 'Professional',
        company: {
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
      },
    ],
  };
  return { projectList }; //, freelancerList.totalAmountOfFreelancers};
};
