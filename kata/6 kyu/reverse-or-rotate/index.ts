function chunkString(string: string, length: number): string[] {
  const chunks = [];

  for (let i = 0; i < string.length; i += length) {
    chunks.push(string.slice(i, i + length));
  }

  return chunks;
}

function reverse(str: string): string {
  return str.split('').reverse().join('');
}

function rotateLeft(string: string, position = 1): string {
  return (string + string).slice(position, position + string.length);
}

function isEven(n: number): boolean {
  return n % 2 === 0;
}

function revrot(str: string, sz: number): string {
  if (str.length < sz || sz === 0) {
    return '';
  }

  const chunks = chunkString(str, sz);

  return chunks
    .filter((chunk) => chunk.length === sz)
    .map((chunk) => {
      const sum = [...chunk].reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue, 10) ** 3;
      }, 0);

      return isEven(sum) ? reverse(chunk) : rotateLeft(chunk);
    })
    .join('');
}

export default revrot;
