import stringify, { Node } from '.';

describe('stringify', () => {
  it('should convert a linked list to a string', () => {
    expect.assertions(3);

    expect(stringify(new Node(1, new Node(2, new Node(3))))).toStrictEqual('1 -> 2 -> 3 -> null');
    expect(
      stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))),
    ).toStrictEqual('0 -> 1 -> 4 -> 9 -> 16 -> null');
    expect(stringify(null)).toStrictEqual('null');
  });
});
