import { wait } from './wait';

// export const getTopCategoryList = async (): Promise<Props> => {
export const GetPopularArticleTags = async () => {
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
