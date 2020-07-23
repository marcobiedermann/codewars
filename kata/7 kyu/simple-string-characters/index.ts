function solve(s: string): number[] {
  return [/[A-Z]/, /[a-z]/, /[\d]/, /[\W]/].map((regex) => s.split(regex).length - 1);
}

export default solve;
