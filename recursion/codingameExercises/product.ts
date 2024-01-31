/**
 *
 * @param arr collection of numbers
 * @returns product of all numbers
 */

function product(arr: Array<number>): number {
  const [first, ...newArr] = arr;
  return arr.length === 1 ? arr[0] : first * product(newArr);
}

console.log(product([1, 2, 3]));
console.log(product([1, 2, 3, 10]));
