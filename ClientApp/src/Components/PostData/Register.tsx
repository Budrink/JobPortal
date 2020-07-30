import { wait } from '../GetData/wait';
import { http } from '../Data/Http';

export interface RegisterData {
  gender: string;
  firstName: string;
  lastName: string;
  email: string;
}
interface Response {
  errors: [];
  succeeded: boolean;
}
export const FirstRegister = async (data: RegisterData): Promise<boolean> => {
  let response = await http({
    path: `checkUserEmail?email=${data.email}`,
    method: 'POST',
  });
  // if (response.ok !== true) {
  //   // window.alert(response);
  // }
  const result = response.parsedBody === 'true';
  return result; //response.parsedBody;
};

interface RegisterData2 {
  countryId: string;
  password: string;
  typeOfUser: string;
  employees?: string;
  department?: string;
  departmentName?: string;
}
export const SecondRegister = async (data: RegisterData2): Promise<any> => {
  let requestBody;
  // console.log(data);
  if (data.typeOfUser === 'freelancer')
    requestBody = {
      gender: localStorage.getItem('gender'),
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
      countryId: data.countryId,
      password: data.password,
      typeOfUser: data.typeOfUser,
    };
  else {
    requestBody = {
      gender: localStorage.getItem('gender'),
      firstName: localStorage.getItem('firstName'),
      lastName: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
      countryId: data.countryId,
      password: data.password,
      typeOfUser: data.typeOfUser,
      employees: data.employees,
      department: data.department,
      departmentName: data.departmentName,
    };
  }
  // console.log(requestBody);
  let response = await http({
    path: `Register`,
    method: 'POST',
    body: requestBody,
  });

  return response.parsedBody;
};

export const ValidateCode = async (code: string): Promise<Response> => {
  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       countryList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);
  let response: Response = {
    succeeded: true,
    errors: [],
  };
  // .then Тут нужно проверить статус ответа  и обработать ошибку  стр.554
  return response;
};
