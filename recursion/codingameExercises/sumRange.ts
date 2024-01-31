/**
 *
 * @param x max number in range
 * @returns sum of all numbers in range
 */

function sumrange(x: number): number {
  return x === 1 ? x : x + sumrange(x - 1);
}
