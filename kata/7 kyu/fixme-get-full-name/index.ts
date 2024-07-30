/* eslint-disable no-useless-constructor */

class Dinglemouse {
  constructor(
    private firstName: string,
    private lastName: string,
  ) {}

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}

export default Dinglemouse;
