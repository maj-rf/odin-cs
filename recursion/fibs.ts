function fibs(x: number) {
  if (x <= 0) return [];
  if (x === 1) return [0];
  const arr = [0, 1];
  for (let i = 2; i < x; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

console.log(fibs(1)); // 0
console.log(fibs(2)); // [0, 1]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
