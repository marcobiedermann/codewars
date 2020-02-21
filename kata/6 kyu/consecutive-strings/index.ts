function longestConsec(strarr: string[], k: number): string {
  const n = strarr.length;

  if (n === 0 || k > n || k <= 0) {
    return '';
  }

  return strarr.reduce((accumulator, _currentValue, index) => {
    const consecutive = strarr.slice(index, index + k).join('');

    return accumulator.length < consecutive.length ? consecutive : accumulator;
  }, '');
}

export default longestConsec;
