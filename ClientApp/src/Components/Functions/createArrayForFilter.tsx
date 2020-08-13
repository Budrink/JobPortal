// Add element to arr if it is not in arr and remove it in opposite case/
export const createArrayForFilter = function (item: string, arr: string[]) {
  const index = arr.indexOf(item);
  if (arr.length === 0) {
    arr = [item];
  } else {
    if (index !== -1) {
      // Такой элемент есть - е
      arr.splice(index, 1);
    } else {
      arr.push(item);
    }
  }
  console.log(arr);
  return arr;
};
