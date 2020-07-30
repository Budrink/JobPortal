import { wait } from './wait';

// export const getTopCategoryList = async (): Promise<Props> => {
export const GetPopularArticleTags = async () => {
  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       categoryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);
  let tagList = [
    {
      tagId: 'TC1',
      tagName: 'Electronics',
    },
    {
      tagId: 'TC2',
      tagName: 'DIY',
    },
    {
      tagId: 'TC3',
      tagName: 'Superism',
    },
    {
      tagId: 'TC4',
      tagName: 'Business',
    },

    {
      tagId: 'TC15',
      tagName: 'Development',
    },
    {
      tagId: 'TC16',
      tagName: 'Collaboration',
    },
    {
      tagId: 'TC17',
      tagName: 'Decent',
    },
  ];

  return tagList;
};
