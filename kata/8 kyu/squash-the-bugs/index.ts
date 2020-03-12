function findLongest(str: string): number {
  const spl = str.split(' ');
  let longest = 0;

  for (let i = 0; i < spl.length; i += 1) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }

  return longest;
}

export default findLongest;
