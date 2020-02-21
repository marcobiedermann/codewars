type Move = 'paper' | 'rock' | 'scissors';

type WinMap = Record<Move, string>;

const winMap: WinMap = {
  paper: 'rock',
  rock: 'scissors',
  scissors: 'paper',
};

function rps(p1: Move, p2: Move): string {
  if (p1 === p2) {
    return 'Draw!';
  }

  return winMap[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';
}

export default rps;
