type NestedArray = Array<number | NestedArray>;

function sumSquares(arr: NestedArray): number {
  if (arr.length === 0) {
    return 0;
  }
  let total = 0;
  let [first, ...rest] = arr;
  if (Array.isArray(first)) {
    total += sumSquares(first);
  } else if (Number.isInteger(first)) {
    total += first * first;
  }
  return (total += sumSquares(rest));
}

console.log(sumSquares([1, 2, 3])); // 14
console.log(sumSquares([[1, 2], 3])); // 14
console.log(sumSquares([10, [[10], 10], [10]])); // 400
