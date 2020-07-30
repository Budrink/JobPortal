import { wait } from '../GetData/wait';

export const SendComplain = async (
  senderId: string,
  userId: string,
  reason: string,
  text: string,
) => {
  // return the new list of m,essages with the new one

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
