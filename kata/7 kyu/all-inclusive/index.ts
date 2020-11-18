function containAllRots(strng: string, arr: string[]): boolean {
  const { length } = strng;
  const set = new Set<string>(arr);

  for (let i = 0; i < length; i += 1) {
    const substring = (strng + strng).slice(i, i + length);

    if (!set.has(substring)) {
      return false;
    }
  }

  return true;
}

export default containAllRots;
