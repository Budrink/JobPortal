import { UserSkill } from '../Data/Data';
// import { wait } from './wait';
// import { companyPath, countryFlagsPath } from '../Data/GlobalValues';
export const GetUserSkillList = (): UserSkill[] => {
  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/user')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       countryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  //   await wait(500);
  let userSkills: UserSkill[] = [
    {
      id: '133',
      skill: { id: '1', name: 'PHP' },
      percent: 90,
    },
    {
      id: '16u565',
      skill: { id: '2', name: 'Website Design' },
      percent: 55,
    },
    {
      id: '17676',
      skill: { id: '3', name: 'HTML 5 ' },
      percent: 99,
    },

    {
      id: '1fgnfg',
      skill: { id: '4', name: 'Graphic Design' },
      percent: 80,
    },

    {
      id: '1fnfg',
      skill: { id: '5', name: '   WordPress ' },
      percent: 75,
    },
    {
      id: '1fgbfg',
      skill: { id: '6', name: 'SEO' },
      percent: 35,
    },

    {
      id: '1hgrtrhr',
      skill: { id: '7', name: 'My SQL' },
      percent: 40,
    },

    {
      id: '1trtyj',
      skill: { id: '8', name: 'Content Writing' },
      percent: 80,
    },

    { id: '1rtht', skill: { id: '9', name: 'CSS' }, percent: 80 },
  ];
  /// console.log(JSON.stringify(data));
  return userSkills;
};
