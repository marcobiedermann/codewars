class Node {
  public data: number;
  public next: Node | null;

  constructor(data: number, next: Node | null = null) {
    this.data = data;
    this.next = next;
  }
}

function stringify(list: Node | null): string {
  if (!list) {
    return 'null';
  }

  const { data, next } = list;

  return `${data} -> ${stringify(next)}`;
}

export default stringify;
export { Node };
