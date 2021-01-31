import tickets from '.';

describe('tickets', () => {
  it('should return `YES` if you can sell a ticket to every person', () => {
    expect.assertions(3);

    expect(tickets([25, 25, 50, 50])).toStrictEqual('YES');
    expect(tickets([25, 100])).toStrictEqual('NO');
    expect(tickets([25, 25, 25, 25, 25, 100, 100])).toStrictEqual('NO');
  });
});
