import { http } from '../Data/Http';

export const HireFreelancer = async (
  senderId: string,
  freelancerId: string,
  // jobId: string,
  proposalId: string,
): Promise<any> => {
  let response;
  let requestBody = {
    freelancerId: freelancerId,
    senderId: senderId,
    proposalId: proposalId,
  };

  try {
    response = await http({
      path: `Contract/hire`,
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
