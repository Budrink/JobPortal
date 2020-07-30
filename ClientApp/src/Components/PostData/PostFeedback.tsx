import { wait } from '../GetData/wait';

export const PostFeedback = async (
  projectId: string, //iD of porject for feedback
  text: string,
  rating: number,
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
