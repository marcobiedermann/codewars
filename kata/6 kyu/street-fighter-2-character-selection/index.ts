type Move = 'down' | 'left' | 'right' | 'up';

function streetFighterSelection(fighters: string[][], position: [number, number], moves: Move[]) {
  const hoveredFighters: string[] = [];
  const latestPosition = position;

  moves.forEach((move) => {
    if (move === 'up') {
      latestPosition[0] = 0;
    }

    if (move === 'left') {
      latestPosition[1] = latestPosition[1] === 0 ? 5 : latestPosition[1] - 1;
    }

    if (move === 'right') {
      latestPosition[1] = latestPosition[1] === 5 ? 0 : latestPosition[1] + 1;
    }

    if (move === 'down') {
      latestPosition[0] = 1;
    }

    const hoveredFighter = fighters[latestPosition[0]][latestPosition[1]];

    hoveredFighters.push(hoveredFighter);
  });

  return hoveredFighters;
}

export type { Move };
export default streetFighterSelection;
