/**
 * 1. Split arr to half.
 * 2. Recursively halve these halves until we get N arrays of [x,y];
 * 3. Call merge() to compare these halves
 */

function mergeSort(unsorted: number[]): number[] {
  if (unsorted.length <= 1) {
    return unsorted;
  }
  const mid = Math.floor(unsorted.length / 2); //estimate
  const left = unsorted.slice(0, mid);
  const right = unsorted.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  // { left: [ 8, 5, 0, 1 ], right: [ 3, 2, 1, 13 ] }
  const result = [];
  // while (left.length && right.length) {
  //   left[0] <= right[0]
  //     ? result.push(left.shift())
  //     : result.push(right.shift());
  // }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) result.push(right.shift());

  return result as number[];
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 7]));
