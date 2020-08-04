function isEven(n: number): boolean {
  return n % 2 === 0;
}

function toWeirdCase(string: string): string {
  let result = '';
  let index = 0;

  for (let i = 0; i < string.length; i += 1) {
    const current = string[i];

    result += isEven(index) ? current.toUpperCase() : current.toLocaleLowerCase();

    if (current === ' ') {
      index = 0;
    } else {
      index += 1;
    }
  }

  return result;
}

export default toWeirdCase;
