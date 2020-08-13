import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const GetNumberOfEmployees = async (): Promise<any[]> => {
  let numberOfEmployeesList: any[] = [];
  let response: HttpResponse<any>;
  try {
    response = await http({
      path: `NumberOfEmployees`,
      method: 'Get',
    });

    // console.log(response.parsedBody);

    if (response.parsedBody !== null) {
      numberOfEmployeesList = response.parsedBody;
    }
  } catch (e) {
    console.log(e);
  }

  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return numberOfEmployeesList;
};

//   let numberOfEmployersList = [
//     { iD: '1', text: 'Less Than 02' },
//     { iD: '2', text: '02 - 09 Employees' },
//     { iD: '3', text: '10 - 99 Employees' },
//     { iD: '4', text: '100 - 499 Employees' },
//     { iD: '5', text: '500 - 999 Employees' },
//     { iD: '6', text: 'More Than 1000 Employees' },
//   ];

//   return numberOfEmployersList;
// };
