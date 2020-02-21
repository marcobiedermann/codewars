/* eslint-disable camelcase */

function find_average(array: number[]): number {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length;
}

export default find_average;
