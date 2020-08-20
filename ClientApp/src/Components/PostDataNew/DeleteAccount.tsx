import { http } from '../Data/Http';
export const PostDeleteAccount = async (
  password: string,
  password2: string,
  message: string,
  reason: string,
  termsconditions: boolean,
  termsconditions1: boolean,
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
