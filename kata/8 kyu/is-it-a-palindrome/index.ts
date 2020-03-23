function isPalindrome(x: string): boolean {
  const { length } = x;
  const normalized = x.toLowerCase();

  for (let i = 0; i < length / 2; i += 1) {
    if (normalized[i] !== normalized[length - i - 1]) {
      return false;
    }
  }

  return true;
}

export default isPalindrome;
