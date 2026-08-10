interface Me {
  firstName: string;
  lastName: string;
  name: string;
}

function NameMe(this: Me, first: string, last: string) {
  this.firstName = first;
  this.lastName = last;
  this.name = `${this.firstName} ${this.lastName}`;
}

export default NameMe;
