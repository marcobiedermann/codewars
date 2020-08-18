const fruits = [
  'kiwi',
  'pear',
  'kiwi',
  'banana',
  'melon',
  'banana',
  'melon',
  'pineapple',
  'apple',
  'pineapple',
  'cucumber',
  'pineapple',
  'cucumber',
  'orange',
  'grape',
  'orange',
  'grape',
  'apple',
  'grape',
  'cherry',
  'pear',
  'cherry',
  'pear',
  'kiwi',
  'banana',
  'kiwi',
  'apple',
  'melon',
  'banana',
  'melon',
  'pineapple',
  'melon',
  'pineapple',
  'cucumber',
  'orange',
  'apple',
  'orange',
  'grape',
  'orange',
  'grape',
  'cherry',
  'pear',
  'cherry',
  'pear',
  'apple',
  'pear',
  'kiwi',
  'banana',
  'kiwi',
  'banana',
  'melon',
  'pineapple',
  'melon',
  'apple',
  'cucumber',
  'pineapple',
  'cucumber',
  'orange',
  'cucumber',
  'orange',
  'grape',
  'cherry',
  'apple',
  'cherry',
  'pear',
  'cherry',
  'pear',
  'kiwi',
  'pear',
  'kiwi',
  'banana',
  'apple',
  'banana',
  'melon',
  'pineapple',
  'melon',
  'pineapple',
  'cucumber',
  'pineapple',
  'cucumber',
  'apple',
  'grape',
  'orange',
  'grape',
  'cherry',
  'grape',
  'cherry',
  'pear',
  'cherry',
  'apple',
  'kiwi',
  'banana',
  'kiwi',
  'banana',
  'melon',
  'banana',
  'melon',
  'pineapple',
  'apple',
  'pineapple',
];

function intToDigits(int = 0): number[] {
  if (int < 10) {
    return [int];
  }

  return [...intToDigits(Math.floor(int / 10)), int % 10];
}

function add(a: number, b: number): number {
  return a + b;
}

function sum(arr: number[]): number {
  return arr.reduce(add, 0);
}

function SubtractSum(n: number): number | string {
  const digits = intToDigits(n);
  const total = n - sum(digits);

  if (total <= 100) {
    return fruits[total - 1];
  }

  return SubtractSum(total);
}

export default SubtractSum;
