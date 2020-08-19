import { wait } from './wait';
import { ArticlesGridImgPath, DefaultImg } from '../Data/GlobalValues';
// export const getTopCategoryList = async (): Promise<Props> => {
export const GetPopularArticleList = async () => {
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

  let articleList = [
    {
      articleId: 'TC1',
      articleName: '10 Mesmerizing Examples Of Business',
      date: 'Jun 27, 2018',
      articleImg: 'img-01.jpg',
    },
    {
      articleId: 'TC2',
      articleName: 'Introducing The Simple Way To Business',
      date: 'Jun 27, 2018',
    },
    {
      articleId: 'TC3',
      articleName: '7 Practical Tactics to Turn Business Into a Sales Hub',
      date: 'Jun 27, 2018',
      articleImg: 'img-01.jpg',
    },
  ];
  articleList.map((article) => {
    if (article.articleImg === undefined) {
      article.articleImg = ArticlesGridImgPath + DefaultImg;
    } else {
      article.articleImg = ArticlesGridImgPath + article.articleImg;
    }
  });
  return articleList;
};
