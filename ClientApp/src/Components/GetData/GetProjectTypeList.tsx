import { ProjectType } from '../Data/Data';

export const getProjectTypeList = async (): Promise<ProjectType[]> => {
  // export const getuserTypeList = (): userTypeData[] => {
  let projectTypeList: ProjectType[] = [];

  //await wait(0);

  projectTypeList = [
    {
      projectTypeId: '0',
      projectTypeName: 'Hourly Based Project',
    },
    {
      projectTypeId: '1',
      projectTypeName: 'Fixed Price Project',
    },
  ];

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return projectTypeList;
};
