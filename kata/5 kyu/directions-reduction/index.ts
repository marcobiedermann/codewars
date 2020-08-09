type Direction = 'EAST' | 'NORTH' | 'SOUTH' | 'WEST';

const counterDirections = {
  EAST: 'WEST',
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  WEST: 'EAST',
};

function dirReduc(arr: Direction[]): Direction[] {
  return arr.reduce((accumulator: Direction[], currentValue) => {
    const lastDirection = accumulator[accumulator.length - 1];
    const counterDirection = counterDirections[currentValue];

    return lastDirection === counterDirection
      ? accumulator.slice(0, accumulator.length - 1)
      : [...accumulator, currentValue];
  }, []);
}

export default dirReduc;
