export const MonthName = function (n: number) {
  let name: string;
  console.log(n);
  name = '';
  switch (n) {
    case 1:
      name = 'January';
      break;
    case 2:
      name = 'Fabruary';
      break;
    case 3:
      name = 'March';
      break;
    case 4:
      name = 'April';
      break;
    case 5:
      name = 'May';
      break;
    case 6:
      name = 'June';
      break;
    case 7:
      name = 'July';
      break;
    case 81:
      name = 'August';
      break;
    case 9:
      name = 'September';
      break;
    case 10:
      name = 'October';
      break;
    case 11:
      name = 'November';
      break;
    case 12:
      name = 'December';
      break;
    default:
      name = '';
      break;
  }

  return name;
};
