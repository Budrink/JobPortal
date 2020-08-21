import { http } from '../Data/Http';
export const PostFeedback = async (
  projectId: string, //iD of porject for feedback
  text: string,
  rating: number,
  userId: string,
): Promise<any> => {
  let response;
  let requestBody = {
    projectId: projectId,
    text: text,
    rating: rating,
  };

  try {
    response = await http({
      path: `Freelancer/${userId}/feedback`,
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
