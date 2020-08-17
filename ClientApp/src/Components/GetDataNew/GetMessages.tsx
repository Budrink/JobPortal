import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
import { http } from '../Data/Http';
import { Message } from '../Data/Data';
// all the merssages of userIf with correspondent - userId is the main user (user of Dashboard)

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
//userId- the id of user whom correspondents we get
export const GetMessages = async (
  userId: string,
  correspondentId: string,
  pageNumber: number,
  amountOfMessagesOnPage: number,
): Promise<any> => {
  let messageList: messages[];
  messageList = [];

  // if (localStorage.getItem('login') !== 'true') {
  //   return correspondentList;
  // }
  // const userId = localStorage.getItem('userId');
  // console.log(userId);
  let requestBody = {
    userId: userId,
    correspondentId: correspondentId,
    pageNumber: pageNumber,
    amountOfMessagesOnPage: amountOfMessagesOnPage,
  };
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Messages/getmessages`,
      method: 'Post',
      body: requestBody,
    });
    console.log(response);
    if (response.parsedBody !== null) {
      messageList = response.parsedBody;
      console.log(messageList);
    }
  } catch (e) {
    console.log(e);
  }

  return messageList;
};

//   const messageList =
//     //first correspondent:
//     [
//       {
//         messageId: '1',
//         senderId: '10',
//         receiverId: '1',
//         status: 'new',
//         date: '15-06-2020 02:20',
//         text:
//           '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
//           'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
//           'qui dolorem ipsum quia dolor sit amet' +
//           'Sed quia consequuntur magni dolores eos qui ratione volupt',
//         attachments: [
//           { iD: '1', name: 'introduction', link: 'https:www.yandex.ru' },
//           { iD: '12', name: 'description', link: 'https:www.yandex.ru' },
//         ],
//       },
//       {
//         messageId: '2',
//         senderId: '1',
//         receiverId: '10',
//         status: 'opened',
//         date: '15-06-2020 01:25',
//         text:
//           '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
//           'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
//           'qui dolorem ipsum quia dolor sit amet' +
//           'Sed quia consequuntur magni dolores eos qui ratione volupt',
//       },
//       {
//         messageId: '3',
//         senderId: '10',
//         receiverId: '1',
//         status: 'opened',
//         date: '10-06-2020 20:20',
//         text:
//           '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
//           'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
//           'qui dolorem ipsum quia dolor sit amet' +
//           'Sed quia consequuntur magni dolores eos qui ratione volupt',
//       },
//       {
//         messageId: '4',
//         senderId: '10',
//         receiverId: '1',
//         status: 'new',
//         date: '15-06-2020 18:20',
//         text:
//           '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
//           'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
//           'qui dolorem ipsum quia dolor sit amet' +
//           'Sed quia consequuntur magni dolores eos qui ratione volupt',
//         attachments: [
//           { iD: '1', name: 'introduction', link: 'https:www.yandex.ru' },
//           { iD: '12', name: 'description', link: 'https:www.yandex.ru' },
//         ],
//       },
//       {
//         messageId: '20',
//         senderId: '1',
//         receiverId: '10',
//         status: 'opened',
//         date: '15-06-2019  02:20',
//         text:
//           '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
//           'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
//           'qui dolorem ipsum quia dolor sit amet' +
//           'Sed quia consequuntur magni dolores eos qui ratione volupt',
//         attachments: [
//           { iD: '1', name: 'introduction', link: 'https:www.yandex.ru' },
//           { iD: '12', name: 'description', link: 'https:www.yandex.ru' },
//         ],
//       },
//     ];

//   return messageList;
// };
