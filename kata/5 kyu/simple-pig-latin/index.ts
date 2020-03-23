function pigIt(str: string): string {
  return str.replace(/\w+/g, (word) => `${word.slice(1)}${word[0]}ay`);
}

export default pigIt;
