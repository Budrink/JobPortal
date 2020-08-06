import { wait } from '../GetData/wait';
import { http, FetchData } from '../Data/Http';
import { userPhotoPath, userDefaultIconPath } from '../Data/GlobalValues';
// interface LoginResultProps {
//   isLogin: boolean;
//   userId?: string;
//   userType?: string;
//   errors?: string[];
// }

export const LoginFetch = async (userName, password, rememeberMe) => {
  //console.log(1);
  let response = undefined;
  let loginResult;
  const requestBody = {
    userName: userName,
    password: password,
  };

  try {
    response = await http({
      path: `User/token`,
      method: 'POST',
      body: requestBody,
    });

    console.log(response.parsedBody);
    localStorage.setItem('accessToken', response.parsedBody.access_token);
    //Depends on rememberMe
    // localStorage.setItem('refreshToken', '2');
    //localStorage.setItem('loginTime', '2');
    localStorage.setItem('login', 'true');
    localStorage.setItem('userType', response.parsedBody.roles);
    localStorage.setItem(
      'userName',
      response.parsedBody.firstName + ' ' + response.parsedBody.lastName,
    );
    localStorage.setItem('userId', response.parsedBody.id);
    localStorage.setItem('company', response.parsedBody.companyName);
    console.log(response.parsedBody.photo);
    if (response.parsedBody.photo !== null)
      localStorage.setItem(
        'userPhoto',
        userPhotoPath + response.parsedBody.photo,
      );
    else {
      localStorage.setItem('userPhoto', userDefaultIconPath);
    }

    loginResult = {
      isLogin: true,
      userId: response.parsedBody.access_token,
      userType: response.parsedBody.roles,
    };
  } catch (e) {
    console.log(e);
    loginResult = {
      isLogin: false,
      errors: ['Invalid password or username'],
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
  ///await wait(500);
  // localStorage.setItem('accessToken', '1');
  // //Depends on rememberMe
  // localStorage.setItem('refreshToken', '2');
  // localStorage.setItem('loginTime', '2');
  // localStorage.setItem('login', 'true');
  // localStorage.setItem('userType', 'freelancer');
  // localStorage.setItem('userId', '1');
  // localStorage.setItem('company', 'amendoTech');
  // let isLogin = {
  //   isLogin: true,
  //   userId: '1',
  //   userType: 'freelancer',
  // };
  // let isLogin1 = {
  //   isLogin: false,
  //   errors: ['The user is not found'],
  // };
  // return isLogin1;
};
