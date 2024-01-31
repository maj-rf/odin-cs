function replicate(x: number, y: number): Array<number> {
  return x <= 0 ? [] : [y].concat(replicate(x - 1, y));
}

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
