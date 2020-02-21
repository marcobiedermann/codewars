import Person from '.';

describe('Person', () => {
  describe('info', () => {
    it('should return info of person', () => {
      const john = new Person('john', 34);

      expect(john.info).toEqual('johns age is 34');
    });
  });
});
