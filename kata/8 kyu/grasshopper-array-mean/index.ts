function sum(nums: number[]): number {
  return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function findAverage(nums: number[]): number {
  return sum(nums) / nums.length;
}

export default findAverage;
