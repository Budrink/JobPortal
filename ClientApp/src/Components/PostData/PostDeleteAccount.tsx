import { wait } from '../GetData/wait';

export const PostDeleteAccount = async (
  password: string,
  password2: string,
  message: string,
  reason: string,
  termsconditions: boolean,
  termsconditions1: boolean,
): Promise<boolean> => {
  // export const getCategoryList = (): CategoryData[] => {

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       categoryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  return true;
};
