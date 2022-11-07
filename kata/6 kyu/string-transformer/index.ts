function isLowerCase(character: string): boolean {
  return character === character.toLocaleLowerCase();
}

function stringTransformer(str: string): string {
  return str
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((character) => {
          if (isLowerCase(character)) {
            return character.toUpperCase();
          }

          return character.toLowerCase();
        })
        .join(''),
    )
    .reverse()
    .join(' ');
}

export default stringTransformer;
