import { ArticlesGridImgPath, DefaultImg } from '../Data/GlobalValues';
import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
interface article {
  articleId: string;
  articleName: string;
  date: string;
  articleImg: string;
}
export const GetPopularArticleList = async (amount?: number): Promise<any> => {
  let articleList: article[] = [];

  let response: HttpResponse<any>;
  try {
    if (amount === undefined) {
      amount = 10;
    }
    response = await http({
      path: `Article/popularArticlesList?amount=${amount}`,
      method: 'Get',
    });

    if (response.parsedBody !== null) {
      articleList = response.parsedBody;
      if (articleList !== undefined) {
        articleList.map(
          (article) =>
            (article.articleImg =
              article.articleImg === undefined
                ? ArticlesGridImgPath + DefaultImg
                : ArticlesGridImgPath + article.articleImg),
        );
      }
    }
  } catch (e) {
    console.log(e);
  }

  return articleList;
};

// export const GetPopularArticleList = async () => {
//   let articleList = [
//     {
//       articleId: 'TC1',
//       articleName: '10 Mesmerizing Examples Of Business',
//       date: 'Jun 27, 2018',
//       articleImg: 'img-01.jpg',
//     },
//     {
//       articleId: 'TC2',
//       articleName: 'Introducing The Simple Way To Business',
//       date: 'Jun 27, 2018',
//     },
//     {
//       articleId: 'TC3',
//       articleName: '7 Practical Tactics to Turn Business Into a Sales Hub',
//       date: 'Jun 27, 2018',
//       articleImg: 'img-01.jpg',
//     },
//   ];
//   articleList.map((article) => {
//     if (article.articleImg === undefined) {
//       article.articleImg = ArticlesGridImgPath + DefaultImg;
//     } else {
//       article.articleImg = ArticlesGridImgPath + article.articleImg;
//     }
//   });
//   return articleList;
// };
