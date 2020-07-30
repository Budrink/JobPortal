import { File } from '../Data/Data';
import { wait } from '../GetData/wait';

export interface fileToPost {
  iD: string; // remove
  name: string;
  size: number;
  content: string;
}
export const PostFiles = async (fileList: fileToPost[]): Promise<File[]> => {
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
  let newFIles = fileList.map((file) => {
    return { iD: file.iD, size: file.size, name: file.name, link: '/' };
  });

  return newFIles;
};
