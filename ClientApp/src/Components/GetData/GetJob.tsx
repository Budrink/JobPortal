import { JobData } from '../Data/Data';
import { wait } from './wait';
import { countryFlagsPath } from '../Data/GlobalValues';
///Переписать для БД

export const GetJob = async (jobId: string) => {
  await wait(500);
  interface extendedJob extends JobData {
    saved?: boolean; // from savedJob of current user
  }

  const job: extendedJob = {
    jobId: 'gy3yV2Vm5u',
    title:
      'Webpage Takes Many Seconds to Load, I Want to Reduce it to 3 or 4 Seconds Max',
    qualification: 'Professional',
    saved: true,
    company: {
      userId: '1',
      firstName: 'G',
      lastName: 'G',
      email: 'G',
      gender: 'male',
      joinDate: '06.07.30',
      userName: '',
      verifiedCompany: true,
      companyId: '1',
      companyName: 'Angry Creative Studio',
      country: {
        countryId: 'C2',
        countryFlag: countryFlagsPath + 'img-02.png',
        countryName: 'United States',
      },
    },
    type: 'Fixed',
    duration: '15 Days',
    jobDetails:
      '<p>Excepteur sint occaecat cupidatat non proident, saeunt in culpa qui officia deserunt mollit anim laborum. Seden utem perspiciatis undesieu omnis voluptatem accusantium doque laudantium, totam rem aiam eaqueiu ipsa quae ab illoion inventore veritatisetm quasitea architecto beataea dictaed quia couuntur magni dolores eos aquist ratione vtatem seque nesnt. Neque porro quamest quioremas ipsum quiatem dolor sitem ameteism conctetur adipisci velit sedate quianon.</p><p>Laborum sed ut perspiciatis unde omnis iste natus error sitems voluptatem accusantium doloremque laudantium, totam rem aiam eaque ipsa quae ab illo inventore veritatis etna quasi architecto beatae vitae dictation explicabo. nemo enim ipsam fugit.</p><ul class="wt-projectliststyle"><li><span><i class="fa fa-check"></i>Nemo enim ipsam voluptatem quia</span></li><li><span><i class="fa fa-check"></i>Adipisci velit, sed quia non numquam eius modi tempora</span></li><li><span><i class="fa fa-check"></i>Eaque ipsa quae ab illo inventore veritatis et quasi architecto</span></li><li><span><i class="fa fa-check"></i>qui dolorem ipsum quia dolor sit amet</span></li></ul><p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porrom quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonae numquam eius modi tempora incidunt labore.</p><p>Eomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p><ul class="wt-projectliststyle"><li><span><i class="fa fa-check"></i>Adipisci velit, sed quia non numquam eius modi tempora</span></li><li><span><i class="fa fa-check"></i>Eaque ipsa quae ab illo inventore veritatis et quasi architecto</span></li><li><span><i class="fa fa-check"></i>Qui dolorem ipsum quia dolor sit amet</span></li><li><span><i class="fa fa-check"></i>Nemo enim ipsam voluptatem quia</span></li> </ul><p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porrom quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonae numquam eius modi tempora incidunt labore ste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p><p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porrom quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia nonae numquam eius modi tempora incidunt labore.</p>',
    skillsRequired: [
      { id: '1', name: 'PHP' },
      { id: '2', name: 'PHP Developer' },
      { id: '3', name: 'My SQL' },
      { id: '4', name: 'Business' },
      { id: '5', name: 'Website Development' },
      { id: '6', name: 'Collaboration' },
      { id: '7', name: 'Decent' },
    ],
    Attachments: [
      {
        id: '1',
        fileName: 'Wireframe Document.doc',
        fileSize: 512,
        linkString: 'http://www.yandex.ru',
      },
      {
        id: '2',
        fileName: 'Requirments.pdf',
        fileSize: 110,
        linkString: '/',
      },
      {
        id: '3',
        fileName: 'Company Intro.docx',
        fileSize: 224,
        linkString: '/',
      },
    ],
    proposalsCount: 150,
    hiredFreelancers: ['1', '2', '366', '70'],
  };

  return { job };
};
