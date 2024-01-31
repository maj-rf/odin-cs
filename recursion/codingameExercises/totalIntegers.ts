type NestedArray = Array<string | number | NestedArray>;

/**
 *
 * @param arr Nested array with numbers and string of unknown depth
 * @returns the number of integers inside the arr
 */
function totalIntegers(arr: NestedArray): number {
  /**
   * base case: if arr has zero elements, return 0
   * recursion:
   * 1. check if the first element is an array,
   * 2a. if an array, call totalIntegers and add it to current total
   * 2b. if not an array but the element is a number, add 1 to total.
   * 3. return the total and add totalIntegers to do the rest of the array.
   */
  if (arr.length === 0) {
    return 0;
  }
  let total = 0;
  let [first, ...rest] = arr;

  if (Array.isArray(first)) {
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(rest);
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]])); // 7
console.log(totalIntegers(['foo'])); // 0
console.log(totalIntegers([])); // 0
