function horMirror(strng: string[]): string[] {
  return strng.reverse();
}

function vertMirror(strng: string[]): string[] {
  return strng.map((line) => line.split('').reverse().join(''));
}

function oper(fct: (strng: string[]) => string[], s: string): string {
  return fct(s.split('\n')).join('\n');
}

export default oper;

export { horMirror, vertMirror };
