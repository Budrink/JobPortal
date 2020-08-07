import { http } from '../Data/Http';

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}
export const GetNumberOfEmployeers = async (): Promise<any[]> => {
  let numberOfEmployersList = [
    { iD: '1', text: 'Less Than 02' },
    { iD: '2', text: '02 - 09 Employees' },
    { iD: '3', text: '10 - 99 Employees' },
    { iD: '4', text: '100 - 499 Employees' },
    { iD: '5', text: '500 - 999 Employees' },
    { iD: '6', text: 'More Than 1000 Employees' },
  ];

  return numberOfEmployersList;
};
