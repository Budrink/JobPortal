import { http } from '../Data/Http';

export const SendOffer = async (
  senderId: string,
  freelancerId: string,
  jobId: string,
  description: string,
  deadLine: string,
): Promise<any> => {
  let response;
  let requestBody = {
    senderId: senderId,
    freelancerId: freelancerId,
    jobId: jobId,
    description: description,
    deadLine: deadLine,
  };

  try {
    response = await http({
      path: `User/sendoffer}`,
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
