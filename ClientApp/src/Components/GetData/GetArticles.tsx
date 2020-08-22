import {
  ArticlesClassicImgPath,
  ArticlesGridImgPath,
  ArticlesListingImgPath,
  DefaultImg,
} from '../Data/GlobalValues';

import { http } from '../Data/Http';

interface article {
  articleId: string;
  articleClassicImg: string;
  articleGridImg: string;
  articleListImg: string;
  title: string;
  date: string;
  author: { userId: string; userName: string };
  tags: string[];
}

interface articleList {
  totalAmountOfArticles: Number;
  articles: article[];
}
export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const GetArticles = async (
  page: number,
  amountOfArticlesOnPage: number,
  category: string,
  stringFilter: string,
): Promise<any> => {
  let articleList: articleList;
  articleList = { totalAmountOfArticles: 0, articles: [] };

  let requestBody = {
    Page: page,
    AmountOfItemsOnPage: amountOfArticlesOnPage,
    Category: category,
    StringFilter: stringFilter,
  };
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `Article/list`,
      method: 'Post',
      body: requestBody,
    });

    if (response.parsedBody !== null) {
      articleList = response.parsedBody;
      if (articleList !== undefined) {
        if (articleList.articles !== undefined) {
          if (articleList.articles.length > 0) {
            articleList.articles.map(
              (article) =>
                (article.articleClassicImg =
                  article.articleClassicImg === undefined
                    ? (article.articleClassicImg =
                        ArticlesClassicImgPath + DefaultImg)
                    : ArticlesClassicImgPath + article.articleClassicImg),
            );
            articleList.articles.map(
              (article) =>
                (article.articleGridImg =
                  article.articleGridImg === undefined
                    ? (article.articleGridImg =
                        ArticlesGridImgPath + DefaultImg)
                    : ArticlesGridImgPath + article.articleGridImg),
            );

            articleList.articles.map(
              (article) =>
                (article.articleListImg =
                  article.articleListImg === undefined
                    ? (article.articleListImg =
                        ArticlesListingImgPath + DefaultImg)
                    : ArticlesListingImgPath + article.articleListImg),
            );
          }
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
  return articleList;
};

// export const GetArticles = async (
//   page,
//   amountOfArticlesOnPage,
//   category,
//   stringFilter,
// ) => {
//   let articleList = {
//     totalAmountOfArticles: 100,
//     articles: [
//       {
//         articleId: '1',
//         articleClassicImg: 'img-01.jpg',
//         articleGridImg: 'img-01.jpg',
//         articleListImg: 'img-01.jpg',
//         title: 'Who Else Wants To Be Successful With Business',
//         date: 'June 27, 2018',
//         author: { userId: '1', userName: 'Marina Groth' },
//         tags: ['business', 'DIY', 'SEO'],
//       },
//       {
//         articleId: '2',
//         title: '20 Top Tips For Business',
//         date: 'June 27, 2018',
//         author: { userId: '2', userName: 'Louanne Mattioli' },
//         tags: ['business', 'DIY', 'SEO'],
//       },
//       {
//         articleId: '3',
//         title:
//           '7 Ways To Keep Your Business Growing Without Burning The Midnight Oil',
//         date: 'June 27, 2018',
//         author: { userId: '3', userName: 'Soraya Roloff' },
//         tags: ['business', 'DIY', 'SEO'],
//       },
//       {
//         articleId: '4',
//         articleImg: 'img-01.jpg',
//         title: 'Clear And Unbiased Facts About Business (Without All the Hype)',
//         date: 'June 27, 2018',
//         author: { userId: '4', userName: 'Florentino Norsworthy' },
//         tags: ['business', 'DIY', 'SEO'],
//       },
//       {
//         articleId: '5',
//         articleImg: 'img-01.jpg',
//         title: 'Business And Love Have 4 Things In Common',
//         date: 'June 27, 2018',
//         author: { userId: '5', userName: ' Jasper Kinney' },
//         tags: ['business', 'DIY', 'SEO'],
//       },
//       {
//         articleId: '6',
//         articleImg: 'img-01.jpg',
//         title: 'BUSINESS 2.0 - The Next Step',
//         date: 'June 27, 2018',
//         author: { userId: '6', userName: 'Kaye Medley' },
//         tags: ['business', 'DIY', 'SEO'],
//       },
//     ],
//   };
//   articleList.articles.map((article) => {
//     if (article.articleClassicImg === undefined) {
//       article.articleClassicImg = ArticlesClassicImgPath + DefaultImg;
//     } else {
//       article.articleClassicImg =
//         ArticlesClassicImgPath + article.articleClassicImg;
//     }
//     if (article.articleGridImg === undefined) {
//       article.articleGridImg = ArticlesGridImgPath + DefaultImg;
//     } else {
//       article.articleGridImg = ArticlesGridImgPath + article.articleGridImg;
//     }
//     if (article.articleListImg === undefined) {
//       article.articleListImg = ArticlesListingImgPath + DefaultImg;
//     } else {
//       article.articleListImg = ArticlesListingImgPath + article.articleListImg;
//     }
//   });

//   return articleList;
// };
