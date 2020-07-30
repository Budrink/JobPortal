import { ProjectType } from '../Data/Data';
import { wait } from './wait';

export const getProjectTypeList = async (): Promise<ProjectType[]> => {
  // export const getuserTypeList = (): userTypeData[] => {
  let projectTypeList: ProjectType[] = [];

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       userTypeList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  projectTypeList = [
    {
      projectTypeId: 'PT1',
      projectTypeName: 'Hourly Based Project',
    },
    {
      projectTypeId: 'PT2',
      projectTypeName: ' Fixed Price Project',
    },
  ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return projectTypeList;
};
