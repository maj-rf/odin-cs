/**
 *
 * @param arr collection of numbers
 * @param cb checker function
 * @returns a boolean whether all array values passes the checker
 *
 * this is basically the Array.every() method
 */

function all<T>(arr: Array<T>, cb: Function) {
  if (arr.length === 1) {
    return cb(arr[0]);
  }
  let [first, ...newArr] = arr;
  return all(newArr, cb);
}

console.log(
  all([1, 2, 9, 8, 9, 11], function (num: number) {
    return num < 10;
  })
);
