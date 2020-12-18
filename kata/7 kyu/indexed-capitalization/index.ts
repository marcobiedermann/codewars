function capitalize(s: string, arr: number[]): string {
  const characters = [...s];

  arr.forEach((index) => {
    if (characters[index]) {
      characters[index] = characters[index].toUpperCase();
    }
  });

  return characters.join('');
}

export default capitalize;
