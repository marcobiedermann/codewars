function sum(string: string): number {
  let total = 0;

  for (let i = 0; i < string.length; i += 1) {
    const current = string[i];
    const charCode = current.charCodeAt(0);

    if (charCode < 65 || charCode > 90) {
      return 0;
    }

    total += current.charCodeAt(0);
  }

  return total;
}

function compare(s1: string | null, s2: string | null): boolean {
  const sum1 = s1 ? sum(s1.toUpperCase()) : 0;
  const sum2 = s2 ? sum(s2.toUpperCase()) : 0;

  return sum1 === sum2;
}

export default compare;
