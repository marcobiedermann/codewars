/* eslint-disable no-underscore-dangle */

interface Person {
  _name: string;
  _friends: string[];
  fillFriends: Function;
}

const Person = () => {
  const person: Person = {
    _name: 'Leroy',
    _friends: [],

    fillFriends(f: string[]): void {
      this._friends = f;
    },
  };
  return person;
};

export default Person;
