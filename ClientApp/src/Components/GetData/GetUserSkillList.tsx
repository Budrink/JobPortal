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
      iD: '133',
      skill: { iD: '1', name: 'PHP' },
      percent: 90,
    },
    {
      iD: '16u565',
      skill: { iD: '2', name: 'Website Design' },
      percent: 55,
    },
    {
      iD: '17676',
      skill: { iD: '3', name: 'HTML 5 ' },
      percent: 99,
    },

    {
      iD: '1fgnfg',
      skill: { iD: '4', name: 'Graphic Design' },
      percent: 80,
    },

    {
      iD: '1fnfg',
      skill: { iD: '5', name: '   WordPress ' },
      percent: 75,
    },
    {
      iD: '1fgbfg',
      skill: { iD: '6', name: 'SEO' },
      percent: 35,
    },

    {
      iD: '1hgrtrhr',
      skill: { iD: '7', name: 'My SQL' },
      percent: 40,
    },

    {
      iD: '1trtyj',
      skill: { iD: '8', name: 'Content Writing' },
      percent: 80,
    },

    { iD: '1rtht', skill: { iD: '9', name: 'CSS' }, percent: 80 },
  ];
  /// console.log(JSON.stringify(data));
  return userSkills;
};
