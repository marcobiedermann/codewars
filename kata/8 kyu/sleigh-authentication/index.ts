class Sleigh {
  name: string;

  password: string;

  constructor() {
    this.name = 'Santa Claus';
    this.password = 'Ho Ho Ho!';
  }

  authenticate(name: string, password: string): boolean {
    return this.name === name && this.password === password;
  }
}

export default Sleigh;
