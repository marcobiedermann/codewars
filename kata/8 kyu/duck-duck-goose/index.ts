class Player {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

function duckDuckGoose(players: Player[], goose: number): string {
  const index = (goose - 1) % players.length;

  return players[index].name;
}

export default duckDuckGoose;
export { Player };
