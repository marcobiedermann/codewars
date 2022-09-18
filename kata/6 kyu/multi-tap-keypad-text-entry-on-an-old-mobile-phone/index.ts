const keyPads = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'];

function presses(phrase: string): number {
  return phrase
    .toUpperCase()
    .split('')
    .reduce((accumulator, currentValue) => {
      const keys = keyPads.find((keyPad) => keyPad.includes(currentValue));
      const value = (keys?.indexOf(currentValue) || 0) + 1;

      return accumulator + value;
    }, 0);
}

export default presses;
