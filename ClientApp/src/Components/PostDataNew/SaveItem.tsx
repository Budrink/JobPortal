import { http } from '../Data/Http';

export const SaveFreelancer = async (
  senderId: string,
  freelancerId: string,
  saved: boolean,
): Promise<any> => {
  let response;
  let requestBody = {
    itemId: freelancerId,
    userId: senderId,
    savedItemType: '2',
    save: saved,
  };

  try {
    response = await http({
      path: `Items`,
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

export const SaveJob = async (
  senderId: string,
  jobId: string,
  saved: boolean,
): Promise<any> => {
  let response;
  let requestBody = {
    itemId: jobId,
    userid: senderId,
    savedItemType: '0',
    save: saved,
  };

  try {
    response = await http({
      path: `Items`,
      method: 'POST',
      body: requestBody,
    });
    // let r = response.parsedBody;
    return true;
  } catch (error) {
    window.alert(error);
    return false;
  }
};

//Send the id of Company wich will be add to savedItems
export const SaveCompany = async (
  senderId: string,
  companyId: string,
  saved: boolean,
): Promise<any> => {
  let response;
  let requestBody = {
    itemId: companyId,
    userid: senderId,
    savedItemType: '1',
    save: saved,
  };

  try {
    response = await http({
      path: `Items`,
      method: 'POST',
      body: requestBody,
    });
    // let r = response.parsedBody;
    return true;
  } catch (error) {
    window.alert(error);
    return false;
  }
};
