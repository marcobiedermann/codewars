function subtract(a: number, b: number) {
  return a - b;
}

interface Results {
  [key: string]: number;
}

function myLanguages(results: Results): string[] {
  return Object.keys(results)
    .filter((key) => results[key] >= 60)
    .sort((a, b) => subtract(results[b], results[a]));
}

export default myLanguages;
