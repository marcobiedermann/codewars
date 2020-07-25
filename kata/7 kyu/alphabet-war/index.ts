const leftMap = new Map<string, number>([
  ['w', 4],
  ['p', 3],
  ['b', 2],
  ['s', 1],
]);

const rightMap = new Map<string, number>([
  ['m', 4],
  ['q', 3],
  ['d', 2],
  ['z', 1],
]);

function alphabetWar(fight: string): string {
  let left = 0;
  let right = 0;

  for (let i = 0; i < fight.length; i += 1) {
    const current = fight[i];

    left += leftMap.get(current) || 0;
    right += rightMap.get(current) || 0;
  }

  if (left < right) {
    return 'Right side wins!';
  }

  if (right < left) {
    return 'Left side wins!';
  }

  return "Let's fight again!";
}

export default alphabetWar;
