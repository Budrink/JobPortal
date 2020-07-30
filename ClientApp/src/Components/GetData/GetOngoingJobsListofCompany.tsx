
import { wait } from './wait';
///// List of projects for makinbg proposals for freelancer

export const GetOngoingJobsListofCompany = async (companyId: string) => {
  await wait(500);
  const projectList = {
    projects: [
      {
        jobId: 'gy3yV2Vm5u',
        title: 'I want some customization and installation',
        duration: '03 Months',
      },
      {
        jobId: '5aUQgM2ZbW',
        title: 'Website changes in HTML &amp; PH',
        duration: '03 Months',
      },

      {
        jobId: 'gy3yV2V67ff',
        title: 'Develop a transportation company website',
        duration: '03 Months',
      },
      {
        jobId: 'gy3yV2V675u',
        title: 'Need Amazon MWS handshaking',
        duration: '03 Months',
      },

      {
        jobId: 'gy3675yV2Vm5u',
        title: 'Form-Slider Plugin for Wordpress',
        duration: '03 Months',
      },

      {
        jobId: 'bsf3NAxTMj',
        title: 'Classifieds Posting, Data Entry, Typing',

        duration: '15 Days',
      },

      {
        jobId: '5aUQgM2ZbW3',
        title: 'Develop a transportation company website',
        duration: '15 Days',
      },

      {
        jobId: 'gy3yV2V567m5u',
        title: 'Designer Finger Change temp to Arabic and install on alloi',
        duration: '03 Months',
      },
    ],
  };
  return { projectList }; //, freelancerList.totalAmountOfFreelancers};
};
