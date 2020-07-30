import { wait } from '../GetData/wait';
import { File, Message } from '../Data/Data';
export const SendMail = async (
  senderId: string,
  receiverId: string,
  text: string,
  attachments?: File[],
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
  //  let messages: Message[];

  // messages = [];
  // return messages;
  return true;
};
