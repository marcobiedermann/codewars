import Person from '.';

describe('person', () => {
  describe('info', () => {
    it('should return info of person', () => {
      expect.assertions(1);

      const john = new Person('john', 34);

      expect(john.info).toStrictEqual('johns age is 34');
    });
  });
});
