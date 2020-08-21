import { http } from '../Data/Http';

export const RepostJob = async (jobId: string): Promise<any> => {
  try {
    let response;

    response = await http({
      path: `Job/${jobId}/repost`,
      method: 'Post',
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

export const DeleteJob = async (jobId: string): Promise<any> => {
  try {
    let response;

    response = await http({
      path: `Job/${jobId}`,
      method: 'Delete',
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
export const CompleteJob = async (jobId: string): Promise<any> => {
  try {
    let response;

    response = await http({
      path: `Job/${jobId}/complete`,
      method: 'Post',
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
