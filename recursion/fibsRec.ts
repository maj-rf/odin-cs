function fibsRec(x: number): number[] {
  if (x <= 0) return [];
  if (x === 1) return [0];
  return x > 2
    ? [...fibsRec(x - 1), fibsRec(x - 1)[x - 2] + fibsRec(x - 1)[x - 3]] // f(n)
    : [0, 1]; // f(1) and f(2)
}

console.log(fibsRec(0)); // []
console.log(fibsRec(1)); // [0]
console.log(fibsRec(2)); // [0, 1]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
