type Direction = 'L' | 'R';

function flip(d: Direction, a: number[]): number[] {
  return a.sort((x, y) => (d === 'L' ? y - x : x - y));
}

export default flip;
