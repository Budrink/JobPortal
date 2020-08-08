import { webAPIUrl } from './AppSettings';

export interface HttpRequest<REQB> {
  path: string;
  method?: string;
  body?: REQB;
  accessToken?: string;
  headers?: any;
}
export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export const http = <REQB, RESB>(
  config: HttpRequest<REQB>,
): Promise<HttpResponse<RESB>> => {
  if (config.body !== undefined) {
    // console.log(JSON.stringify(config.body));
  }
  let defaultHeader: Headers = new Headers();

  defaultHeader.append('Content-Type', 'application/json');
  if (localStorage.getItem('login') === 'true') {
    defaultHeader.append(
      'Authorization',
      `Bearer ${localStorage.getItem('accessToken')}`,
    );
  }
  return new Promise((resolve, reject) => {
    const request = new Request(`${webAPIUrl}${config.path}`, {
      method: config.method || 'get',
      headers: config.headers || defaultHeader,
      body: config.body ? JSON.stringify(config.body) : undefined,
    });
    //console.log(`${webAPIUrl}${config.path}`);
    //  console.log(request.headers.get('Authorization'));
    let response: HttpResponse<RESB>;
    fetch(request)
      .then((res) => {
        console.log(res);

        if (res.status !== 200) {
          alert(res.status);
        }
        response = res;

        try {
          return res.json();
        } catch (e) {
          console.log(e);
        }
      })
      .then((body) => {
        if (response.ok) {
          response.parsedBody = body;
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((err) => {
        console.error(err);
        reject(err);
        return response.status;
      });
  });
};
export const FetchData = <REQB, RESB>(
  config: HttpRequest<REQB>,
): Promise<any> => {
  console.log(JSON.stringify(config.body));
  return new Promise(async (resolve, reject) => {
    const request = new Request(`${webAPIUrl}${config.path}`, {
      method: config.method || 'get',
      headers: { 'Content-Type': 'application/json' },
      body: config.body ? JSON.stringify(config.body) : undefined,
    });

    let response: any;

    await fetch(request).then((res) => {
      console.log(res);
      response = res;
      return res;
    });
    console.log(11);
    console.log(response);
    return 1;
    console.log(12);
  });
};
