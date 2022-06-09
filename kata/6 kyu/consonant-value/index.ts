function solve(s: string): number {
  let max = 0;
  let currentMax = 0;

  for (let i = 0; i < s.length; i += 1) {
    const current = s[i];
    const charCode = current.charCodeAt(0) - 96;

    if (current.match(/[aeiou]/g)) {
      currentMax = 0;
    } else {
      currentMax += charCode;
    }

    if (currentMax > max) {
      max = currentMax;
    }
  }

  return max;
}

export default solve;
