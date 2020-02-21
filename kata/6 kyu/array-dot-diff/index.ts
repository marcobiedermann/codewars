/* eslint-disable camelcase */

function array_diff(a: number[], b: number[]): number[] {
  return a.filter(val => !b.includes(val));
}

export default array_diff;
