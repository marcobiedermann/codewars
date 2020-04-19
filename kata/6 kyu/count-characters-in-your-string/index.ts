interface CharacterMap {
  [key: string]: number;
}

function count(string: string): CharacterMap {
  const { length } = string;
  const characterMap: CharacterMap = {};

  for (let i = 0; i < length; i += 1) {
    const current = string[i];

    characterMap[current] = (characterMap[current] || 0) + 1;
  }

  return characterMap;
}

export default count;
