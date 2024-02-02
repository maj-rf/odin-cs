function mergeSort(unsorted: number[]): number[] {
  console.log({ unsorted });
  if (unsorted.length <= 1) {
    return unsorted;
  }
  const mid = Math.floor(unsorted.length / 2); //estimate
  const left = unsorted.slice(0, mid);
  const right = unsorted.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * first loop: compares every element of left and right until
 * either left or right has no remaining values.
 * second & third: push the remaining values of either left / right
 * to sorted for future use.
 */

function merge(left: number[], right: number[]): number[] {
  const sorted = [];

  while (left.length && right.length) {
    left[0] <= right[0]
      ? sorted.push(left.shift())
      : sorted.push(right.shift());
  }

  while (left.length && !right.length) {
    sorted.push(left.shift());
  }

  while (right.length && !left.length) {
    sorted.push(right.shift());
  }
  console.log({ sorted });
  return sorted as number[];
}

//console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
//console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 7]));
