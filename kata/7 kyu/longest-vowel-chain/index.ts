function isVowel(character: string): boolean {
  return /[aeiou]/.test(character);
}

function solve(s: string): number {
  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    const current = s[i];

    if (isVowel(current)) {
      count += 1;
      maxCount = Math.max(count, maxCount);
    } else {
      count = 0;
    }
  }

  return maxCount;
}

export default solve;
