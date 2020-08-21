import { http } from '../Data/Http';

export const SendComplain = async (
  senderId: string,
  userId: string,
  reason: string,
  text: string,
): Promise<any> => {
  let response;
  let requestBody = {
    // senderId: senderId,
    userId: userId,
    reason: reason,
    text: text,
  };

  try {
    response = await http({
      path: `User/complain/${senderId}`,
      method: 'POST',
      body: requestBody,
    });
    let r = response.parsedBody;
    return r;
  } catch (error) {
    return error;
  }
};
