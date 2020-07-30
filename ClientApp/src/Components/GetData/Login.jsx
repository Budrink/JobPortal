import { wait } from './wait';
import { http, FetchData } from '../Data/Http';
import { userPhotoPath } from '../Data/GlobalValues';
// interface LoginResultProps {
//   isLogin: boolean;
//   userId?: string;
//   userType?: string;
//   errors?: string[];
// }

export const LoginFetch = async (userName, password, rememeberMe) => {
  console.log(1);
  let response = undefined;
  let loginResult;
  try {
    response = await http({
      path: `token?username=${userName}&password=${password}`,
      method: 'POST',
    });
    console.log(2);
    console.log(response);
    console.log(3);
    // if (response.status === 200)
    const accessToken = response.parsedBody.access_token;
    console.log(accessToken);
    localStorage.setItem('accessToken', accessToken);
    //Depends on rememberMe
    // localStorage.setItem('refreshToken', '2');
    //localStorage.setItem('loginTime', '2');
    localStorage.setItem('login', 'true');
    localStorage.setItem('userType', 'freelancer');
    localStorage.setItem('userName', 'Luanne ');
    localStorage.setItem('userId', '1');
    localStorage.setItem('company', 'amendoTech');
    localStorage.setItem('userPhoto', userPhotoPath + 'img-10.png');
    loginResult = { isLogin: true, userId: '1', userType: 'freelancer' };
  } catch (e) {
    console.log(e);
    loginResult = {
      isLogin: false,
      errors: ['Wrong  User name  or password'],
    };
  }

  // let isLogin = {
  //   isLogin: true,
  //   userId: '1',
  //   userType: 'freelancer',
  // };
  // let isLogin1 = {
  //   isLogin: false,
  //   errors: ['The user is not found'],
  // };
  return loginResult;
};

// interface EmailSentProps {
//   result: boolean;
//   messages?: string[];
// }
export const SendPassword = async (email) => {
  // export const getuserTypeList = (): userTypeData[] => {

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       userTypeList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // await wait(500);

  let sent = {
    result: true,
    messages: ['Password sent to your email'],
  };

  return sent;
};

// usign refresh token
export const RefreshLoginFetch = async (userName, password, rememeberMe) => {
  // export const getuserTypeList = (): userTypeData[] => {

  //Функция для получения списка с севрера
  //   await fetch('http://localhost:17525/api/countries')
  //     .then((res) => res.json())
  //     .then((body) => {
  //       userTypeList = body;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  await wait(500);

  // localStorage.setItem('accessToken', '1');
  // //Depends on rememberMe
  // localStorage.setItem('refreshToken', '2');
  // localStorage.setItem('loginTime', '2');
  // localStorage.setItem('login', 'true');
  // localStorage.setItem('userType', 'freelancer');
  // localStorage.setItem('userId', '1');
  // localStorage.setItem('company', 'amendoTech');

  let isLogin = {
    isLogin: true,
    userId: '1',
    userType: 'freelancer',
  };
  let isLogin1 = {
    isLogin: false,
    errors: ['The user is not found'],
  };
  return isLogin1;
};
