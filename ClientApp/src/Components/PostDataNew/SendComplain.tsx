import { http } from '../Data/Http';

export const SendComplain = async (
  senderId: string,
  userId: string,
  reason: string,
  text: string,
): Promise<any> => {
  let response;
  let requestBody = {
    password: password,
    message: message,
    reason: reason,
    termsconditions: termsconditions,
  };

  try {
    response = await http({
      path: `User/delete`,
      method: 'POST',
      body: requestBody,
    });
    let r = response.parsedBody;
    //  if( r=true)
    // return true;
    return r;
  } catch (error) {
    window.alert(error);
    return false;
  }
};
