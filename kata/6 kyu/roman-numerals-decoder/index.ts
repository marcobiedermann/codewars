const map = new Map<string, number>([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
]);

function solution(roman: string): number {
  return roman.split('').reduce((accumulator, _currentValue, index, arr) => {
    const current = map.get(arr[index]) || 0;
    const next = map.get(arr[index + 1]) || 0;

    if (current < next) {
      return accumulator - current;
    }

    return accumulator + current;
  }, 0);
}

const output = solution('XXI');

//       21
output;

export default solution;
