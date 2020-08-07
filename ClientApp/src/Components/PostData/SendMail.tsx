import { http } from '../Data/Http';
import { File, Message } from '../Data/Data';
export const SendMail = async (
  // senderId: string,
  receiverId: string,
  text: string,
  attachments?: File[],
): Promise<any> => {
  let requestBody;
  requestBody = {
    senderId: localStorage.getItem('userId'),
    receiverId: receiverId,
    text: text,
    attachments: attachments,
  };
  console.log(requestBody);
  // console.log(requestBody);
  let response;
  try {
    response = await http({
      path: `Messages/sendmail`,
      method: 'POST',
      body: requestBody,
    });
    console.log(response);
    return response.parsedBody;
  } catch (error) {
    window.alert(error);
    return error;
  }
};
