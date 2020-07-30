import { wait } from './wait';
import {
  ArticlesClassicImgPath,
  ArticlesGridImgPath,
  ArticlesListingImgPath,
  DefaultImg,
} from '../Data/GlobalValues';

export const GetArticles = async (
  page,
  amountOfArticlesOnPage,
  category,
  stringFilter,
) => {
  await wait(500);

  let articleList = {
    totalAmountOfArticles: 100,
    articles: [
      {
        articleId: '1',
        articleClassicImg: 'img-01.jpg',
        articleGridImg: 'img-01.jpg',
        articleListImg: 'img-01.jpg',
        title: 'Who Else Wants To Be Successful With Business',
        date: 'June 27, 2018',
        author: { userId: '1', userName: 'Marina Groth' },
        tags: ['business', 'DIY', 'SEO'],
      },
      {
        articleId: '2',
        title: '20 Top Tips For Business',
        date: 'June 27, 2018',
        author: { userId: '2', userName: 'Louanne Mattioli' },
        tags: ['business', 'DIY', 'SEO'],
      },
      {
        articleId: '3',
        title:
          '7 Ways To Keep Your Business Growing Without Burning The Midnight Oil',
        date: 'June 27, 2018',
        author: { userId: '3', userName: 'Soraya Roloff' },
        tags: ['business', 'DIY', 'SEO'],
      },
      {
        articleId: '4',
        articleImg: 'img-01.jpg',
        title: 'Clear And Unbiased Facts About Business (Without All the Hype)',
        date: 'June 27, 2018',
        author: { userId: '4', userName: 'Florentino Norsworthy' },
        tags: ['business', 'DIY', 'SEO'],
      },
      {
        articleId: '5',
        articleImg: 'img-01.jpg',
        title: 'Business And Love Have 4 Things In Common',
        date: 'June 27, 2018',
        author: { userId: '5', userName: ' Jasper Kinney' },
        tags: ['business', 'DIY', 'SEO'],
      },
      {
        articleId: '6',
        articleImg: 'img-01.jpg',
        title: 'BUSINESS 2.0 - The Next Step',
        date: 'June 27, 2018',
        author: { userId: '6', userName: 'Kaye Medley' },
        tags: ['business', 'DIY', 'SEO'],
      },
    ],
  };
  articleList.articles.map((article) => {
    if (article.articleClassicImg === undefined) {
      article.articleClassicImg = ArticlesClassicImgPath + DefaultImg;
    } else {
      article.articleClassicImg =
        ArticlesClassicImgPath + article.articleClassicImg;
    }
    if (article.articleGridImg === undefined) {
      article.articleGridImg = ArticlesGridImgPath + DefaultImg;
    } else {
      article.articleGridImg = ArticlesGridImgPath + article.articleGridImg;
    }
    if (article.articleListImg === undefined) {
      article.articleListImg = ArticlesListingImgPath + DefaultImg;
    } else {
      article.articleListImg = ArticlesListingImgPath + article.articleListImg;
    }
  });

  return articleList;
};
