import { Skill } from '../Data/Data';
import { wait } from './wait';

// export const GetSkillList = async (
//   amountOfCategories?: number,
// ): Promise<Skill[]> => {
//   // export const getCategoryList = (): CategoryData[] => {
//   let categoryList: Skill[] = [];
//   //Функция для получения списка с севрера
//   //   await fetch('http://localhost:17525/api/countries')
//   //     .then((res) => res.json())
//   //     .then((body) => {
//   //       categoryList = body;
//   //     })
//   //     .catch((err) => {
//   //       console.error(err);
//   //     });
//   await wait(500);

//   categoryList = [
//     {
//       iD: '1',
//       name: 'WordPress',
//       img: 'img-01.png',
//       sliderImg: 'img-01.png',
//     },
//     {
//       iD: '2',

//       name: 'Graphic Design',
//     },
//     {
//       iD: '3',

//       name: 'Software Architecture',
//     },
//     {
//       iD: '4',

//       name: 'Article Writing',
//     },
//     {
//       iD: '5',

//       name: 'WordPress 1 ',
//     },
//     {
//       iD: '6',

//       name: 'Website Design',
//     },
//     {
//       iD: '7',

//       name: 'Graphic Design 1',
//     },
//     {
//       iD: '8',

//       name: 'WordPress 2',
//     },
//     {
//       iD: '9',

//       name: 'UI Designer',
//     },
//     {
//       iD: '10',

//       name: 'UX Designer',
//     },
//     {
//       iD: '11',

//       name: 'Technical Writer',
//     },
//     {
//       iD: '12',

//       name: 'Content Writer',
//     },
//   ];

//   // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554

//   if (amountOfCategories === undefined) {
//     return categoryList;
//   } else {
//     return categoryList.filter((x) => Number(x.iD) <= amountOfCategories);
//   }
// };
