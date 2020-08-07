import { File } from '../Data/Data';
import { http } from '../Data/Http';

export interface fileToPost {
  name: string;
  size: number;
  content: string;
}

export const PostFiles = async (file: fileToPost): Promise<any> => {
  let f: FormData;
  f = new FormData();
  f.append('file', file.content, file.name);
  let response;
  try {
    response = await http({
      path: `Upload/bytes`,
      method: 'POST',
      body: f,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    let r = response.parsedBody;

    let newFile: File;
    // newFile = {
    //   iD: r.Attachment.Id,
    //   name: r.Attachment.FileName,
    //   link: r.Attachment.fileLink,
    //   size: r.Attachments.FileSize,
    // };
    return r;
  } catch (error) {
    window.alert(error);
    return error;
  }
};
