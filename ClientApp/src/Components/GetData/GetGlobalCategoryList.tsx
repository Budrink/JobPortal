import { GlobalCategoryData } from '../Data/Data';
import { wait } from './wait';
import {
  globalCategoryPath,
  globalCategoryDefalutIconPath,
} from '../Data/GlobalValues';
export const GetGlobalCategoryList = async (
  amountOfCategories?: number,
): Promise<GlobalCategoryData[]> => {
  // export const getCategoryList = (): CategoryData[] => {
  let categoryList: GlobalCategoryData[] = [];

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

  categoryList = [
    {
      globalCategoryId: 'GC1',
      globalCategoryName: 'Mobiles',
      globalCategoryImg: 'img-01.png',
      description:
        'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
    },

    {
      globalCategoryId: 'GC2',
      globalCategoryName: 'Digital Marketing',
      globalCategoryImg: 'img-08.png',
      description:
        'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
    },
    {
      globalCategoryId: 'GC3',
      globalCategoryName: 'Writing & Translation',
      globalCategoryImg: 'img-01.png',
      description:
        'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
    },
    {
      globalCategoryId: 'GC4',
      globalCategoryName: ' Video & Animation',
      globalCategoryImg: 'img-01.png',
      description:
        'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
    },
    {
      globalCategoryId: 'GC5',
      globalCategoryName: 'Programming & Tech',
      globalCategoryImg: 'img-01.png',
      description:
        'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
    },
    {
      globalCategoryId: 'GC6',
      globalCategoryName: 'Music & Audio',
      globalCategoryImg: 'img-01.png',
      description:
        'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
    },
    {
      globalCategoryId: 'GC7',
      globalCategoryName: 'Business',
      globalCategoryImg: 'img-01.png',
      description:
        'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
    },
    {
      globalCategoryId: 'GC8',
      globalCategoryName: 'Lifestyle',
      globalCategoryImg: 'img-01.png',
      description:
        'Consectetur adipisicing elitaed eiusmod tempor incididuatna labore et dolore magna.',
    },
  ];

  categoryList.map(
    (cat) =>
      (cat.globalCategoryImg = cat.globalCategoryImg
        ? globalCategoryPath + cat.globalCategoryImg
        : globalCategoryDefalutIconPath),
  );
  if (amountOfCategories === undefined) {
    return categoryList;
  } else {
    return categoryList.filter(
      (x) => x.globalCategoryId <= 'GC' + amountOfCategories,
    );
  }
  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
};
