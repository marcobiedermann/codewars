function randomInteger(max: number, min = 0): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Ghost {
  colors: string[];

  constructor() {
    this.colors = ['white', 'yellow', 'purple', 'red'];
  }

  get color(): string {
    return this.colors[randomInteger(this.colors.length) + 1];
  }
}

export default Ghost;
