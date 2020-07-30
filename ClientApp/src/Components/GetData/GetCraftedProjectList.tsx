import { CraftedProject } from '../Data/Data';
import {
  CraftedProjectPath,
  CraftedProjectDefaultPath,
} from '../Data/GlobalValues';

export const GetCraftedProjectList = (
  userId: string,
  amountOfItemsOnPage: number,
  numberOfPage: number,
): CraftedProject[] => {
  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/user')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       countryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);

  let craftedProjectList: CraftedProject[] = [
    {
      iD: '1',
      userId: '1',
      name: 'themeforest',
      link: 'https://themeforest.net',
    },
    {
      iD: '2',
      userId: '1',
      name: 'Videohive',
      link: 'https://Videohive.net',
      img: 'img-02.jpg',
    },
    {
      iD: '3',
      userId: '1',
      name: 'Codecanyon',
      link: 'https://Codecanyon.net',
      img: 'img-03.jpg',
    },
    {
      iD: '4',
      userId: '1',
      name: 'Graphicriver',
      link: 'https://Graphicriver.net',
    },
    { iD: '5', userId: '1', name: 'Photodune', link: 'www.photodune.net' },
    {
      iD: '6',
      userId: '1',
      name: 'Audiojungle',
      link: 'https://Audiojungle.net',
    },
  ];

  craftedProjectList.map(
    (project) =>
      (project.img = project.img
        ? CraftedProjectPath + project.img
        : CraftedProjectDefaultPath),
  );

  return craftedProjectList;
};
