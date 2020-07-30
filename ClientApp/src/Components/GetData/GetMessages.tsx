import { wait } from './wait';
import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';

// all the merssages of userIf with correspondent - userId is the main user (user of Dashboard)
export const GetMessages = async (
  userId: string,
  correspondentId: string,
  pageNumber: number,
  amountOfMessagesOnPage: number,
) => {
  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       countryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);
  //correspondence of user Id='10'
  const messageList =
    //first correspondent:
    [
      {
        messageId: '1',
        senderId: '10',
        receiverId: '1',
        status: 'new',
        date: '15-06-2020 02:20',
        text:
          '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
          'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
          'qui dolorem ipsum quia dolor sit amet' +
          'Sed quia consequuntur magni dolores eos qui ratione volupt',
        attachments: [
          { iD: '1', name: 'introduction', link: 'https:www.yandex.ru' },
          { iD: '12', name: 'description', link: 'https:www.yandex.ru' },
        ],
      },
      {
        messageId: '2',
        senderId: '1',
        receiverId: '10',
        status: 'opened',
        date: '15-06-2020 01:25',
        text:
          '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
          'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
          'qui dolorem ipsum quia dolor sit amet' +
          'Sed quia consequuntur magni dolores eos qui ratione volupt',
      },
      {
        messageId: '3',
        senderId: '10',
        receiverId: '1',
        status: 'opened',
        date: '10-06-2020 20:20',
        text:
          '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
          'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
          'qui dolorem ipsum quia dolor sit amet' +
          'Sed quia consequuntur magni dolores eos qui ratione volupt',
      },
      {
        messageId: '4',
        senderId: '10',
        receiverId: '1',
        status: 'new',
        date: '15-06-2020 18:20',
        text:
          '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
          'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
          'qui dolorem ipsum quia dolor sit amet' +
          'Sed quia consequuntur magni dolores eos qui ratione volupt',
        attachments: [
          { iD: '1', name: 'introduction', link: 'https:www.yandex.ru' },
          { iD: '12', name: 'description', link: 'https:www.yandex.ru' },
        ],
      },
      {
        messageId: '20',
        senderId: '1',
        receiverId: '10',
        status: 'opened',
        date: '15-06-2019  02:20',
        text:
          '1 Adipisci velit, sed quia non numquam eius modi tempora ' +
          'Eaque ipsa quae ab illo inventore veritatis et quasi architecto' +
          'qui dolorem ipsum quia dolor sit amet' +
          'Sed quia consequuntur magni dolores eos qui ratione volupt',
        attachments: [
          { iD: '1', name: 'introduction', link: 'https:www.yandex.ru' },
          { iD: '12', name: 'description', link: 'https:www.yandex.ru' },
        ],
      },
    ];

  return messageList;
};
