import Person from '.';

describe('person', () => {
  describe('info', () => {
    it('should return info of person', () => {
      const john = new Person('john', 34);

      expect(john.info).toBe('johns age is 34');
    });
  });
});
