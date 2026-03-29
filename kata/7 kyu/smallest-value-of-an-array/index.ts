function min(arr: number[], toReturn: 'index' | 'value'): number {
  let index = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];

    if (current < arr[index]) {
      index = i;
    }
  }

  if (toReturn === 'index') {
    return index;
  }

  return arr[index];
}

export default min;
