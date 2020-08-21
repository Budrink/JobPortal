// import { http } from '../Data/Http';
// export const PostFeedback = async (
//   projectId: string, //iD of porject for feedback
//   text: string,
//   rating: number,
// ): Promise<any> => {
//   let response;
//   let requestBody = {
//     projectId: projectId,
//     text: text,
//     rating: rating,
//   };

//   try {
//     response = await http({
//       path: `User/delete`,
//       method: 'POST',
//       body: requestBody,
//     });
//     let r = response.parsedBody;
//     //  if( r=true)
//     // return true;
//     return r;
//   } catch (error) {
//     window.alert(error);
//     return false;
//   }
// };
