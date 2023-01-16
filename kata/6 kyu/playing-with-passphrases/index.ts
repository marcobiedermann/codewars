function rotate(s: string, n: number): string {
  const shift = 'A'.charCodeAt(0);
  return String.fromCharCode(((s.charCodeAt(0) - shift + n) % 26) + shift);
}

function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

function playPass(s: string, n: number): string {
  return s
    .replace(/[A-Z]/g, (character) => rotate(character, n))
    .replace(/\d/g, (digit) => (9 - parseInt(digit, 10)).toString())
    .replace(/[A-Z]/g, (character, index) => {
      if (isOdd(index)) {
        return character.toLowerCase();
      }

      return character;
    })
    .split('')
    .reverse()
    .join('');
}

export default playPass;
