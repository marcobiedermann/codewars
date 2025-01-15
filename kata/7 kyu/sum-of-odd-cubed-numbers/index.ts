import type { Any } from '../../@types/types.ts';

function cubeOdd(arr: Any[]): number | undefined {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];
    const cubed = current ** 3;

    if (Number.isNaN(cubed)) {
      return undefined;
    }

    if (current % 2 !== 0) {
      sum += cubed;
    }
  }

  return sum;
}

export default cubeOdd;
