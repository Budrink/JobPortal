import { http } from '../Data/Http';
import { File, Message } from '../Data/Data';
export const SendMail = async (
 // senderId: string,
  receiverId: string,
  text: string,
  attachments?: File[],
):   Promise<any> => {
    let requestBody;
    requestBody = {
      senderId: localStorage.getItem('userId'),
      receiverId: receiverId,
      // userBunnerFile?: File;
      text: text,
      attachments:attachments,
     };
    // console.log(requestBody);
    let response;
    try {
      response = await http({
        path: `sendmail`,
        method: 'POST',
        body: requestBody,
      });
      return response.parsedBody;
    } catch (error) {
      window.alert(error);
      return error;
    }
  };
};
