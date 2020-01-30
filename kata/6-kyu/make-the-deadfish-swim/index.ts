function parse(data: string): number[] {
  let value = 0;

  return data.split('').reduce((accumulator: number[], currentValue: string): number[] => {
    if (currentValue === 'i') {
      value += 1;
    }

    if (currentValue === 'd') {
      value -= 1;
    }

    if (currentValue === 's') {
      value *= value;
    }

    if (currentValue === 'o') {
      return [...accumulator, value];
    }

    return accumulator;
  }, []);
}

export default parse;
