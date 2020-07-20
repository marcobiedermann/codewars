function isLowerCase(str: string): boolean {
  return str === str.toLowerCase();
}

function solve(s: string): string {
  let lower = 0;
  let upper = 0;

  for (let i = 0; i < s.length; i += 1) {
    const current = s[i];

    if (isLowerCase(current)) {
      lower += 1;
    } else {
      upper += 1;
    }
  }

  return lower >= upper ? s.toLowerCase() : s.toUpperCase();
}

export default solve;
