import { ArticleData } from '../Data/Data';
import {
  userPhotoPath,
  ProjectDefaultImgPath,
  ArticleDefaultImgPath,
  ArticleImgPath,
} from '../Data/GlobalValues';

import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const GetArticle = async (articleId: string): Promise<any> => {
  let article: ArticleData;

  let response: HttpResponse<any>;
  console.log(articleId);
  try {
    response = await http({
      path: `Article/${articleId}`,
      method: 'Get',
    });

    if (response.parsedBody !== null) {
      article = response.parsedBody;
      if (article !== undefined) {
        if (article.author !== undefined) {
          if (article.author.userPhoto === undefined) {
            article.author.userPhoto = ProjectDefaultImgPath;
          } else {
            article.author.userPhoto = userPhotoPath + article.author.userPhoto;
          }
        }

        if (article.articleImg === undefined) {
          article.articleImg = ArticleDefaultImgPath;
        } else {
          article.articleImg = ArticleImgPath + article.articleImg;
        }
      }
      return article;
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

//   let article = {
//     articlebId: '1',
//     title: 'Who Else Wants To Be Successful With Business',
//     date: 'June 27, 2018',
//     articleImg: 'img-01.jpg',
//     author: {
//       userId: '1',
//       firstName: 'Louanne',
//       lastName: 'Marina',
//       userName: 'Louanne Marina',
//       since: 'Jun 27, 2016',
//       userPhoto: 'img-10.png',
//       description:
//         'Excepteur sint occaecat cupidatat non proident, sunt inlpa officia deserunt molliteu anim idestrume Sed utaiciatis unde omnis iste natus error sitame voluptatem accusntium dolorem aque laudaiumin totam rem aiam eaque ipsa quae abillointore veritatis et quasi architecto eibeatae vitae dicta suntise explicabo nemo enim ipsam voluptatem quia voluptas',
//     },
//     category: {
//       globalCategoryId: 'Ct111',
//       globalCategoryName: 'Lifestyle & DIY',
//     },
//     tags: ['DIY', 'Medical', 'Transport', 'Business'],

//     text:
//       '<p>    Excepteur sint occaecat cupidatat non proident,    sunt in culpa qui officia deserunt mollit anim id' +
//       'est laborum. Sed utem perspiciatis unde omnis iste    natus error sit voluptatem accusantium doloremque     laudantium, totam rem aiam eaqueiu ipsa quae ab' +
//       ' illo inventore veritatis et quasi architecto    beatae vitae dictaed quia consequuntur magni    dolores eos quist ratione voluptatem sequei' +
//       ' nesciunt. Neque porro quisquam est qui dolorem     ipsum quia dolor sitem amet consectetur adipisci     velit sed quianon numquam eius modi tempora' +
//       ' incidunt ut labore et dolore magnam aliquam     quaerat tatem dolor sit amet, consectetur    adipisicing elit, sed do eiusmod tempor.' +
//       '</p>  <blockquote className="wt-blockquotevone">    <span>      <i className="lnr lnr-bookmark"></i>    </span>    <q>      ” Adipisicing elit, sed do eiusmod tempor ' +
//       'incididunt ut labore et dolore magna aliqua.”    </q>  </blockquote>  <p>    Incididunt ut labore et dolore magna aliqua. Ut    enim ad minim veniam, quis nostrud exercitation    ullamco laboris nisi ut aliquip ex ea commodo' +
//       'consequat. Duis aute irure dolor in reprehenderit     in voluptate velit esse cillum dolore eu fugiate    nulla pariatur. Excepteur sint occaecat cupidatat    non proident.' +
//       '</p>  <figure className="wt-blogdetailimgvtwo wt-articlessingleone">    <img      src="/images/article/articlessingle/img-02.jpg"      className="test"      alt="description"    />    <figcaption>' +
//       '<span>        As per current survey perspiciatis unde omnis        iste natus error sit voluptatem.      </span>   </figcaption>  </figure>  <p>    Excepteur sint occaecat cupidatat non proident,' +
//       'sunt in culpa qui officia deserunt mollit anim id    est laborum. Sed ut perspiciatis unde omnis iste    natus error sit voluptatem accusantium doloremque    laudantium, totam rem aiam eaque ipsa quae ab illo    inventore veritatis et quasi architecto beatae' +
//       'vitae dicta sunt explicabo. Nemo enim ipsam    voluptatem quia voluptas sit aspernatur aut odit    aut fugit.  </p>  <ul>    <li>      <span>Nemo enim ipsam voluptatem quia</span>    </li>' +
//       '<li>      <span>        Adipisci velit, sed quia non numquam eius modi        tempora      </span>    </li>    <li>      <span>        Eaque ipsa quae ab illo inventore veritatis et    quasi architecto' +
//       '</span>    </li>    <li>      <span>        qui dolorem ipsum quia dolor sit amet      </span>    </li>  </ul>  <p>    Sed quia consequuntur magni dolores eos qui    ratione voluptatem sequi nesciunt. Neque porro    quisquam est, qui dolorem ipsum quia dolor sit' +
//       'amet, consectetur, adipisci velit, sed quia non    numquam eius modi tempora incidunt ut labore et    dolore magnam aliquam quaerat voluptatem.  </p>  <figure className="wt-blogdetailimgvtwo wt-alignleft">' +
//       '<img      src="/images/article/articlessingle/img-03.jpg"      alt="description"    />    <figcaption>      <span>        As per current survey perspiciatis unde     </span>    </figcaption>' +
//       '</figure>  <p>    Excepteur sint occaecat cupidatat non proident,    sunt in culpa qui officiaerunt mollit anim id est    laborum. Sed ut perspiciatis unde omnis iste natus    error sit voluptatem accusantium doloremque    laudantium, totam rem aiam eaqueisa quae ab illo' +
//       '  inventore veritatis et quasi architecto beatae    vitae dicta suntcabo Nemo enim ipsam voluptatem    quia voluptas.  </p>  <ul className="wt-blogliststyle">    <li>      <span>Nemo enim ipsam voluptatem quia</span>' +
//       '</li>    <li>      <span>        Adipisci velit, sed quia non numquam eius modi        tempora      </span>    </li>    <li>      <span>        Eaque ipsa quae ab illo inventore veritatis et        quasi architecto      </span>' +
//       '</li>    <li>      <span>        qui dolorem ipsum quia dolor sit amet      </span>    </li>  </ul>  <p>    Sed quia consequuntur magni dolores eos qui    ratione voluptatem sequi nesciunt. Neque porro    quam est, qui dolorem ipsum quia dolor sit amet,    consectetur, adipisci velit, sed quia non numquam' +
//       '    eiuste modi tempora incidunt ut labore et dolore  magnam aliquam quaerat voluptatem.  </p>  <p className="wt-clear">    Excepteur sint occaecat cupidatat non proident,    sunt in culpa qui officia deserunt mollit anim id    est laborum. Sed ut perspiciatis unde omnis iste' +
//       'natus error sit voluptatem accusantium doloremque    laudantium, totam rem aiam eaque ipsa quae ab illo    inventore veritatis et quasi architecto beatae    vitae dicta sunt explicabo. Nemo enim ipsam    voluptatem quia voluptas sit aspernatur aut odit    aut fugit.  </p>  <figure className="wt-blogdetailimgvtwo wt-alignright">  <img' +
//       ' src="/images/article/articlessingle/img-04.jpg"      alt="description"    />    <figcaption>      <span>        As per current survey perspiciatis unde      </span>' +
//       '</figcaption>  </figure>  <p>    Excepteur sint occaecat cupidatat non proident,    sunt in culpa qui officiaerunt mollit anim id est    laborum. Sed ut perspiciatis unde omnis iste natus    error sit voluptatem accusantium doloremque' +
//       'laudantium, totam rem aiam eaqueisa quae ab illo    inventore veritatis et quasi architecto beatae    vitae dicta suntcabo Nemo enim ipsam voluptatem    quia voluptas.  </p>  <ul className="wt-blogliststyle">' +
//       '<li>      <span>Nemo enim ipsam voluptatem quia</span>    </li>    <li>      <span>        Adipisci velit, sed quia non numquam eius modi        tempora      </span>    </li>' +
//       '<li>      <span>        Eaque ipsa quae ab illo inventore veritatis et        quasi architecto      </span>    </li>    <li>      <span>        qui dolorem ipsum quia dolor sit amet     </span>' +
//       '</li>  </ul>  <p>    Sed quia consequuntur magni dolores eos qui    ratione voluptatem sequi nesciunt. Neque porro    quam est, qui dolorem ipsum quia dolor sit amet,' +
//       'consectetur, adipisci velit, sed quia non numquam    eiuste modi tempora incidunt ut labore et dolore    magnam aliquam quaerat voluptatem.  </p>  <p className="wt-clear">    Excepteur sint occaecat cupidatat non proident,' +
//       'sunt in culpa qui officia deserunt mollit anim id    est laborum. Sed ut perspiciatis unde omnis iste    natus error sit voluptatem accusantium doloremque    laudantium, totam rem aiam eaque ipsa quae ab illo  inventore veritatis et quasi architecto beatae' +
//       'vitae dicta sunt explicabo. Nemo enim ipsam    voluptatem quia voluptas sit aspernatur aut odit    aut fugit.  </p>  <div className="wt-video">    <figure>' +
//       '<a        data-rel="prettyPhoto[video]"        href="https://www.youtube.com/watch?v=J37W6DjqT3Q"      >        <img          src="images/article/articlessingle/video-img.jpg"          alt="description"        />      </a>' +
//       '</figure>  </div>  <p>    Excepteur sint occaecat cupidatat non proident,    sunt in culpa qui officia deserunt mollit anim id    est laborum. Sed ut perspiciatis unde omnis iste' +
//       'natus error sit voluptatem accusantium doloremque    laudantium, totam rem aiam eaque ipsa quae ab illo    inventore veritatis et quasi architecto beatae    vitae dicta sunt explicabo. Nemo enim ipsam    voluptatem quia voluptas sit aspernatur aut odit  aut fugit.' +
//       '</p>  <ul>    <li>      <span>Nemo enim ipsam voluptatem quia</span>    </li>    <li>      <span>        Adipisci velit, sed quia non numquam eius modi       tempora' +
//       '</span>    </li>    <li>      <span>        Eaque ipsa quae ab illo inventore veritatis et        quasi architecto      </span>    </li>    <li>      <span>        qui dolorem ipsum quia dolor sit amet      </span>' +
//       '</li>  </ul>  <p>    Sed quia consequuntur magni dolores eos qui    ratione voluptatem sequi nesciunt. Neque porro    quisquam est, qui dolorem ipsum quia dolor sit    amet, consectetur, adipisci velit, sed quia non    numquam eius modi tempora incidunt ut labore et' +
//       'dolore magnam aliquam quaerat voluptatem.  </p>',
//   };

//   if (article.author.userPhoto === undefined) {
//     article.author.userPhoto = ProjectDefaultImgPath;
//   } else {
//     article.author.userPhoto = userPhotoPath + article.author.userPhoto;
//   }

//   if (article.articleImg === undefined) {
//     article.articleImg = ArticleDefaultImgPath;
//   } else {
//     article.articleImg = ArticleImgPath + article.articleImg;
//   }

//   return article;
// };
